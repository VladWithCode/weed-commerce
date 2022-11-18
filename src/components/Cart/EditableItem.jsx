import Image from 'next/image';
import React from 'react';
import Card from '../../components/globals/Card';
import { useCart } from '../../hooks/useCart';
import { priceToString } from '../../utils/numberToString';
import QtySelector from './QtySelector';

function Item({ id, setQty }) {
  const items = useCart(state => state.items);

  const item = items.find(it => it.id === id);

  if (!item) return <></>;

  return (
    <Card
      className='grid grid-cols-4 grid-rows-2 lg:flex lg:flex-row basis-52 border-indigo-500 border-b-2 border-opacity-10'
      replaceBaseClass={true}>
      <div className='col-start-1 col-span-2 row-span-2 self-center'>
        <Image
          width={160}
          height={160}
          objectFit='cover'
          src={item.assetPath + item.thumb}
        />
      </div>
      <div className='col-start-3 col-span-2 grow-2 mt-4 ml-4 h-full'>
        <p className='text-xl overflow-hidden text-ellipsis mb-3'>
          {item.name}
        </p>
        <QtySelector id={item.id} qty={item.qty} setQty={setQty} />
      </div>
      <div className='grow-1 my-auto mt-2 ml-auto px-4'>
        <span className='text-gray-500 font-semibold pr-2'>
          {item.qty}&times;
        </span>
        <span className='text-lg'>${priceToString(item.price)}</span>
      </div>
    </Card>
  );
}

export default Item;
