import Product from '../models/Product';
import Sale from '../models/Sale';
import asyncHandler from '../utils/asyncHandler';
import { requestErrorHandler } from '../utils/backend/requestErrorHandler';

export const createSale = async (req, res) => {
  const { data } = req.body;

  const hashedQtys = {};

  const [findError, products] = await asyncHandler(
    Product.find({
      _id: data.items.map(i => {
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

  const newSale = new Sale({
    userData: {
      name: saleData.name + ' ' + saleData.lastname,
      phone: saleData.phone,
      email: saleData.email,
    },
    street: saleData.street,
    col: saleData.col,
    zip: saleData.zip,
    num: saleData.num,
    intNum: saleData.intNum,
    refs: saleData.refs,
    city: saleData.city,
    state: saleData.state,
    // country: saleData.county,
    items: products.map(p => ({
      product: p._id,
      qty: hashedQtys[String(p._id)],
      total: p.price * hashedQtys[String(p._id)],
    })),
    paid: false,
  });

  const [saveError, savedSale] = await asyncHandler(newSale.save());

  if (saveError)
    return requestErrorHandler(saveError, {
      req,
      res,
      customMessage:
        'Ocurrio un error al procesar tu compra. Intenta de nuevo.',
    });

  return res.json({
    result: 'OK',
    sale: savedSale.toJSON(),
  });
};

export const getSaleById = async (req, res) => {
  const { id } = req.query;

  const [findError, sale] = await asyncHandler(
    Sale.findById(id)
      .populate({
        path: 'product',
        options: {
          lean: true,
        },
      })
      .transform(doc => {
        let resultSale = {
          id: doc.id,
          fullname: doc.userData.fullname,
          email: doc.userData.email,
          phone: doc.userData.phone,
          street: doc.street,
          num: doc.num,
          intNum: doc.intNum,
          col: doc.col,
          zip: doc.zip,
          refs: doc.refs,
          subtotal: doc.subtotal,
          shipping: doc.shipping,
          total: doc.total,
          paid: doc.paid,
        };

        resultSale.items = doc.items?.map(item => {
          return {
            qty: item.qty,
            total: item.total,
            name: item.product.name,
            price: item.product.price,
            unit: item.product.unit || 'unidades',
          };
        });

        return resultSale;
      })
      .lean()
  );

  if (findError)
    return requestErrorHandler(findError, {
      req,
      res,
      customMessage: 'Error while retrieving the sale.',
    });

  return res.json({
    result: sale ? 'OK' : 'NOT_FOUND',
    sale,
  });
};
