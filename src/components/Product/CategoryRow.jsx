import Link from 'next/link';
import React from 'react';
import Gallery from './Gallery';

function CategoryRow({ products, heading, href }) {
  return (
    <>
      <div className='flex items-center justify-between px-4'>
        <h3 className='text-xl text-light'>{heading}</h3>
        <Link href={href}>
          <a className='underline underline-offset-4 hover:text-secondary text-sm text-white'>
            Ver mas &#8919;
          </a>
        </Link>
      </div>
      <Gallery products={products} />
    </>
  );
}

export default CategoryRow;
