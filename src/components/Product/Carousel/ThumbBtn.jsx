import Image from 'next/image';
import React from 'react';
import getClassname from '../../../utils/getClassname';

function ThumbBtn({ img, i, assetPath, currentIndex, dispatch }) {
  return (
    <button
      className={getClassname(
        'p-1 border-2 border-indigo-500 rounded-sm hover:border-opacity-60 shrink-0',
        currentIndex === i ? 'border-opacity-60' : 'border-opacity-20'
      )}
      onClick={() => dispatch({ type: 'setIndex', payload: i })}>
      <Image src={assetPath + img} height={60} width={60} alt={img} />
    </button>
  );
}

export default ThumbBtn;
