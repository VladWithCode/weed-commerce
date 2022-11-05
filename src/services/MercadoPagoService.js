import Product from '../models/Product';
import Sale from '../models/Sale';
import asyncHandler from '../utils/asyncHandler';
import { requestErrorHandler } from '../utils/backend/requestErrorHandler';

export const createSale = async (req, res) => {
  const { mpData, saleData } = req.body;

  const hashedQtys = {};

  const [findError, products] = await asyncHandler(
    Product.find({
      _id: saleData.items.map(i => {
        hashedQtys[String(i._id)] = i.qty;

        return i._id;
      }),
    })
  );

  if (findError)
    return requestErrorHandler(findError, {
      req,
      res,
      customMessage: 'Error finding the products.',
    });

  const paymentPayload = {
    ...mpData,
    additional_info: {
      items: products.map(i => ({
        id: String(i._id),
        title: i.name,
        description: i.description,
        picture_url: i.pics[0],
        category_id: i.category,
        quantity: hashedQtys[String(i._id)],
        unit_price: i.price / 100,
      })),
      payer: {
        first_name: saleData.name,
        last_name: saleData.lastname,
        phone: { number: saleData.phone },
        address: {
          zip_code: saleData.zip,
          street_name: saleData.street,
          street_number: parseInt(saleData.extNumber),
        },
      },
      shipments: {
        receiver_address: {
          zip_code: saleData.zip,
          state_name: saleData.state,
          city_name: saleData.city,
          street_name: saleData.street,
          street_number: parseInt(saleData.extNumber),
          apartment: saleData.intNumber,
        },
      },
    },
  };

  mercadopago.payment
    .save(paymentPayload)
    .then(async response => {
      const data = response.body;

      const newSale = new Sale({
        userData: {
          name: saleData.name + ' ' + saleData.lastname,
          phone: saleData.phone,
          email: saleData.email,
        },
        street: saleData.street,
        col: saleData.col,
        zip: saleData.zip,
        num: saleData.extNumber,
        intNum: saleData.intNumber,
        refs: saleData.refs,
        city: saleData.city,
        state: saleData.state,
        // country: saleData.county,
        items: products.map(p => ({
          product: p._id,
          qty: hashedQtys[String(p._id)],
          total: p.price * hashedQtys[String(p._id)],
        })),
        paid: data.status === 'approved',
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
              savedSale.id
            : 'La venta no se ha ejecutado correctamente';

        return requestErrorHandler(saveError, {
          req,
          res,
          customMessage: errorMessage,
        });
      }

      return res.status(response.status).json({
        result: 'OK',
        sale: savedSale.toJSON(),
      });
    })
    .catch(err => requestErrorHandler(err, { req, res }));
};
