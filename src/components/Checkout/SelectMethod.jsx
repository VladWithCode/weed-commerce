import React from 'react';
import TransferMethod from './TransferMethod';

function SelectMethod() {
  return (
    <>
      <p className='text-lg'>Seleccionar Método de pago</p>
      <div className='py-4'>
        <TransferMethod />
      </div>
    </>
  );
}

export default SelectMethod;
