import {
  createCategory,
  findAllCategories,
} from '../../../services/CategoryService';

const handlers = {
  GET: findAllCategories,
  POST: createCategory,
  PUT: () => {},
  DELETE: () => {},
};

export default async function handler(req, res) {
  const methodHandler = handlers[req.method];

  if (!methodHandler)
    return res.status(404).json({ message: 'Method not implemented' });

  return await methodHandler(req, res);
}
