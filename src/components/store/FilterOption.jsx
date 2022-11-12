import React, { useEffect } from 'react';
import { useShop } from '../../hooks/useShop';

function FilterOption({ id, label, filterKey }) {
  const isActive = useShop(
    state => state[filterKey]?.find(opt => opt.id === id).active
  );
  const setIsActive = useShop(state => state.setOptionIsActive);

  const onChange = e => {
    const { target } = e;

    setIsActive(id, target.checked, filterKey);
  };

  return (
    <div className='flex items-center pb-1 last:pb-0'>
      <input
        type='checkbox'
        name={id}
        id={id}
        className='w-3 h-3'
        checked={isActive}
        onChange={onChange}
      />
      <label htmlFor={id} className='text-sm px-4 capitalize'>
        {label}
      </label>
    </div>
  );
}

export default FilterOption;
