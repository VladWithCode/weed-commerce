import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useCart } from '../../hooks/useCart';

function Navigation({ setIsActive }) {
  const _count = useCart(state => state.count);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(_count);
  }, [_count]);

  const closeMenuOnClick = () => {
    setIsActive(false);
  };

  return (
    <nav className='w-full px-4 text-xl text-white font-secondary font-semibold mt-6 mb-auto'>
      <ul className='flex flex-col list-none gap-y-6'>
        <li className='hover:underline hover:text-secondary underline-offset-4'>
          <Link href='/'>
            <a onClick={closeMenuOnClick}>Inicio</a>
          </Link>
        </li>
        <li className='hover:underline hover:text-secondary underline-offset-4 group'>
          <Link href='/carrito'>
            <a
              onClick={closeMenuOnClick}
              className='flex justify-between relative'>
              <span>Carrito</span>
              <svg className='h-8 w-8 fill-current'>
                <use href='/svg/sprites.svg#cart'></use>
              </svg>
              {count > 0 && (
                <span className='absolute top-0 right-0 text-xs bg-secondary rounded-full px-1 group-hover:bg-white'>
                  {count > 99 ? '99+' : count}
                </span>
              )}
            </a>
          </Link>
        </li>
        {/* <li className='hover:underline hover:text-secondary underline-offset-4'>
          <Link href='/cepas'>
            <a onClick={closeMenuOnClick}>Las mejores cepas</a>
          </Link>
        </li> */}
        <li className='hover:underline hover:text-secondary underline-offset-4'>
          <Link href='/tienda'>
            <a onClick={closeMenuOnClick}>Tienda</a>
          </Link>
        </li>
        <li className='hover:underline hover:text-secondary underline-offset-4'>
          <Link href='/contacto'>
            <a onClick={closeMenuOnClick}>Contacto</a>
          </Link>
        </li>
        {/* <li className='hover:underline hover:text-secondary underline-offset-4'>
          <Link href='/accesorios'>
            <a onClick={closeMenuOnClick}>Vapes</a>
          </Link>
        </li>
        <li className='hover:underline hover:text-secondary underline-offset-4'>
          <Link href='/accesorios'>
            <a onClick={closeMenuOnClick}>Accesorios</a>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navigation;
