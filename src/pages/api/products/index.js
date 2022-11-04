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
  const { method } = req;

  const handler = handlers[method];

  if (!handler || typeof handler !== 'function')
    return res.status(404).json({
      message: `Cannot ${method} ${req.path}`,
    });

  const connectError = await connectMongo();

  if (connectError)
    return res.status(500).json({
      message: 'Error while connecting to db',
      error: process.env.NODE_ENV !== 'production' ? connectError : undefined,
    });

  return await handler(req, res);
}
