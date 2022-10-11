import React from 'react';

function Controls() {
  return (
    <div className='controls flex gap-x-2 basis-1/3 justify-end'>
      <svg className='h-8 w-8 fill-current'>
        <use href='/svg/sprites.svg#search'></use>
      </svg>
      <svg className='h-8 w-8 fill-current'>
        <use href='/svg/sprites.svg#cart'></use>
      </svg>
    </div>
  );
}

export default Controls;
