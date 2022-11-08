import React, { useReducer, useRef, useState } from 'react';
import getClassname from '../../utils/getClassname';

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function QtySelector({ id, qty, setQty }) {
  return (
    <div className='relative overflow-hidden w-24 mt-auto mb-2'>
      <select
        className={getClassname('w-16 h-6 block text-primary rounded')}
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
