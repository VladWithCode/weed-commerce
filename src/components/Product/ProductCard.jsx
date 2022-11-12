import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useCart } from '../../hooks/useCart';
import { useToast } from '../../hooks/useToast';
import getClassname from '../../utils/getClassname';
import { priceToString } from '../../utils/numberToString';
import Button from '../globals/Button';
import Card from '../globals/Card';

function ProductCard({ product, className }) {
  const addItem = useCart(state => state.addItem);
  const displayToast = useToast(state => state.displayToast);

  const onAddToCartClick = () => {
    addItem(product);
    displayToast('Producto añadido al carrito');
  };

  return (
    <Card
      className={getClassname(
        'flex-col bg-gray-800 grow-0 shadow-gray-900 shadow rounded border-2 border-indigo-500 border-opacity-10 basis-80',
        className
      )}
      replaceBaseClass={true}>
      <Link href={`/products/${product.id}`}>
        <>
          <Image
            src={product.assetPath + product.thumb}
            width={180}
            height={360}
            className='hover:scale-95 active:scale-95 cursor-pointer'
          />
        </>
      </Link>
      <div className='flex justify-between items-center h-12 p-2'>
        <Link href={`/products/${product.id}`}>
          <a className='w-1/2 text-xl font-semibold uppercase overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-violet-500 active:text-violet-500'>
            {product.name}
          </a>
        </Link>
        <p className='text-xl font-light'>
          $ {priceToString(product.price)}MXN
        </p>
      </div>
      <Button className='w-11/12 mb-2 mx-auto' onClick={onAddToCartClick}>
        Añadir al carrito
      </Button>
      <Button className='w-11/12 mb-2 mx-auto'>Comprar Ahora</Button>
    </Card>
  );
}

export default ProductCard;
