import React from 'react';

function FloatingBtn({}) {
  return (
    <button className='font-secondary font-semibold floating-btn flex absolute bottom-4 right-4 p-2 shadow-primary shadow-sm rounded-full bg-white z-30'>
      <span className='floating-btn-tooltip'>
        Contactanos en Whatsapp!
        <div className='arrow'></div>
      </span>
      <svg className='m-auto w-10 h-10 lg:h-16 lg:w-16 fill-emerald-600'>
        <use href='/svg/sprites.svg#whatsapp'></use>
      </svg>
    </button>
  );
}

export default FloatingBtn;
