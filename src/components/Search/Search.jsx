import React from 'react';

function Search({}) {
  return (
    <form className='border-2 border-primary w-full h-full flex rounded-lg text-primary'>
      <input
        className='outline-none h-full grow px-4 bg-primary bg-opacity-30 focus:bg-opacity-50 placeholder-aux_2'
        type='text'
        name='search'
        id='search_input'
        placeholder='Busca algo como "Blue Haze"'
      />
      <button
        type='submit'
        className='w-11 h-full flex bg-primary shrink-0 z-10'>
        <svg className='m-auto w-10 h-10 fill-white'>
          <use href='/svg/sprites.svg#search'></use>
        </svg>
      </button>
    </form>
  );
}

export default Search;
