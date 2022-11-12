import React, { useEffect, useState } from 'react';
import { useShop } from '../../hooks/useShop';
import FilterCard from '../../components/store/FilterCard';
import getClassname from '../../utils/getClassname';

function Sidebar({}) {
  const categories = useShop(state => state.categories);
  const clearAllFilters = useShop(state => state.clearAllFilters);

  const [disableClear, setDisableClear] = useState(true);

  useEffect(() => {
    if (categories.some(opt => opt.active)) setDisableClear(false);
    else setDisableClear(true);
  }, [categories]);

  const onClearAllFiltersClick = () => clearAllFilters();

  return (
    <div id='filters' className='col-start-1 col-span-2'>
      <div className='rounded border-2 border-indigo-500 border-opacity-10 bg-gray-800 p-4 mx-auto w-5/6'>
        <div className='flex justify-between items-center border-b-2 border-indigo-500 border-opacity-25 pb-1'>
          <p className='text-xl'>Filtros</p>
          <button
            className={getClassname(
              'text-xs hover:text-secondary cursor-pointer',
              disableClear && 'pointer-events-none opacity-60'
            )}
            onClick={onClearAllFiltersClick}
            role='button'>
            Limpiar filtros
          </button>
        </div>

        <FilterCard
          name='Categorias'
          filterKey='categories'
          options={categories}
        />
      </div>
    </div>
  );
}

export default Sidebar;
