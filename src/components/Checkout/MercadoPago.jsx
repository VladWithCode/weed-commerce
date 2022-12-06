import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useMutation } from 'react-query';
import shallow from 'zustand/shallow';
import { useCart } from '../../hooks/useCart';
import useMercadoPago from '../../hooks/useMercadoPago';
import { usePaymentForm } from '../../hooks/usePaymentForm';
import { useToast } from '../../hooks/useToast';
import { createSale } from '../../utils/mutations/sales';

const brickContainerId = 'mp-brick-container';

function MercadoPago({}) {
  const router = useRouter();

  const { displayErrorToast, displayToast } = useToast(
    state => ({
      displayErrorToast: state.displayErrorToast,
      displayToast: state.displayToast,
    }),
    shallow
  );
  const clearCart = useCart(state => state.clearCart);
  const contents = useCart(
    state => ({
      items: state.items.map(i => ({ qty: i.qty, id: i.id })),
      shippingFee: state.shipping,
      total: state.total,
    }),
    shallow
  );
  const { customer, shipping } = usePaymentForm(
    state => ({ customer: state.customer, shipping: state.shipping }),
    shallow
  );
  const mutation = useMutation(createSale);

  const { createBrick, clearBrick, isReady } = useMercadoPago({
    containerId: brickContainerId,
    amount: contents.total,
    mpCallbacks: {
      onSubmit: async cardFormData => {
        return await mutation.mutateAsync(
          {
            mpData: cardFormData,
            saleData: {
              customer,
              shipping,
              ...contents,
            },
          },
          {
            onSuccess: async res => {
              const data = await res.json();
              if (!res.ok) {
                return displayErrorToast(
                  data.message || 'Ocurrio un error al procesar la venta.'
                );
              }
              clearCart();
              displayToast(
                'Tu compra se ha completado exitosamente. Seras redirigido en breve'
              );

              router.push('/ver-pedido/' + data.saleId);
            },
          }
        );
      },
    },
  });

  useEffect(() => {
    if (isReady) {
      createBrick();

      return () => clearBrick();
    }
  }, [isReady, clearBrick, createBrick]);

  return (
    <div className='p-2'>
      <div id={brickContainerId}></div>
    </div>
  );
}

export default MercadoPago;
