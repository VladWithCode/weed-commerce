import {
  createProduct,
  writeProductFiles,
} from '../../../services/ProductService';
import asyncHandler from '../../../utils/asyncHandler';
import connectMongo from '../../../utils/db';
import parseFormData from '../../../utils/parseFormData';

const handlers = {
  GET: async (req, res) => {
    const { lim } = req.query;

    const testProducts = [
      {
        id: 1,
        slug: 'blue-haze-1gr-indica',
        name: 'Gorila Glue',
        price: 30000,
      },
      {
        id: 2,
        slug: 'blue-haze-1gr-indica',
        name: 'Blue Dream',
        price: 85000,
      },
      {
        id: 3,
        slug: 'blue-haze-1gr-indica',
        name: 'Gelato',
        price: 60000,
      },
    ];

    return res.status(200).json({
      products: testProducts,
    });
  },

  POST: async (req, res) => {
    const { data, files } = await parseFormData(req);

    const [createError, product] = await asyncHandler(createProduct(data));

    if (createError) {
      return res.status(400).json({
        message: 'Error while saving the product',
        error: process.env.DEBUG ? createError : undefined,
      });
    }

    const [writeError] = await asyncHandler(
      writeProductFiles(files, product.assetPath)
    );

    if (writeError)
      return res.status(201).json({
        product,
        warn: { message: 'Images could not be uploaded', error: writeError },
      });

    return res.status(201).json({
      product,
    });
  },
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
      error: process.env.DEBUG ? connectError : undefined,
    });

  return await handler(req, res);
}
