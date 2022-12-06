import Image from 'next/image';
import React from 'react';
import Card from '../../components/globals/Card';
import { useCart } from '../../hooks/useCart';
import { priceToString } from '../../utils/numberToString';
import QtySelector from './QtySelector';
import shallow from 'zustand/shallow';

function Item({ item, setQty }) {
  const { removeItem, setItemQty } = useCart(
    state => ({ removeItem: state.removeItem, setItemQty: state.setItemQty }),
    shallow
  );

  return (
    <Card
      className='grid grid-cols-4 grid-rows-3 lg:flex lg:flex-row basis-52 border-indigo-500 border-b-2 border-opacity-10'
      replaceBaseClass={true}>
      <div className='col-start-1 col-span-2 row-span-2 self-center'>
        <Image
          width={160}
          height={160}
          objectFit='cover'
          src={item.assetPath + item.thumb}
          alt={item.name}
        />
      </div>
      <div className='col-start-3 col-span-2 grow-2 mt-4 ml-4 h-full'>
        <p className='text-xl overflow-hidden text-ellipsis mb-3'>
          {item.name}
        </p>
        <QtySelector id={item.id} qty={item.qty} setQty={setItemQty} />
      </div>
      <div className='ml-auto self-center px-4 h-2/6'>
        <span className='text-gray-500 font-semibold pr-2'>
          {item.qty}&times;
        </span>
        <span className='text-lg'>${priceToString(item.price)}</span>
      </div>

      <div className='self-end mb-4 row-start-3 col-start-3 justify-self-center col-span-2'>
        <button
          className='text-white hover:text-red-600'
          onClick={() => removeItem(id)}>
          <svg className='w-4 h-4 fill-current'>
            <use href='/svg/sprites.svg#bin'></use>
          </svg>
        </button>
      </div>
    </Card>
  );
}

export default Item;
