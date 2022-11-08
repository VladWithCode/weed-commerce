import Image from 'next/image';
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
        'bg-zinc-900 grow-0 shadow-gray-900 shadow',
        className
      )}>
      <Image src={product.assetPath + product.thumb} width={200} height={400} />
      <div className='flex justify-between items-center h-12 p-2'>
        <p className='w-1/2 text-xl font-semibold uppercase overflow-hidden overflow-ellipsis whitespace-nowrap'>
          {product.name}
        </p>
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
