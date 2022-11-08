import Image from 'next/image';
import React from 'react';
import Card from '../../components/globals/Card';
import { useCart } from '../../hooks/useCart';
import { priceToString } from '../../utils/numberToString';

function Item({ id, setQty }) {
  const items = useCart(state => state.items);

  const item = items.find(it => it.id === id);

  if (!item) return <></>;

  return (
    <Card
      className='flex-row basis-40 border-indigo-500 border-b-2 border-opacity-10'
      replaceBaseClass={true}>
      <Image
        width={160}
        height={160}
        objectFit='cover'
        src={item.assetPath + item.thumb}
      />
      <div className='grow-2 mt-4 ml-4 h-32 flex flex-col'>
        <p className='text-2xl overflow-hidden text-ellipsis'>{item.name}</p>
      </div>
      <div className='grow-1 my-auto mt-2 ml-auto px-4'>
        <span className='text-gray-500 font-semibold pr-2'>
          {item.qty}&times;
        </span>
        <span className='text-xl'>${priceToString(item.price)}</span>
      </div>
    </Card>
  );
}

export default Item;
