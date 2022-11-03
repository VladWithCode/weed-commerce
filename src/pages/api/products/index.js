import {
  createProduct,
  getProducts,
  writeProductFiles,
} from '../../../services/ProductService';
import asyncHandler from '../../../utils/asyncHandler';
import connectMongo from '../../../utils/db';
import parseFormData from '../../../utils/parseFormData';

const handlers = {
  GET: async (req, res) => {
    const { limit, skip } = req.query;

    const [findError, products] = await asyncHandler(
      getProducts({
        select: {
          name: 1,
          slug: 1,
          price: 1,
          thumb: 1,
          assetPath: 1,
          stock: 1,
        },
        limit: parseInt(limit),
        skip: parseInt(skip),
        lean: true,
      })
    );

    if (findError)
      return res.status(500).json({
        message: 'There was an error while retrieving the documents',
        error: process.env.NODE_ENV !== 'production' ? findError : undefined,
      });

    return res.status(200).json({
      products: products.map(p => ({ ...p, id: p._id, _id: undefined })),
    });
  },

  POST: async (req, res) => {
    const { data, files } = await parseFormData(req);

    const [createError, product] = await asyncHandler(createProduct(data));

    if (createError) {
      return res.status(400).json({
        message: 'Error while saving the product',
        error: process.env.NODE_ENV !== 'production' ? createError : undefined,
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

    files.forEach(f => {
      product.pics.push(f.originalFilename);
    });

    product.thumb = product.pics[0];

    const [saveError] = await asyncHandler(product.save());

    if (saveError) {
      return res.status(400).json({
        message: 'Error while saving the product',
        error: process.env.NODE_ENV !== 'production' ? createError : undefined,
      });
    }

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
      error: process.env.NODE_ENV !== 'production' ? connectError : undefined,
    });

  return await handler(req, res);
}
