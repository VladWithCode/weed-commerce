import React from 'react';
import getClassname from '../../utils/getClassname';

function Button({ children, onClick, type, className }) {
  return (
    <button
      type={type || 'button'}
      className={getClassname(
        'rounded-sm bg-secondary btn p-2 hover:bg-opacity-100 hover:text-white',
        className
      )}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
