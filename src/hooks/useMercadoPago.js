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
  const {
    data: mp,
    isSuccess,
    isError,
  } = useQuery(['use-mercadopago'], setMercadopago, {
    refetchOnWindowFocus: false,
  });
  const controllerRef = useRef(null);
  const containerRef = useRef();

  const createBrick = useCallback(async () => {
    const builder = mp.bricks();
    const controller = await builder.create('cardPayment', containerId, {
      initialization: {
        amount: amount / 100,
      },
      callbacks: {
        onSubmit: mpCallbacks.onSubmit,
        onReady: () => {
          if (typeof mpCallbacks.onReady === 'function')
            return mpCallbacks.onReady();
        },
        onError: err => {
          if (process.env.NODE_ENV === 'development') console.log(err);
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
    containerRef.current = document.getElementById(containerId);
  }, [mp, containerId]);

  const clearBrick = useCallback(async () => {
    if (!controllerRef.current || !containerRef.current) return;
    await controllerRef.current.unmount();
    containerRef.current.innerHTML = '';
    controllerRef.current = null;

    console.log('Cleared');
  }, []);

  /* useEffect(() => {
    if (mp && !isError && !controllerRef?.current) {
      createBrick();
    }

    return clearBrick;
  }, [mp, isError, createBrick, clearBrick]); */

  return { mp, isError, isReady: isSuccess, clearBrick, createBrick };
};

export default useMercadoPago;
