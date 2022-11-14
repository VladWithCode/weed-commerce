import React from 'react';

function Input({ type = 'text', label, name, id }) {
  return (
    <div className='flex flex-col pt-1 pb-2 last:pb-0'>
      <label htmlFor={id} className='pb-1'>
        {label || name}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className='px-2 py-1 rounded text-zinc-800'
      />
    </div>
  );
}

export default Input;
