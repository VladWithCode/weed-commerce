import React from 'react';

function Toggler({ setIsActive }) {
  return (
    <div
      className='toggler flex flex-col justify-center items-start w-6 gap-y-1 basis-1/3'
      onClick={e => setIsActive(prev => !prev)}>
      <span className='h-1 w-6 bg-current' />
      <span className='h-1 w-4 bg-current' />
      <span className='h-1 w-2 bg-current' />
    </div>
  );
}

export default Toggler;
