import React from 'react';
import { useCart } from '../../hooks/useCart';
import { priceToString } from '../../utils/numberToString';
import Item from '../Cart/Item';

function ReviewOrder() {
  const cart = useCart();

  return (
    <>
      <p className='text-lg'>Revisar Pedido</p>
      <div className='flex flex-col gap-y-2'>
        {cart.items.map(item => (
          <Item id={item.id} />
        ))}
      </div>
      <div className='py-4 md:w-1/2 md:ml-auto lg:w-1/3'>
        <div className='flex justify-between text-gray-500'>
          <p>Subtotal:</p>
          <p className='font-semibold text-white'>
            ${priceToString(cart.subtotal)}
          </p>
        </div>
        <div className='flex justify-between text-gray-500'>
          <p>Envío:</p>
          <p className='font-semibold text-white'>
            ${priceToString(cart.shipping)}
          </p>
        </div>
        <div className='flex justify-between text-gray-500'>
          <p>Total:</p>
          <p className='font-semibold text-white'>
            ${priceToString(cart.total)}
          </p>
        </div>
      </div>
    </>
  );
}

export default ReviewOrder;
