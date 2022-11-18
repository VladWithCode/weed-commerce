import React, { useState } from 'react';
import ProductCard from '../Product/ProductCard';

function ProductListing({ products, page }) {
  const [activeProducts, setActiveProducts] = useState(products);

  return (
    <div className='flex flex-wrap w-full overflow-hidden 2xl:grid 2xl:grid-cols-3 gap-y-6'>
      {activeProducts.map(product => (
        <ProductCard
          product={product}
          key={product.id}
          className='mx-auto basis-72 md:basis-80 xl:w-80'
        />
      ))}
    </div>
  );
}

export default ProductListing;
