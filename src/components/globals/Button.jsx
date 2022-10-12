import React from 'react';

function Button({ children, onClick, type, className }) {
  const _className = 'btn';

  return (
    <button
      type={type || 'button'}
      className={_className.concat(className ? ' ' + className : '')}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
