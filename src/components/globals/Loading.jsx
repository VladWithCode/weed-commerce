import React from 'react';

function Loading() {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
      <span className='text-white text-6xl font-bold py-12'>Loading...</span>
      <span className='rounded-full border-transparent border-t-white border-8 animate-spin w-12 h-12'></span>
    </div>
  );
}

export default Loading;
