import React, { useState } from 'react';
import getClassname from '../../utils/getClassname';

function Input({ className, type = 'text', label, name, id, ...props }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={getClassname(
        'relative flex flex-col pt-1 pb-2 text-gray-400',
        className
      )}>
      <label
        htmlFor={id}
        className={getClassname(
          'px-2 absolute -translate-y-1/2 transition-top',
          props.value?.length > 0 || isFocused
            ? 'top-0 pb-4 text-xs text-white'
            : ' pb-2 top-1/2 text-sm'
        )}>
        {label || name}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className={getClassname(
          'px-2 py-1 bg-transparent border-b-2 border-current focus:text-white focus:border-opacity-100 focus:bg-gray-800 outline-none transition-[background]',
          props.value?.length > 0 && 'text-white'
        )}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </div>
  );
}

export default Input;
