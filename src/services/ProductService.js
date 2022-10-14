export const fetchProducts = async (lim = 0) => {
  let url = '/api/products';

  const response = await fetch(url);

  if (!response.ok) throw new Error('Network Error!');

  return response.json();
};
