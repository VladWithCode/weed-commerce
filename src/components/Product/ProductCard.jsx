import Image from 'next/image';
import React from 'react';
import { useCart } from '../../hooks/useCart';
import { priceToString } from '../../utils/numberToString';
import Card from '../globals/Card';

function ProductCard({ product, className: csName }) {
  const className = 'bg-zinc-900 grow-0 shadow-gray-900 shadow';
  const addItem = useCart(state => state.addItem);

  return (
    <Card className={csName?.length > 0 ? className + ' ' + csName : className}>
      <Image src={product.assetPath + product.thumb} width={200} height={400} />
      <div className='flex justify-between items-center basis-11/12 p-2'>
        <h1 className='text-xl font-semibold uppercase overflow-hidden overflow-ellipsis'>
          {product.name}
        </h1>
        <p className='text-xl font-light'>
          $ {priceToString(product.price)}MXN
        </p>
      </div>
      <div className='p-2' onClick={e => addItem(product)}>
        <button className='btn w-full font-bold'>Añadir al carrito</button>
      </div>
      <div className='p-2'>
        <button className='btn btn-white  w-full font-bold'>
          Comprar ahora
        </button>
      </div>
    </Card>
  );
}

export default ProductCard;
