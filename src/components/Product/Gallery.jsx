import React from 'react';
import ProductCard from './ProductCard';

function Gallery({ products }) {
  return (
    <div className='w-full flex flex-row items-center p-4 overflow-x-scroll gap-x-4'>
      {products?.map(product => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default Gallery;
