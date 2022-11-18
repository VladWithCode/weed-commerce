import React from 'react';
import getClassname from '../../../utils/getClassname';

function ArrowBtn({ type, dispatch, currentIndex }) {
  const isPrev = type === 'prev';
  const isNext = type === 'next';

  return (
    <button
      className={getClassname(
        'absolute top-1/2 -translate-y-1/2 z-10 bg-slate-800 bg-opacity-40 hover:bg-opacity-60',
        isPrev ? 'left-0' : null,
        isNext ? 'right-0' : null
      )}
      onClick={() =>
        dispatch({
          type: 'setIndex',
          payload: isNext ? currentIndex + 1 : currentIndex - 1,
        })
      }>
      <svg
        className={getClassname(
          'fill-current w-12 h-12',
          isPrev ? 'rotate-180' : null
        )}>
        <use href='/svg/sprites.svg#angle'></use>
      </svg>
    </button>
  );
}

export default ArrowBtn;
