import {
  createProduct,
  getAllProducts,
} from '../../../services/ProductService';
import connectMongo from '../../../utils/db';

const handlers = {
  GET: getAllProducts,
  POST: createProduct,
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function index(req, res) {
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
