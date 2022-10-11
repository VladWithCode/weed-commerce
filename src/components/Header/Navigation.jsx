import Link from 'next/link';
import React from 'react';

function Navigation() {
  return (
    <nav className='w-full px-4 text-xl text-white font-secondary font-semibold mt-6 mb-auto'>
      <ul className='flex flex-col list-none gap-y-6'>
        <li className='hover:underline underline-offset-4'>
          <Link href='/'>
            <a>Inicio</a>
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
