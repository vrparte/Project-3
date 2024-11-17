<!-- Cart.svelte -->
<script>
    import { cart } from '../cartStore.js';

    function removeItem(itemName) {
        cart.removeItem(itemName);
    }

    function updateQuantity(itemName, newQuantity) {
        cart.updateQuantity(itemName, newQuantity);
    }

    $: subtotal = Object.values($cart).reduce((total, item) => total + item.price * item.quantity, 0);
    $: tax = subtotal * 0.08; // Assuming 8% tax rate
    $: deliveryFee = 5.99; // Fixed delivery fee
    $: total = subtotal + tax + deliveryFee;
</script>

<section class="bg-white py-16">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Your Cart</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full sm:w-[90%] md:w-[80%] mx-auto">
            <!-- Cart Items List -->
            <div class="md:col-span-2 bg-white shadow-md rounded-lg p-6">
                {#if Object.keys($cart).length === 0}
                    <p class="text-center text-gray-600">Your cart is empty.</p>
                {:else}
                    {#each Object.values($cart) as item}
                        <div class="flex justify-between items-center mb-4 border-b pb-4">
                            <div>
                                <h3 class="font-semibold">{item.name}</h3>
                                <p class="text-gray-600">${item.price.toFixed(2)} x {item.quantity}</p>
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
                {/if}
            </div>

            <!-- Cost Breakdown -->
            <div class="bg-white shadow-md rounded-lg p-6">
                <h3 class="text-xl font-bold mb-4">Order Summary</h3>
                <div class="space-y-2">
                    <div class="flex justify-between">
                        <span>Subtotal:</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Tax:</span>
                        <span>${tax.toFixed(2)}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Delivery Fee:</span>
                        <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                    <div class="flex justify-between font-bold text-lg pt-2 border-t">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </div>

                <!-- Order Button -->
                <button 
                    class="w-full bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition duration-300 mt-6"
                >
                    Place Order - ${total.toFixed(2)}
                </button>
            </div>
        </div>
    </div>
</section>