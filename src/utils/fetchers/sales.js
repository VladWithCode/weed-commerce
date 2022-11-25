export const fetchSaleById = async id => {
  const response = await fetch('/api/sales/' + id);
  const data = await response.json();

  if (!response.ok)
    throw new Error(data.message || 'Error al conectarse con el servidor');

  return data;
};
