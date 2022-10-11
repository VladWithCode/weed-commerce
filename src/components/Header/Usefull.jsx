import Link from 'next/link';
import React from 'react';

function Usefull() {
  return (
    <nav className='w-full px-4 text-md text-accent font-secondary font-light mb-8'>
      <ul className='flex flex-col list-none gap-y-6'>
        <li className='hover:text-white'>
          <Link href='/iniciar'>
            <a>Iniciar sesión</a>
          </Link>
        </li>
        <li className='hover:text-white'>
          <Link href='/registrarse'>
            <a>Registrarse</a>
          </Link>
        </li>
        <li className='hover:text-white'>
          <Link href='/terminos-y-condiciones'>
            <a>Terminos y Condiciones de Servicio</a>
          </Link>
        </li>
        <li className='hover:text-white'>
          <Link href='/privacidad'>
            <a>Politica de privacidad</a>
          </Link>
        </li>
        <li className='hover:text-white'>
          <Link href='/envios'>
            <a>Politica de envios</a>
          </Link>
        </li>
        <li className='hover:text-white'>
          <Link href='/reembolsos'>
            <a>Politica de reembolsos</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Usefull;
