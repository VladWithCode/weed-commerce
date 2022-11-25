export const createSale = async paymentData => {
  return fetch('/api/sales/mercadopago', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(paymentData),
  });
};
