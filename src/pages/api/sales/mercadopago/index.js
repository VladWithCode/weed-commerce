import { createSale } from '../../../../services/MercadoPagoService';
import { requestErrorHandler } from '../../../../utils/backend/requestErrorHandler';
import connectMongo from '../../../../utils/db';

const handlers = {
  POST: createSale,
};

export default async function index(req, res) {
  const methodHandler = handlers[req.method];

  if (!methodHandler)
    return res.status(404).json({ message: 'Method not implemented' });

  const connectError = await connectMongo();

  if (connectError)
    return requestErrorHandler(connectError, {
      req,
      res,
      customMessage: 'Error while connecting to db',
    });

  return await methodHandler(req, res);
}
