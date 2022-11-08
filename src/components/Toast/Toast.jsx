import React from 'react';
import { useToast } from '../../hooks/useToast';
import getClassname from '../../utils/getClassname';

const typeClassnames = {
  message: 'border-indigo-900 bg-indigo-500 text-white',
  error: 'border-rose-900 bg-rose-500 text-white',
  warn: 'border-yellow-900 bg-yellow-400 text-yellow-900',
};

function Toast() {
  const toastStore = useToast();

  const onCloseClick = () => {
    toastStore.reset();
  };

  return (
    <div
      className={getClassname(
        'flex space-x-4 items-center fixed bottom-20 -right-full max-w-4/5 border-2 border-opacity-80 py-1 rounded transition-[right] duration-300',
        typeClassnames[toastStore.type],
        toastStore.isActive ? 'right-6' : null
      )}>
      <div className='px-4'>{toastStore.message}</div>
      <div>
        <svg
          className='w-6 h-6 fill-current cursor-pointer'
          onClick={onCloseClick}>
          <use href='/svg/sprites.svg#times'></use>
        </svg>
      </div>
    </div>
  );
}

export default Toast;
