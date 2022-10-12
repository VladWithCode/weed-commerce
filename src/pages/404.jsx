import React from 'react';
import Button from '../components/globals/Button';
import Search from '../components/Search/Search';

function Error404({}) {
  return (
    <div className='w-full h-[calc(100vh-96px)] bg-secondary'>
      <div className='container font-secondary font-bold text-white text-center mx-auto py-14 px-2'>
        <h1 className='text-8xl'>Ups...</h1>
        <p className='text-xl py-6 font-light'>
          Parece que la página que estas buscando fue eliminada o no existe.
        </p>
        <p className='text-xl pb-6 font-light'>
          Intenta buscar algo similar en el sitio:
        </p>
        <div className='min-w-min h-12 px-4'>
          <Search />
        </div>
        <div className='flex justify-evenly mt-12 px-4 gap-x-2'>
          <Button style='primary'>Volver al inicio</Button>
          <Button style='dark'>Ir a un producto random</Button>
        </div>
      </div>
    </div>
  );
}

export default Error404;
