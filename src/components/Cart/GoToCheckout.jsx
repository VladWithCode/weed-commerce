import React from 'react';
import { priceToString } from '../../utils/numberToString';
import Button from '../globals/Button';

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
      <Button className='mt-auto mb-4 ml-auto text-lg w-full'>
        Proceder al Pago
      </Button>
    </div>
  );
}

export default GoToCheckout;
