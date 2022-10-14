import create from 'zustand';
import { persist } from 'zustand/middleware';

const INITIAL_STATE = {
  items: [],
  count: 0,
  subtotal: 0,
  shipping: 150,
  total: 0,
};

export const useCart = create(
  persist(
    set => ({
      ...INITIAL_STATE,
      setShipping: amount =>
        set(state => ({ shipping: amount, total: state.subtotal + amount })),
      addItem: item => addItem(set, item),
      removeItem: id => removeItem(set, id),
      setItemQty: (id, qty) => setItemQty(set, id, qty),
    }),
    { name: 'cart-storage' }
  )
);

const addItem = (set, itemToAdd) => {
  set(state => {
    let subtotal = 0;
    let wasInCart = false;
    const newItems = state.items.map(stateItem => {
      let updatedItem = { ...stateItem };

      if (stateItem.id === itemToAdd.id) {
        wasInCart = true;
        updatedItem.qty = updatedItem.qty + 1;
      }

      subtotal = updatedItem.qty * updatedItem.price;
      return updatedItem;
    });

    if (!wasInCart) {
      newItems.push({
        ...itemToAdd,
        subtotal: itemToAdd.price,
        qty: 1,
      });

      subtotal += itemToAdd.price;
    }

    return {
      items: newItems,
      count: newItems.length,
      subtotal,
      total: subtotal + state.shipping,
    };
  });
};

const removeItem = (set, id) => {
  set(state => {
    let subtotal = 0;
    const newItems = state.items.filter(stateItem => {
      if (stateItem.id === id) return false;
      else {
        subtotal += stateItem.price * stateItem.qty;
      }
    });

    return {
      items: newItems,
      count: newItems.length,
      subtotal,
      total: subtotal + state.shipping,
    };
  });
};

const setItemQty = (set, id, qty) => {
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
  });
};
