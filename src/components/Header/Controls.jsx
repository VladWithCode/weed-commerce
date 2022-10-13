import React from 'react';

function Controls({ setIsSearchActive }) {
  return (
    <div className='controls flex gap-x-2 basis-1/3 justify-end'>
      <button
        className='h-8 w-8'
        onClick={e => setIsSearchActive(isActive => !isActive)}>
        <svg className='h-8 w-8 fill-current'>
          <use href='/svg/sprites.svg#search'></use>
        </svg>
      </button>
    </div>
  );
}

export default Controls;
