import React, { useEffect, useState } from 'react';
import Item from '../../components/Cart/EditableItem';
import GoToCheckout from '../../components/Cart/GoToCheckout';
import Button from '../../components/globals/Button';
import Loading from '../../components/globals/Loading';
import { useCart } from '../../hooks/useCart';

function Carrito({}) {
  const [cart, setCart] = useState(null);
  const store = useCart();

  useEffect(() => {
    setCart(store);
  }, [store]);

  if (!cart)
    return (
      <div className='py-20'>
        <Loading />
      </div>
    );

  return (
    <div className='container py-4 mx-auto text-white pt-20'>
      <h1 className='text-4xl px-4 pb-8 pt-4 font-medium uppercase'>Carrito</h1>

      <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-4 lg:space-y-0 p-4'>
        <div className='lg:hidden'>
          <GoToCheckout count={cart.count} subtotal={cart.subtotal} />
        </div>
        <div className='basis-4/5'>
          <div className='flex flex-col p-2 space-y-6 border-indigo-500 border-2 rounded border-opacity-25 bg-slate-800'>
            {cart.items.map(item => (
              <Item id={item.id} key={item.id} setQty={cart.setItemQty} />
            ))}
          </div>
          <div className='pt-4 flex'>
            <Button
              className='ml-auto mr-1 px-6'
              onClick={() => cart.clearCart()}>
              Limpiar
            </Button>
          </div>
        </div>
        <div className='basis-3/12'>
          <GoToCheckout count={cart.count} subtotal={cart.subtotal} />
        </div>
      </div>
    </div>
  );
}

export default Carrito;
