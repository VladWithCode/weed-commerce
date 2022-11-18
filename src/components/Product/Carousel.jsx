import Image from 'next/image';
import React, { useReducer } from 'react';
import ArrowBtn from './Carousel/ArrowBtn';
import ThumbBtn from './Carousel/ThumbBtn';

function Carousel({ assetPath, images }) {
  const [state, dispatch] = useReducer(reducer, {
    assetPath: assetPath,
    maxIndex: images.length - 1,
    currentIndex: 0,
  });

  return (
    <>
      <div className='relative w-fit z-0'>
        <ArrowBtn
          type='prev'
          dispatch={dispatch}
          currentIndex={state.currentIndex}
        />
        <Image
          width={600}
          height={600}
          src={state.assetPath + images[state.currentIndex]}
          alt={state.currentImagePath}
          className='z-0'
        />
        <ArrowBtn
          type='next'
          dispatch={dispatch}
          currentIndex={state.currentIndex}
        />
      </div>
      <div className='flex w-full overflow-auto py-1 space-x-2'>
        {images.map((img, i) => (
          <ThumbBtn
            img={img}
            i={i}
            currentIndex={state.currentIndex}
            assetPath={state.assetPath}
            dispatch={dispatch}
          />
        ))}
      </div>
    </>
  );
}

export default Carousel;

function reducer(state, action) {
  const { type, payload } = action;

  const actionHandlers = {
    setIndex: () => {
      let index = payload;

      if (index < 0) index = 0;
      else if (index > state.maxIndex) index = state.maxIndex;

      return { ...state, currentIndex: index };
    },
  };

  if (!actionHandlers[type]) return state;

  return actionHandlers[type]();
}
