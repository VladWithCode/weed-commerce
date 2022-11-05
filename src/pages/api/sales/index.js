import { createSale } from '../../../services/SaleService';

const handlers = {
  GET: () => {},
  POST: createSale,
};

export default async function sales(req, res) {
  const methodHandler = handlers[req.method];

  if (!methodHandler)
    return res.status(404).json({ message: 'Method not implemented' });

  const connectError = await connectMongo();

  if (connectError)
    return res.status(500).json({
      message: 'Error while connecting to db',
      error: process.env.NODE_ENV !== 'production' ? connectError : undefined,
    });

  return await methodHandler(req, res);
}
