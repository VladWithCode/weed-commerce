import Image from 'next/image';
import React from 'react';
import Navigation from './Navigation';
import Usefull from './Usefull';

function Menu({ isActive, setIsActive }) {
  return (
    <nav
      className={'menu flex flex-col absolute top-0 h-screen w-80 max-w-full z-30 bg-secondary shadow-sm shadow-primary 2xl:max-w-none 2xl:w-2/6 2xl:px-12'.concat(
        isActive ? ' active' : ''
      )}>
      <div className='w-16 h-16 grow-0 ml-4 mt-2'>
        <Image
          src='/img/logo_handless_light.png'
          height={64}
          width={64}
          alt='SK LEAF LOGO'
        />
      </div>
      <Navigation />
      <Usefull />
      <span
        className='absolute top-5 right-3 2xl:right-12'
        onClick={e => setIsActive(false)}>
        <svg className='w-8 h-8 fill-current'>
          <use href='/svg/sprites.svg#times'></use>
        </svg>
      </span>
    </nav>
  );
}

export default Menu;
