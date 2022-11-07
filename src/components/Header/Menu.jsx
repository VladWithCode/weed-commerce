import Image from 'next/image';
import React from 'react';
import getClassname from '../../utils/getClassname';
import Navigation from './Navigation';
import Usefull from './Usefull';

function Menu({ isActive, setIsActive }) {
  return (
    <nav
      className={getClassname(
        'menu absolute top-0 w-full h-screen z-30 overflow-hidden',
        isActive ? ' active' : null
      )}>
      <div className='relative flex flex-col w-80 h-full max-w-full 2xl:max-w-none 2xl:w-1/3 z-20 2xl:px-12 bg-zinc-900 text-secondary border-indigo-500 border-r-2 border-opacity-40'>
        <div className='w-16 h-16 grow-0 ml-4 mt-2'>
          <Image
            src='/img/logo_handless_light.png'
            height={64}
            width={64}
            alt='SK LEAF LOGO'
          />
        </div>
        <Navigation setIsActive={setIsActive} />
        {/* <Usefull /> */}
        <button
          className='absolute top-5 right-3 2xl:right-12'
          onClick={e => setIsActive(false)}>
          <svg className='w-8 h-8 fill-current'>
            <use href='/svg/sprites.svg#times'></use>
          </svg>
        </button>
      </div>
      <div
        className='absolute z-10 top-0 left-0 w-full h-full'
        onClick={e => setIsActive(false)}></div>
    </nav>
  );
}

export default Menu;
