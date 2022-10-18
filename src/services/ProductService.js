import Product from '../models/Product';
import asyncHandler from '../utils/asyncHandler';
import { createDir, mvFile } from '../utils/fs';
import { join } from 'path';
import isEmptyObject from '../utils/isEmptyObject';

export const getProducts = async ({
  query = {},
  select,
  lim = 0,
  skip = 0,
}) => {
  let q = Product.find(query).limit(lim).skip(skip);

  if (!isEmptyObject(select)) q.select(select);

  return await q;
};

export const createProduct = async data => {
  const product = new Product(data);

  if (!product.slug)
    product.slug = product.name.toLowerCase().replace(/[\s,.]/g, '-');

  product.assetPath = '/products/' + product.slug + '/';

  return product;
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
