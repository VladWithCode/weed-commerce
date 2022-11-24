import React, { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import getClassname from '../../utils/getClassname';

function TransferMethod({}) {
  const [isTransferActive, setIsTransferActive] = useState(false);

  return (
    <div className='bg-gray-800 rounded-sm overflow-hidden'>
      <p
        className='flex text-base items-center justify-between p-2'
        role='button'
        aria-expanded={isTransferActive}
        aria-controls='transfer-method-card'
        onClick={() => setIsTransferActive(isActive => !isActive)}>
        <span>Transferencia bancaria</span>
        <svg
          className={getClassname(
            'fill-current w-8 h-8 transition-transform',
            isTransferActive ? '-rotate-90' : 'rotate-90'
          )}>
          <use href='/svg/sprites.svg#angle'></use>
        </svg>
      </p>
      <AnimateHeight
        id='transfer-method-card'
        height={isTransferActive ? 'auto' : 0}
        duration={200}
        className='bg-gray-700'>
        <p className='text-justify px-4 py-4'>
          Para realizar una compra mediante transferencia bancaria/electronica
          deberas enviar el total de tu orden a uno de los siguientes numeros de
          cuenta y tomar foto/captura de pantalla del recibo del deposito.
        </p>
        <div className='text-center text-xl py-2'>
          <p>1 234 56789012345 6</p>
          <p>1 234 56789012345 6</p>
          <p>1 234 56789012345 6</p>
        </div>
        <p className='text-justify px-4 py-4'>
          Luego la foto/captura deberas de enviarla a uno de los numeros o
          correos de contacto que aparecen mas abajo.
        </p>
        <div className='text-center text-xl py-2'>
          <p>(618)-888-7799</p>
          <p>(618)-888-7799</p>
          <p>(618)-888-7799</p>
        </div>
      </AnimateHeight>
    </div>
  );
}

export default TransferMethod;
