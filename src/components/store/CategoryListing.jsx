import React, { useEffect, useState } from 'react';
import { useShop } from '../../hooks/useShop';
import CategoryRow from '../Product/CategoryRow';

function CategoryListing({ categories }) {
  const categoryFilters = useShop(state => state.categories);
  const [activeCategories, setActiveCategories] = useState(categories);

  useEffect(() => {
    const filtersActive = [];

    for (let filter of categoryFilters) {
      if (filter.active) filtersActive.push(filter.label);
    }

    if (filtersActive.length > 0) {
      console.log(filtersActive);
      setActiveCategories(
        categories.filter(ctg => filtersActive.includes(ctg.name))
      );
    } else {
      setActiveCategories(categories);
    }
  }, [categoryFilters]);

  return (
    <div id='products' className='col-start-3 col-span-6'>
      {activeCategories.map(ctg => (
        <CategoryRow
          href={`/tienda/${ctg.name}`}
          heading={ctg.name}
          products={ctg.products}
          key={ctg._id}
        />
      ))}
      {activeCategories.length === 0 ? (
        <p className='text-3xl text-center text-zinc-400 py-12'>
          No se encontraron productos para los filtros seleccionados...
        </p>
      ) : null}
    </div>
  );
}

export default CategoryListing;
