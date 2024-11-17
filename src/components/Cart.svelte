<!-- Cart.svelte -->
<script>
    import { cart } from '../cartStore.js';

    function removeItem(itemName) {
        cart.removeItem(itemName);
    }

    function updateQuantity(itemName, newQuantity) {
        cart.updateQuantity(itemName, newQuantity);
    }

    $: totalPrice = Object.values($cart).reduce((total, item) => total + item.price * item.quantity, 0);
</script>

<div class="bg-white shadow-md rounded-lg p-6">
    <h2 class="text-2xl font-bold mb-4">Your Cart</h2>
    {#if Object.keys($cart).length === 0}
        <p>Your cart is empty.</p>
    {:else}
        {#each Object.values($cart) as item}
            <div class="flex justify-between items-center mb-4">
                <div>
                    <h3 class="font-semibold">{item.name}</h3>
                    <p class="text-gray-600">${item.price} x {item.quantity}</p>
                </div>
                <div class="flex items-center space-x-2">
                    <button 
                        on:click={() => updateQuantity(item.name, item.quantity - 1)}
                        class="bg-pink-300 text-white w-6 h-6 rounded-full hover:bg-pink-400 transition duration-300 flex items-center justify-center"
                    >
                        -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                        on:click={() => updateQuantity(item.name, item.quantity + 1)}
                        class="bg-pink-500 text-white w-6 h-6 rounded-full hover:bg-pink-600 transition duration-300 flex items-center justify-center"
                    >
                        +
                    </button>
                    <button 
                        on:click={() => removeItem(item.name)}
                        class="text-red-500 hover:text-red-600"
                    >
                        Remove
                    </button>
                </div>
            </div>
        {/each}
        <div class="mt-4 text-right">
            <p class="font-bold">Total: ${totalPrice.toFixed(2)}</p>
        </div>
    {/if}
</div>