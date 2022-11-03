import React, { useEffect, useState } from 'react';
import Item from '../../components/Cart/Item';
import Button from '../../components/globals/Button';
import Loading from '../../components/globals/Loading';
import { useCart } from '../../hooks/useCart';

function Carrito({}) {
  const [cart, setCart] = useState(null);
  const store = useCart();

  useEffect(() => {
    setCart(store);
  }, []);

  return (
    <div className='relative'>
      {!cart ? (
        <Loading />
      ) : (
        <>
          <span className='block h-24 mb-4' />
          <div className='px-2 py-4 mx-auto text-white rounded'>
            <h1 className='text-4xl px-4 font-bold uppercase'>Carrito</h1>
            <div className='flex flex-col max-h-[60vh] my-2 p-2 space-y-2 overflow-y-auto --scroll --scroll-y'>
              {cart.items.map(item => (
                <Item item={item} key={item.id} />
              ))}
            </div>
            <div className='cart-controls'></div>
            <div className='cart-totals'></div>
            <div className='flex mt-4'>
              <Button className='ml-auto'>Finalizar Compra</Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Carrito;
