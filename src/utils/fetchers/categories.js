export const fetchStoreTopCategories = async () => {
  const response = await fetch('/api/categories?topCtgs=true');

  if (!response.ok) throw new Error('Network Error!');

  return response.json();
};
