<!-- FeaturedProducts.svelte -->
<script>
    import MenuCard from './MenuCard.svelte';
    import { cupcakes } from '../data/cupcakes';
    import { cart } from '../cartStore.js';
    
    let visibleCupcakes = 6; // Initial number of visible cupcakes
    const increment = 3; // Number of cupcakes to add/remove when expanding/collapsing

    function showMore() {
        visibleCupcakes = Math.min(visibleCupcakes + increment, cupcakes.length);
    }

    function showLess() {
        visibleCupcakes = 3;
    }

    function addToCart(cupcake) {
    cart.addItem(cupcake);
    }
</script>

<section class="bg-white py-16" id="FeaturedCupcakes">
    <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16 text-pink-600 font-cursive">Featured Cupcakes</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full sm:w-full md:w-[90%] mx-auto">
            {#each cupcakes.slice(0, visibleCupcakes) as cupcake}
              <MenuCard {...cupcake} on:addToCart={() => addToCart(cupcake)} />
            {/each}
        </div>
        <div class="text-center mt-8">
            {#if visibleCupcakes < cupcakes.length}
                <button 
                    on:click={showMore}
                    class="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition duration-300"
                >
                    View More
                </button>
            {:else if visibleCupcakes > 6}
                <button 
                    on:click={showLess}
                    class="bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400 transition duration-300"
                >
                    View Less
                </button>
            {/if}
        </div>
    </div>
</section>