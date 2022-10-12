import React from 'react';

const classNames = {
  primary: 'text-white bg-primary border-primary hover:text-primary',
  secondary: 'text-white bg-secondary border-secondary hover:text-secondary',
  light: '',
  dark: 'text-white bg-gray-800 border-gray-800 hover:text-gray-800',
};

function Button({ children, onClick, type, className, style = 'primary' }) {
  const _className =
    'border-2 p-2 rounded-md hover:bg-opacity-40 text-sm grow-0 shrink-0';

  return (
    <button
      type={type || 'button'}
      className={_className.concat(
        className ? ' ' + className : ' ' + classNames[style]
      )}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
