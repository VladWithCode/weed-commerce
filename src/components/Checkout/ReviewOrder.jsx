import React from 'react';
import { useCart } from '../../hooks/useCart';
import { usePaymentForm } from '../../hooks/usePaymentForm';
import { priceToString } from '../../utils/numberToString';
import Item from '../Cart/Item';

function ReviewOrder() {
  const cart = useCart();
  const shipping = usePaymentForm(state => state.shipping);
  const customer = usePaymentForm(state => state.customer);

  return (
    <>
      <p className='text-lg'>Revisar Pedido</p>
      <div className='flex flex-col gap-y-2'>
        {cart.items.map(item => (
          <Item id={item.id} />
        ))}
      </div>
      <div className='flex flex-wrap'>
        <div className='w-full py-4 md:w-1/2 lg:w-1/3'>
          <div className='text-gray-500'>
            <p>Nombre completo:</p>
            <p className='font-semibold text-white'>
              {customer.names + ' ' + customer.lastname}
            </p>
          </div>
          <div className='text-gray-500'>
            <p>Correo electronico:</p>
            <p className='font-semibold text-white'>{customer.email}</p>
          </div>
          <div className='text-gray-500'>
            <p>Telefono:</p>
            <p className='font-semibold text-white'>{customer.phone}</p>
          </div>
        </div>
        <div className='w-full py-4 md:w-1/2 lg:w-1/3'>
          <div className='text-gray-500'>
            <p>Domicilio de entrega:</p>
            <p className='text-sm font-semibold text-white'>
              {`${shipping.street} No. ${shipping.num}`}
            </p>
            <p className='text-sm font-semibold text-white'>
              {`${shipping.hood}. C.P.${shipping.zip}`}
            </p>
            <p className='text-sm font-semibold text-white'>
              {`${shipping.city}, ${shipping.state}`}
            </p>
            <p className='text-sm font-semibold text-white mt-2'>
              {shipping.refs}
            </p>
          </div>
        </div>
        <div className='w-full py-4 md:w-1/2 md:ml-auto lg:w-1/3'>
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
      </div>
    </>
  );
}

export default ReviewOrder;
