import { useQuery } from 'react-query';

const setMercadopago = async () => {
  try {
    const mp = new MercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PK);

    console.log('Init MP');
    return mp;
  } catch (err) {
    if (process.env.NODE_ENV === 'development') console.log(err);
    throw new Error('Error al cargar Mercado Pago');
  }
};

const useMercadoPago = () => {
  const { data, isError } = useQuery(['use-mercadopago'], setMercadopago, {
    refetchOnWindowFocus: false,
  });

  return [data, isError];
};

export default useMercadoPago;
