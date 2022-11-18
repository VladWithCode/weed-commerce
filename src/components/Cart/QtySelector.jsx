import React from 'react';
import getClassname from '../../utils/getClassname';

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function QtySelector({ id, qty, setQty }) {
  return (
    <div className='relative overflow-hidden w-24 mt-auto mb-2'>
      <select
        className={getClassname(
          'text-sm lg:text-base block text-white bg-slate-700 rounded px-2 cursor-pointer hover:bg-slate-600'
        )}
        name='qty'
        id='qty'
        value={qty}
        onChange={({ target }) => setQty(id, parseInt(target.value))}>
        {options.map(opt => (
          <option value={opt} key={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default QtySelector;
