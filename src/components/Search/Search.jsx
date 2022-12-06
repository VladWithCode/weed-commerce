import { useRouter } from 'next/router';
import React, { useState } from 'react';

function Search({ onSubmit }) {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const handleSearchSubmit = e => {
    e.preventDefault();

    if (typeof onSubmit === 'function') {
      onSubmit(e);
    }

    router.push(`/buscar?search=${search}`);
  };

  return (
    <form
      className='border-2 border-black w-full h-full flex rounded-lg text-black'
      onSubmit={handleSearchSubmit}>
      <input
        className='outline-none h-full grow px-4 bg-white bg-opacity-30 focus:bg-opacity-50 placeholder-gray-300'
        type='text'
        name='search'
        id='search_input'
        placeholder='Busca algo como "Blue Haze"'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button type='submit' className='w-11 h-full flex bg-black shrink-0 z-10'>
        <svg className='m-auto w-10 h-10 fill-white'>
          <use href='/svg/sprites.svg#search'></use>
        </svg>
      </button>
    </form>
  );
}

export default Search;
