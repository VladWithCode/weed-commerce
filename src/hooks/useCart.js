import create from 'zustand';

export const useCart = create(set => ({
  items: [],
  count: 0,
  subtotal: 0,
  shipping: 0,
  total: 0,
  setShipping: amount =>
    set(state => ({ shipping: amount, total: state.subtotal + amount })),
  addItem: item => addItem(set, item),
  removeItem: id => removeItem(set, id),
  setItemQty: (id, qty) => setItemQty(set, id, qty),
}));

const addItem = (set, itemToAdd) => {
  return set(state => {
    let subtotal = 0;
    let wasInCart = false;
    const newItems = state.items.map(stateItem => {
      let updatedItem = { ...stateItem };

      if (stateItem.id === itemToAdd.id) {
        wasInCart = true;
        updatedItem.qty = itemToAdd.qty;
      }

      subtotal = updatedItem.qty * updatedItem.price;
      return updatedItem;
    });

    if (!wasInCart) {
      const subtotalToAdd = itemToAdd.price * itemToAdd.qty;

      newItems.push({
        ...itemToAdd,
        subtotal: subtotalToAdd,
      });

      subtotal += subtotalToAdd;
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
  return set(state => {
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
