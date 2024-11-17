// src/cartStore.js
import { writable } from 'svelte/store';

function createCart() {
    const { subscribe, set, update } = writable({});

    return {
        subscribe,
        addItem: (item) => update(cart => {
            if (cart[item.name]) {
                cart[item.name].quantity += item.quantity;
            } else {
                cart[item.name] = item;
            }
            return cart;
        }),
        removeItem: (itemName) => update(cart => {
            delete cart[itemName];
            return cart;
        }),
        updateQuantity: (itemName, quantity) => update(cart => {
            if (cart[itemName]) {
                cart[itemName].quantity = quantity;
                if (quantity === 0) {
                    delete cart[itemName];
                }
            }
            return cart;
        }),
        clearCart: () => set({})
    };
}

export const cart = createCart();