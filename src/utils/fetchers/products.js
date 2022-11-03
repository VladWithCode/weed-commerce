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
