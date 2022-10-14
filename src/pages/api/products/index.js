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
};

export default async function index(req, res) {
  const { method } = req;

  const handler = handlers[method];

  if (!handler || typeof handler !== 'function')
    return res.status(404).json({
      message: `Cannot ${method} ${req.path}`,
    });

  return await handler(req, res);
}
