import Image from 'next/image';
import React from 'react';
import Card from '../../components/globals/Card';
import { priceToString } from '../../utils/numberToString';

function Item({ item }) {
  return (
    <Card
      className='grid grid-cols-3 grid-rows-2 lg:flex lg:flex-row border-gray-800 border-b-2'
      replaceBaseClass={true}>
      <div className='col-start-1 col-span-1 row-span-full self-center'>
        <Image
          width={160}
          height={160}
          objectFit='cover'
          src={item.assetPath + item.thumb}
          alt={item.name}
        />
      </div>
      <div className='col-start-2 col-span-2 row-span-2 grow py-4 ml-4 h-full space-y-4'>
        <p className='text-xl overflow-hidden text-ellipsis'>{item.name}</p>
        <p>
          <span className='text-gray-500 font-semibold pr-2'>
            {item.qty}&times;
          </span>
          <span className='text-lg'>${priceToString(item.price)}</span>
        </p>
        <p>
          <span className='text-gray-500 font-semibold pr-2'>Total</span>
          <span className='text-lg'>
            ${priceToString(item.qty * item.price)}
          </span>
        </p>
      </div>
    </Card>
  );
}

export default Item;
