import Product from '../models/Product';
import Category from '../models/Category';
import Sale from '../models/Sale';
import asyncHandler from '../utils/asyncHandler';
import { requestErrorHandler } from '../utils/backend/requestErrorHandler';

const mercadopago = require('mercadopago');

mercadopago.configurations.setAccessToken(process.env.MERCADOPAGO_ACCESS_TOKEN);

export const createSale = async (req, res) => {
  const { mpData, saleData } = req.body;

  const hashedQtys = {};

  const [findError, products] = await asyncHandler(
    Product.find(
      {
        _id: saleData.items.map(item => {
          hashedQtys[item.id] = item.qty;

          return item.id;
        }),
      },
      {
        name: 1,
        description: 1,
        category: 1,
        price: 1,
        thumb: 1,
        assetPath: 1,
      }
    ).populate({
      path: 'category',
      transform: doc => doc.name,
    })
  );

  if (findError)
    return requestErrorHandler(findError, {
      req,
      res,
      customMessage: 'Error finding the products.',
    });

  const { customer, shipping } = saleData;

  const paymentPayload = {
    ...mpData,
    additional_info: {
      items: products.map(i => ({
        id: String(i._id),
        title: i.name,
        description: i.description,
        picture_url: i.thumb,
        category_id: i.category,
        quantity: hashedQtys[String(i._id)],
        unit_price: i.price / 100,
      })),
      payer: {
        first_name: customer.names,
        last_name: customer.lastname,
        phone: { number: customer.phone },
        address: {
          zip_code: shipping.zip,
          street_name: shipping.street,
          street_number: parseInt(shipping.num),
        },
      },
      shipments: {
        receiver_address: {
          zip_code: shipping.zip,
          state_name: shipping.state,
          city_name: shipping.city,
          street_name: shipping.street,
          street_number: parseInt(shipping.num),
        },
      },
    },
  };

  mercadopago.payment
    .save(paymentPayload)
    .then(async response => {
      const data = response.body;

      const items = [];
      let subtotal = 0;

      for (let p of products) {
        subtotal += p.price * hashedQtys[String(p._id)];

        items.push({
          product: p._id,
          qty: hashedQtys[String(p._id)],
          total: p.price * hashedQtys[String(p._id)],
        });
      }

      const newSale = new Sale({
        userData: {
          fullname: customer.names + ' ' + customer.lastname,
          phone: customer.phone,
          email: customer.email,
        },
        street: shipping.street,
        col: shipping.hood,
        zip: shipping.zip,
        num: shipping.num,
        // intNum: shipping.intNumber,
        refs: shipping.refs,
        city: shipping.city,
        state: shipping.state,
        // country: shipping.county,
        items: items,
        subtotal: subtotal,
        shippingFee: saleData.shippingFee,
        total: subtotal + (parseInt(saleData.shippingFee) || 0),
        paidatad: data.status === 'approved',
        paidAt: data.date_approved,
        earnings: data.transaction_details.net_received_amount * 100,
        paymentData: {
          id: data.id,
          method: 'tarjeta',
        },
      });

      const [saveError, savedSale] = await asyncHandler(newSale.save());

      if (saveError) {
        let errorMessage =
          data.status === 'approved'
            ? 'Ocurrio un error al guardar tu compra en la base de datos. Por favor, contacta a soporte para solucionar este problema. ID de la venta: ' +
              data.id
            : 'La venta no se ha ejecutado correctamente';

        return requestErrorHandler(saveError, {
          req,
          res,
          customMessage: errorMessage,
        });
      }

      return res.status(response.status).json({
        result: 'OK',
        saleId: savedSale._id,
      });
    })
    .catch(err => requestErrorHandler(err, { req, res }));
};
