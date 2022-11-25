import React from 'react';
import { useMutation } from 'react-query';
import { useCart } from '../../hooks/useCart';
import useMercadoPago from '../../hooks/useMercadoPago';
import { createSale } from '../../utils/mutations/sales';

const brickContainerId = 'mp-brick-container';

function MercadoPago({}) {
  // const {  }
  const total = useCart(state => state.total);
  const mutation = useMutation(createSale);

  const {} = useMercadoPago({
    containerId: brickContainerId,
    amount: total,
    mpCallbacks: {
      onSubmit: async cardFormData => {
        return await mutation.mutateAsync({
          mpData: cardFormData,
          // saleData:
        });
      },
    },
  });

  return (
    <div className='p-2'>
      <div id={brickContainerId}></div>
    </div>
  );
}

export default MercadoPago;
