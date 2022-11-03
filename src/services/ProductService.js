import Product from '../models/Product';
import asyncHandler from '../utils/asyncHandler';
import { createDir, mvFile } from '../utils/fs';
import { join } from 'path';
import isEmptyObject from '../utils/isEmptyObject';

export const getProducts = async ({
  query = {},
  select,
  limit = 0,
  skip = 0,
  lean = false,
}) => {
  let q = Product.find(query).limit(limit).skip(skip);

  if (!isEmptyObject(select)) q.select(select);

  if (lean) q.lean();

  return await q;
};

export const createProduct = async data => {
  const product = new Product(data);

  if (!product.slug)
    product.slug = product.name.toLowerCase().replace(/[\s,.]/g, '-');

  product.assetPath = '/products/' + product.slug + '/';

  product.ctgs = data.ctgs?.split(',') || 'sin categoria';

  return await product.save();
};

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
