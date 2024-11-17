<!-- MenuCard.svelte -->
<script>
    import { createEventDispatcher } from 'svelte';
    import { cart } from '../cartStore.js';

    export let name;
    export let description;
    export let image;
    export let price;

    const dispatch = createEventDispatcher();

    let quantity = 0;

    $: {
        if ($cart[name]) {
            quantity = $cart[name].quantity;
        } else {
            quantity = 0;
        }
    }

    function addToCart() {
        cart.addItem({ name, description, image, price, quantity: 1 });
        dispatch('addToCart', { name, description, image, price, quantity: 1 });
    }

    function increment() {
        cart.updateQuantity(name, quantity + 1);
        dispatch('updateCart', { name, quantity: quantity + 1 });
    }

    function decrement() {
        if (quantity > 0) {
            cart.updateQuantity(name, quantity - 1);
            dispatch('updateCart', { name, quantity: quantity - 1 });
        }
    }
</script>

<div class="bg-pink-100 rounded-lg overflow-hidden shadow-md">
    <img src={image} alt={name} class="w-full">
    <div class="p-6">
        <h3 class="text-xl font-semibold mb-2">{name}</h3>
        <p class="text-gray-600 mb-4">{description}</p>
        <div class="flex justify-between items-center">
            <span class="text-pink-500 font-bold">${price.toFixed(2)}</span>
            {#if quantity === 0}
                <button 
                    on:click={addToCart}
                    class="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition duration-300"
                >
                    Add to Cart
                </button>
            {:else}
                <div class="flex items-center space-x-4">
                    <button 
                        on:click={decrement}
                        class="bg-pink-300 text-white w-8 h-8 rounded-full hover:bg-pink-400 transition duration-300 flex items-center justify-center"
                    >
                        -
                    </button>
                    <span class="text-pink-500 font-bold">{quantity}</span>
                    <button 
                        on:click={increment}
                        class="bg-pink-500 text-white w-8 h-8 rounded-full hover:bg-pink-600 transition duration-300 flex items-center justify-center"
                    >
                        +
                    </button>
                </div>
            {/if}
        </div>
    </div>
</div>