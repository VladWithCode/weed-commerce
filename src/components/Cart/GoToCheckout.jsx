import Link from 'next/link';
import React from 'react';
import { priceToString } from '../../utils/numberToString';

function GoToCheckout({ count, subtotal }) {
  return (
    <div className='p-4 h-40 lg:h-60 flex flex-col text-xl border-2 border-indigo-500 border-opacity-25 rounded bg-slate-800'>
      <div className='flex justify-between mb-2'>
        <div className='font-bold'>
          <div>Subtotal:</div>
          <div>({count} productos)</div>
        </div>
        <div className='font-light'>${priceToString(subtotal)}</div>
      </div>
      <Link href='/carrito/pago'>
        <a className='rounded-sm bg-secondary btn p-2 hover:bg-opacity-100 hover:text-white mt-auto text-lg w-full text-center'>
          Proceder al Pago
        </a>
      </Link>
    </div>
  );
}

export default GoToCheckout;
