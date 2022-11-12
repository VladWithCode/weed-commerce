import React, { useEffect, useState } from 'react';
import { useShop } from '../../hooks/useShop';
import getClassname from '../../utils/getClassname';
import FilterOption from './FilterOption';

function FilterCard({ name, filterKey }) {
  const options = useShop(state => state[filterKey]);
  const clearFiltersByKey = useShop(state => state.clearFilterByKey);
  const [disableClear, setDisableClear] = useState(false);

  useEffect(() => {
    if (options.some(opt => opt.active)) setDisableClear(true);
    else setDisableClear(false);
  }, [options]);

  if (!options) return null;

  const onClearFiltersClick = e => clearFiltersByKey(filterKey);

  return (
    <div className='w-11/12 mx-auto py-2 border-b-2 border-indigo-500 border-opacity-25'>
      <div className='flex justify-between items-center pb-2'>
        <p className='text-sm'>{name}</p>
        <button
          className={getClassname(
            'text-xs hover:text-secondary cursor-pointer',
            !disableClear ? 'pointer-events-none opacity-60' : null
          )}
          onClick={onClearFiltersClick}
          role='button'>
          Limpiar filtros
        </button>
      </div>
      {options?.map(opt => (
        <FilterOption
          id={opt.id}
          label={opt.label}
          filterKey={filterKey}
          key={opt.id}
        />
      ))}
    </div>
  );
}

export default FilterCard;
