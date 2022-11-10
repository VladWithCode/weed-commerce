import Image from 'next/image';
import React from 'react';

function PageHeader({ children, bgImg = '/img/placeholder.jpg' }) {
  return (
    <div className='relative flex overflow-hidden items-center h-[25vh] pt-4 bg-black bg-opacity-40 text-white'>
      <div className='absolute top-0 bottom-0 w-screen h-screen -z-10'>
        <Image src={bgImg} layout='fill' objectFit='cover' />
      </div>
      <h1 className='text-2xl font-semibold px-6 z-10 container mx-auto'>
        {children}
      </h1>
    </div>
  );
}

export default PageHeader;
