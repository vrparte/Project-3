<!-- Cart.svelte -->
<script>
    import { cart } from '../cartStore.js';
    import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
    import Icon from 'svelte-awesome';
    import Toast from './Toast.svelte';

    let showToast = false;
    let toastMessage = '';

    function removeItem(itemName) {
        cart.removeItem(itemName);
    }

    function updateQuantity(itemName, newQuantity) {
        cart.updateQuantity(itemName, newQuantity);
    }

    function placeOrder() {
        showToast = true;
        toastMessage = 'Order placed successfully!';
        setTimeout(() => {
            cart.clear(); // Changed from clearCart to clear
            showToast = false;
        }, 3000);
    }

    $: cartItems = Object.values($cart);
    $: subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    $: tax = subtotal * 0.08;
    $: deliveryFee = cartItems.length > 0 ? 5.99 : 0;
    $: total = subtotal + tax + deliveryFee;
</script>

<section class="bg-pink-50 py-16 min-h-screen">
    <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16 text-pink-600 font-cursive">Your Cart</h2>
        
        {#if cartItems.length === 0}
            <div class="text-center">
                <Icon data={faShoppingCart} scale={4} class="text-pink-300 mb-4" />
                <p class="text-xl text-gray-600">Your cart is empty.</p>
                <a href="/" class="inline-block mt-4 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition duration-300">
                    Continue Shopping
                </a>
            </div>
        {:else}
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full sm:w-[90%] md:w-[80%] mx-auto">
                <!-- Cart Items List -->
                <div class="md:col-span-2 bg-white shadow-lg rounded-lg p-6">
                    {#each cartItems as item}
                        <div class="flex justify-between items-center mb-6 border-b pb-4">
                            <div class="flex items-center">
                                <img src={item.image} alt={item.name} class="w-16 h-16 object-cover rounded-md mr-4">
                                <div>
                                    <h3 class="font-semibold text-lg">{item.name}</h3>
                                    <p class="text-gray-600">${item.price.toFixed(2)} each</p>
                                </div>
                            </div>
                            <div class="flex items-center space-x-4">
                                <div class="flex items-center space-x-2">
                                    <button 
                                        on:click={() => updateQuantity(item.name, item.quantity - 1)}
                                        class="bg-pink-300 text-white w-8 h-8 rounded-full hover:bg-pink-400 transition duration-300 flex items-center justify-center"
                                    >
                                        -
                                    </button>
                                    <span class="w-8 text-center">{item.quantity}</span>
                                    <button 
                                        on:click={() => updateQuantity(item.name, item.quantity + 1)}
                                        class="bg-pink-500 text-white w-8 h-8 rounded-full hover:bg-pink-600 transition duration-300 flex items-center justify-center"
                                    >
                                        +
                                    </button>
                                </div>
                                <span class="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                                <button 
                                    on:click={() => removeItem(item.name)}
                                    class="text-red-500 hover:text-red-600"
                                >
                                    <Icon data={faTrash} scale={1.2} />
                                </button>
                            </div>
                        </div>
                    {/each}
                </div>

                <!-- Cost Breakdown -->
                <div class="bg-white shadow-lg rounded-lg p-6">
                    <h3 class="text-2xl font-bold mb-6">Order Summary</h3>
                    <div class="space-y-4">
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
                        <div class="flex justify-between font-bold text-xl pt-4 border-t">
                            <span>Total:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>

                    <!-- Order Button -->
                    <button 
                        class="w-full bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition duration-300 mt-8 text-lg font-semibold"
                        on:click={placeOrder}
                    >
                        Place Order
                    </button>
                </div>
            </div>
        {/if}
    </div>
</section>

{#if showToast}
    <Toast message={toastMessage} />
{/if}