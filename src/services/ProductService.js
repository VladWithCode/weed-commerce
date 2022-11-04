import Product from '../models/Product';
import asyncHandler from '../utils/asyncHandler';
import { createDir, mvFile } from '../utils/fs';
import { join } from 'path';
import { requestErrorHandler } from '../utils/backend/requestErrorHandler';
import parseFormData from '../utils/parseFormData';

export const getAllProducts = async (req, res) => {
  let { limit, page } = req.query;
  let skip = page * limit - limit;

  let q = Product.find({})
    .select({
      name: 1,
      slug: 1,
      price: 1,
      thumb: 1,
      assetPath: 1,
      stock: 1,
    })
    .limit(parseInt(limit))
    .skip(parseInt(skip))
    .lean();

  const [findError, products] = await asyncHandler(q.exec());

  if (findError)
    return requestErrorHandler(findError, {
      customMessage: 'Error retriving the documents.',
      req,
      res,
    });

  return res.status(200).json({ result: 'OK', products });
};

export const createProduct = async (req, res) => {
  const { data, files } = await parseFormData(req);
  const product = new Product(data);

  if (!product.slug)
    product.slug = product.name.toLowerCase().replace(/[\s,.]/g, '-');

  product.assetPath = '/products/' + product.slug + '/';
  product.absolutePath = join(__dirname, '../../public/products', product.slug);

  files.forEach((f, i) => {
    if (i === 0) product.thumb = f.originalFilename;
    product.pics.push(f.originalFilename);
  });

  const [saveError, savedProduct] = await asyncHandler(product.save());

  if (saveError)
    return requestErrorHandler(saveError, {
      customMessage: 'Error while saving the product.',
      req,
      res,
    });

  const [writeError] = await asyncHandler(
    writeProductFiles(files, savedProduct.assetPath)
  );

  return res.json({
    result: 'OK',
    warn: writeError
      ? { message: 'Images could not be uploade', error: writeError }
      : undefined,
    product: savedProduct,
  });
};

export async function getProductById(req, res) {
  const { id } = req.params;

  const [findError, product] = await Product.findById(id)
    .populate('category')
    .lean();

  if (findError)
    return requestErrorHandler(findError, {
      customMessage: 'Error while retrieving the product.',
      req,
      res,
    });

  return res.json({
    result: 'OK',
    product: { ...product.toJSON(), category: product.category.name },
  });
}

export async function updateProductById(req, res) {
  const { id } = req.query;
  const data = req.body;

  const [findError, product] = await asyncHandler(Product.findById(id));

  if (findError) return requestErrorHandler(findError);

  product.set(data);

  const [saveError] = await asyncHandler(product.save());

  if (saveError)
    return requestErrorHandler(saveError, {
      customMessage: 'Error while updating document.',
      req,
      res,
    });

  return res.json({
    result: 'OK',
    product,
  });
}

export async function deleteProductById(req, res) {
  const { id } = req.query;

  const [deleteError] = await asyncHandler(Product.deleteOne({ _id: id }));

  if (deleteError)
    return requestErrorHandler(deleteError, {
      req,
      res,
      customMessage: 'Error while deleting document.',
    });

  return res.json({ result: 'OK' });
}

export async function uploadFiles(req, res) {
  const id = req.query.id;
  const { files } = await parseFormData(req);

  console.log(files);

  return res.send('uwu');
}

/*-- Helpers --*/

export async function writeProductFiles(files, path) {
  const [createDirError] = await asyncHandler(
    createDir('public' + path, {
      r: true,
    })
  );

  if (createDirError) throw createDirError;

  const writePromises = files.map(f => {
    return mvFile(f.filepath, join('/public', path, f.originalFilename));
  });

  const [writeError] = await asyncHandler(Promise.all(writePromises));

  if (writeError) throw writeError;
}
