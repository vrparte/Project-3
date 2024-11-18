<!-- FloatingCartButton.svelte -->
<script>
    import { Link } from "svelte-routing";
    import { cart } from '../cartStore.js';

    $: itemCount = Object.values($cart).reduce((total, item) => total + item.quantity, 0);
</script>

<Link to="/cart" class="fixed bottom-10 right-10 bg-pink-500 text-white rounded-full px-6 py-3 shadow-lg hover:bg-pink-600 transition-colors duration-300 z-50 flex items-center">
    <div class="relative mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {#if itemCount > 0}
            <span class="absolute -top-2 -right-2 bg-white text-pink-500 rounded-full text-xs w-5 h-5 flex items-center justify-center font-bold">
                {itemCount}
            </span>
        {/if}
    </div>
    <span class="font-semibold">Cart</span>
</Link>