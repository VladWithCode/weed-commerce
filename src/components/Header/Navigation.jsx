import Link from 'next/link';
import React, { useState } from 'react';

function Navigation() {
  const [count, setCount] = useState(0);

  return (
    <nav className='w-full px-4 text-xl text-white font-secondary font-semibold mt-6 mb-auto'>
      <ul className='flex flex-col list-none gap-y-6'>
        <li className='hover:underline underline-offset-4'>
          <Link href='/'>
            <a>Inicio</a>
          </Link>
        </li>
        <li className='hover:underline underline-offset-4'>
          <Link href='/carrito'>
            <a className='flex justify-between relative'>
              <span>Carrito</span>
              <svg className='h-8 w-8 fill-current'>
                <use href='/svg/sprites.svg#cart'></use>
              </svg>
              {count > 0 && (
                <span className='absolute top-0 right-0 text-xs bg-secondary rounded-full px-1'>
                  {count > 99 ? '99+' : count}
                </span>
              )}
            </a>
          </Link>
        </li>
        <li className='hover:underline underline-offset-4'>
          <Link href='/cepas'>
            <a>Las mejores cepas</a>
          </Link>
        </li>
        <li className='hover:underline underline-offset-4'>
          <Link href='/'>
            <a>Tienda</a>
          </Link>
        </li>
        <li className='hover:underline underline-offset-4'>
          <Link href='/accesorios'>
            <a>Vapes</a>
          </Link>
        </li>
        <li className='hover:underline underline-offset-4'>
          <Link href='/accesorios'>
            <a>Accesorios</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
