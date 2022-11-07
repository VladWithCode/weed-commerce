import Image from 'next/image';
import React, { useState } from 'react';
import Button from '../../components/globals/Button';
import Card from '../../components/globals/Card';
import { priceToString } from '../../utils/numberToString';

function Item({ item }) {
  const [qty, setQty] = useState(item.qty || 0);

  return (
    <Card
      className='flex-row justify-between items-center basis-40 border-indigo-500 border-b-2'
      replaceBaseClass={true}>
      <Image
        width={160}
        height={160}
        objectFit='cover'
        src={item.assetPath + item.thumb}
      />
      <p className='text-2xl grow-0 overflow-hidden text-ellipsis'>
        {item.name}
      </p>
      <div className='flex grow-0 basis-12 justify-start items-center h-1/2'>
        <Button
          className='text-md basis-8 rounded-tr-none rounded-br-none'
          onClick={() =>
            setQty(qty => {
              if (qty === 1) return qty;
              return qty - 1;
            })
          }>
          -
        </Button>
        <input
          type='text'
          className='py-2 text-center text-md text-zinc-800 w-12 bg-white bg-opacity-80 outline-none focus:bg-opacity-100'
          value={qty}
          onChange={({ target }) =>
            setQty(() => {
              let v = target.value;
              if (v < 1 || isNaN(v)) return 1;
              return v;
            })
          }></input>
        <Button
          className='text-md basis-8 rounded-tl-none rounded-bl-none'
          onClick={() => setQty(qty => qty + 1)}>
          +
        </Button>
      </div>
      <div className='grow-0'>
        <span className='text-xl px-4'>${priceToString(item.price)}</span>
      </div>
    </Card>
  );
}

export default Item;
