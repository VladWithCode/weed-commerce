import React, { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import getClassname from '../../utils/getClassname';
import MercadoPago from './MercadoPago';

function CardMethod() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='bg-gray-800 rounded-sm overflow-hidden'>
      <p
        className='flex text-base items-center justify-between p-2'
        role='button'
        aria-expanded={isActive}
        aria-controls='card-method-content'
        onClick={() => setIsActive(isActive => !isActive)}>
        <span>Tarjeta de Credito/Debito</span>
        <svg
          className={getClassname(
            'fill-current w-8 h-8 transition-transform',
            isActive ? '-rotate-90' : 'rotate-90'
          )}>
          <use href='/svg/sprites.svg#angle'></use>
        </svg>
      </p>
      <AnimateHeight
        id='card-method-content'
        height={isActive ? 'auto' : 0}
        duration={500}
        className='bg-gray-700'>
        <MercadoPago />
      </AnimateHeight>
    </div>
  );
}

export default CardMethod;
