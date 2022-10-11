import React from 'react';

function Search({}) {
  return (
    <form className='w-full h-full flex'>
      <input
        className='outline-none h-full grow px-2 bg-secondary bg-opacity-25 focus:bg-opacity-90'
        type='text'
        name='search'
        id='search_input'
      />
      <button type='submit' className='w-11 h-11 flex bg-primary shrink-0 z-10'>
        <svg className='m-auto w-10 h-10 fill-secondary'>
          <use href='/svg/sprites.svg#search'></use>
        </svg>
      </button>
    </form>
  );
}

export default Search;
