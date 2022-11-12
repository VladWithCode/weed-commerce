export const fetchProducts = async ({ limit = 0 }) => {
  let filters = {};

  if (limit > 0) filters.limit = limit;

  let keys = Object.keys(filters);

  const response = await fetch(
    '/api/products'.concat(
      keys.length > 0
        ? '?' + keys.map((k, i) => `${i > 0 ? '&' : ''}${k}=${filters[k]}`)
        : ''
    )
  );

  if (!response.ok) throw new Error('Network Error!');

  return response.json();
};

export const fetchProductsPerCategory = async (
  ctg,
  { limit = 9, page = 1 }
) => {
  const response = await fetch(
    `/api/products/per-category/${ctg}?limit=${limit}&page=${page}`,
    {
      headers: {
        accept: 'application/json',
      },
    }
  );
  const data = await response.json();

  if (!response.ok) throw new Error(data.message);

  return data;
};
