import Image from 'next/image';
import React from 'react';

function Menu({ isActive, setIsActive }) {
  return (
    <nav
      className={'menu absolute top-0 h-screen w-80 max-w-full z-30 bg-secondary shadow-md shadow-purple-400'.concat(
        isActive ? ' active' : ''
      )}>
      <div className='w-16 h-16'>
        <Image
          src='/img/logo_handless_light.png'
          height={64}
          width={64}
          alt='SK LEAF LOGO'
        />
      </div>
      <span
        className='absolute top-2 right-2'
        onClick={e => setIsActive(false)}>
        <svg className='w-8 h-8 fill-current'>
          <use href='/svg/sprites.svg#times'></use>
        </svg>
      </span>
    </nav>
  );
}

export default Menu;
