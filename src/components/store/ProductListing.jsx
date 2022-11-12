import React, { useState } from 'react';
import ProductCard from '../Product/ProductCard';

function ProductListing({ products, page }) {
  const [activeProducts, setActiveProducts] = useState(products);

  return (
    <div className='col-start-3 col-span-6'>
      <div className='grid grid-cols-3 gap-y-6'>
        {activeProducts.map(product => (
          <ProductCard
            product={product}
            key={product.id}
            className='w-80 mx-auto'
          />
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
