import React from 'react';

function Toggler({ setIsActive }) {
  return (
    <div className='toggler basis-1/3'>
      <span
        className='w-fit flex flex-col justify-center items-start gap-y-1 cursor-pointer'
        onClick={e => setIsActive(prev => !prev)}>
        <span className='h-1 w-6 bg-current' />
        <span className='h-1 w-4 bg-current' />
        <span className='h-1 w-2 bg-current' />
      </span>
    </div>
  );
}

export default Toggler;
