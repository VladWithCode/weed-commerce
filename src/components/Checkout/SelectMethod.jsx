import Link from 'next/link';
import React from 'react';
import CardMethod from './CardMethod';
import TransferMethod from './TransferMethod';

function SelectMethod() {
  return (
    <>
      <p className='text-lg'>Seleccionar Método de pago</p>
      <div className='py-4 space-y-4'>
        <TransferMethod />
        <CardMethod />
      </div>
      <p className='text-xs text-gray-500 mb-2'>
        Recuerda que al confirmar tu compra tambien estas confirmando que has
        leido y estas de acuerdo con los&nbsp;
        <Link href='/terminos'>
          <a className='text-indigo-500 underline'>terminos de servicio</a>
        </Link>
        &nbsp;,&nbsp;
        <Link href='/envios'>
          <a className='text-indigo-500 underline'>politica de envios</a>
        </Link>
        &nbsp;y&nbsp;
        <Link href='/reembolsos'>
          <a className='text-indigo-500 underline'>politica de reembolzos</a>
        </Link>
        .
      </p>
    </>
  );
}

export default SelectMethod;
