import create from 'zustand';
import { persist } from 'zustand/middleware';

const CART_INITIAL_STATE = {
  items: [],
  count: 0,
  subtotal: 0,
  shipping: 15000,
  total: 0,
};

export const useCart = create(
  persist(
    set => ({
      ...CART_INITIAL_STATE,

      setShipping: amount =>
        set(state => ({ shipping: amount, total: state.subtotal + amount })),

      addItem: item =>
        set(state => {
          let subtotal = 0;
          let wasInCart = false;

          const newItems = state.items.map(stateItem => {
            let updatedItem = { ...stateItem };

            if (stateItem.id === item.id) {
              wasInCart = true;
              updatedItem.qty = updatedItem.qty + 1;
            }

            subtotal += updatedItem.qty * updatedItem.price;
            return updatedItem;
          });

          if (!wasInCart) {
            newItems.push({
              ...item,
              stock: undefined,
              subtotal: item.price,
              qty: 1,
            });

            subtotal += item.price;
          }

          return {
            items: newItems,
            count: newItems.length,
            subtotal,
            total: subtotal + state.shipping,
          };
        }),

      removeItem: id =>
        set(state => {
          let subtotal = 0;
          const newItems = state.items.filter(stateItem => {
            if (stateItem.id === id) return false;
            else {
              subtotal += stateItem.price * stateItem.qty;
              return true;
            }
          });

          return {
            items: newItems,
            count: newItems.length,
            subtotal,
            total: subtotal + state.shipping,
          };
        }),

      setItemQty: (id, qty) =>
        set(state => {
          let subtotal = 0;
          const newItems = state.items.map(stateItem => {
            let updatedItem = { ...stateItem };
            if (stateItem.id === id) {
              updatedItem = {
                ...updatedItem,
                qty: qty,
                subtotal: updatedItem.price * qty,
              };
            }

            subtotal += updatedItem.subtotal;
            return updatedItem;
          });

          return {
            items: newItems,
            subtotal,
            total: subtotal + state.shipping,
          };
        }),

      clearCart: () =>
        set(() => ({ items: [], subtotal: 0, total: 0, count: 0 })),
    }),
    { name: 'cart-storage' }
  )
);
