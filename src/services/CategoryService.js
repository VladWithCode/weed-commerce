import Category from '../models/Category';
import Product from '../models/Product';
import asyncHandler from '../utils/asyncHandler';
import { requestErrorHandler } from '../utils/backend/requestErrorHandler';

export const createCategory = async (req, res) => {
  const createdCategory = new Category(req.body);

  const [saveError, savedCategory] = await asyncHandler(createdCategory.save());

  if (saveError)
    return requestErrorHandler(saveError, {
      customMessage: 'There was an error while saving the document.',
      req,
      res,
    });

  return res.json({ result: 'OK', category: savedCategory });
};

export const findAllCategories = async (req, res) => {
  if (req.query.topCtgs === 'true') return findTopCategories(req, res);

  const [findError, foundCategories] = await asyncHandler(
    Category.find({}, '-__v').lean()
  );

  if (findError)
    return requestErrorHandler(findError, {
      customMessage: 'There was an error while fetching the documents.',
      req,
      res,
    });

  return res.json({ result: 'OK', categories: foundCategories });
};

export const findTopCategories = async (req, res) => {
  const [findError, foundCategories] = await asyncHandler(
    Category.find({ count: { $gt: 0 } }, '-__v')
      .populate({
        path: 'products',
        select: 'name price thumb assetPath',
        transform: doc => ({ ...doc, id: doc._id }),
        options: {
          options: {
            limit: 4,
            lean: true,
          },
        },
      })
      .sort({ count: -1 })
      .lean()
  );

  if (findError) return requestErrorHandler(findError, { req, res });

  return res.json({
    result: 'OK',
    categories: foundCategories,
  });
};
