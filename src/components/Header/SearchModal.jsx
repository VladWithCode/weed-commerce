import React from 'react';
import getClassname from '../../utils/getClassname';
import Search from '../Search/Search';

function SearchModal({ isActive, setIsActive }) {
  return (
    <div
      className={getClassname(
        'search-modal h-40 flex flex-col items-center left-0 right-0 bg-white p-4 z-30 border-b-4 border-indigo-500 font-secondary font-bold',
        isActive ? ' active' : null
      )}>
      <div className='flex justify-between items-center w-full max-w-4xl z-10'>
        <p className='text-primary text-xl font-semibold font-secondary py-5 px-2 mr-auto'>
          Busca una cepa...
        </p>
        <button
          className='close ml-auto cursor-pointer'
          onClick={e => setIsActive(false)}>
          <svg className='w-6 h-6 fill-primary'>
            <use href='/svg/sprites.svg#times'></use>
          </svg>
        </button>
      </div>
      <div className='m-auto mt-0 flex h-11 w-full justify-center items-center rounded max-w-4xl overflow-hidden z-10'>
        <Search />
      </div>
    </div>
  );
}

export default SearchModal;
