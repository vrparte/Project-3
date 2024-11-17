// cartStore.js
import { writable } from 'svelte/store';

function createCart() {
  const { subscribe, set, update } = writable({});

  return {
    subscribe,
    addItem: (item) => update(cart => {
      if (cart[item.name]) {
        cart[item.name].quantity += 1;
      } else {
        cart[item.name] = { ...item, quantity: 1 };
      }
      return cart;
    }),
    removeItem: (itemName) => update(cart => {
      delete cart[itemName];
      return cart;
    }),
    updateQuantity: (itemName, quantity) => update(cart => {
      if (quantity > 0) {
        cart[itemName].quantity = quantity;
      } else {
        delete cart[itemName];
      }
      return cart;
    }),
    clear: () => set({})
  };
}

export const cart = createCart();