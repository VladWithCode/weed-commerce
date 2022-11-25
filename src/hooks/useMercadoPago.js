import { useCallback, useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';

const setMercadopago = async () => {
  try {
    const mp = new MercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PK);

    if (process.env.NODE_ENV === 'development') console.log('Init MP');
    return mp;
  } catch (err) {
    if (process.env.NODE_ENV === 'development') console.log(err);
    throw new Error('Error al cargar Mercado Pago');
  }
};

const useMercadoPago = ({
  containerId = 'mp-brick-container',
  amount,
  mpCallbacks,
}) => {
  const { data: mp, isError } = useQuery(['use-mercadopago'], setMercadopago, {
    refetchOnWindowFocus: false,
  });
  const [isReady, setIsReady] = useState(false);
  const controllerRef = useRef(null);
  const containerRef = useRef(document.getElementById(containerId));

  const createBrick = useCallback(async () => {
    const builder = mp.bricks();
    const controller = await builder.create('cardPayment', containerId, {
      initialization: {
        amount: amount / 100,
      },
      callbacks: {
        onSubmit: mpCallbacks.onSubmit,
        onReady: () => {
          setIsReady(true);
          if (typeof mpCallbacks.onReady === 'function')
            return mpCallbacks.onReady();
        },
        onError: err => {
          if (process.env.NODE_ENV === 'development') console.log(err);
          setIsReady(false);
          if (typeof mpCallbacks.onError === 'function')
            mpCallbacks.onError(err);
        },
      },
      customization: {
        paymentMethods: {
          maxInstallments: 1,
        },
      },
    });

    controllerRef.current = controller;
  }, [mp, containerId]);

  const clearBrick = useCallback(async () => {
    if (controllerRef.current) await controllerRef.current.unmount();
    containerRef.current.innerHTML = '';
    controllerRef.current = null;
    setIsReady(false);
  }, []);

  useEffect(() => {
    if (mp && !isError && !controllerRef.current) {
      createBrick();
    }
  }, [mp, isError, createBrick, clearBrick]);

  return { mp, isError, isReady };
};

export default useMercadoPago;
