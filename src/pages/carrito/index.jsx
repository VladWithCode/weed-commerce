import React, { useEffect, useState } from 'react';
import Item from '../../components/Cart/EditableItem';
import GoToCheckout from '../../components/Cart/GoToCheckout';
import Loading from '../../components/globals/Loading';
import { useCart } from '../../hooks/useCart';

function Carrito({}) {
  const [cart, setCart] = useState(null);
  const store = useCart();

  useEffect(() => {
    setCart(store);
  }, [store]);

  return (
    <div className='relative'>
      {!cart ? (
        <Loading />
      ) : (
        <>
          <span className='block h-24 mb-4' />
          <div className='container py-4 mx-auto text-white'>
            <h1 className='text-4xl px-4 pb-12 font-medium uppercase'>
              Carrito
            </h1>

            <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-4 lg:space-y-0 p-4'>
              <div className='lg:hidden'>
                <GoToCheckout count={cart.count} subtotal={cart.subtotal} />
              </div>
              <div className='basis-4/5'>
                <div className='flex flex-col p-4 space-y-6 border-indigo-500 border-2 rounded border-opacity-25 bg-zinc-800'>
                  {cart.items.map(item => (
                    <Item id={item.id} key={item.id} setQty={cart.setItemQty} />
                  ))}
                </div>
                <div className='cart-controls'></div>
              </div>
              <div className='basis-3/12'>
                <GoToCheckout count={cart.count} subtotal={cart.subtotal} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Carrito;
