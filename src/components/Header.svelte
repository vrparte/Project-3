<!-- Header.svelte -->
<script>
  import { onMount } from 'svelte';
  import TorontoCupcakeLogo from '../assets/TC logo.png';
  import { Link } from "svelte-routing";
  import { cart } from '../cartStore.js';

  let y = 0;
  let lastY = 0;
  let isVisible = true;

  $: itemCount = Object.values($cart).reduce((total, item) => total + item.quantity, 0);

  function handleScroll(event) {
    y = window.scrollY;
    isVisible = (y < lastY) || y < 50; // Show header if scrolling up or near the top
    lastY = y;
  }

  function smoothScroll(event, targetId) {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  onMount(() => {
    y = window.scrollY;
    lastY = y;
  });
</script>

<svelte:window on:scroll={handleScroll} />

<header class="bg-white shadow-md fixed w-full z-50 transition-all duration-300 top-0" 
      class:translate-y-0={isVisible} 
      class:-translate-y-full={!isVisible}>
<div class="container mx-auto px-4 py-4 flex justify-between items-center">
  <Link to="/" class="flex items-center">
    <img src={TorontoCupcakeLogo} alt="Toronto Cupcakes" class="h-12 px-3">
    <h1 class="font-bold text-gray-700 text-2xl">Toronto Cupcakes</h1>
  </Link>
  <nav>
    <ul class="flex space-x-6">
      <li><Link to="/" class="text-gray-700 hover:text-pink-500">Home</Link></li>
      <li><a href="#FeaturedCupcakes" on:click={(e) => smoothScroll(e, 'FeaturedCupcakes')} class="text-gray-700 hover:text-pink-500">Shop</a></li>
      <li><a href="#AboutUs" on:click={(e) => smoothScroll(e, 'AboutUs')} class="text-gray-700 hover:text-pink-500">About</a></li>
      <li><a href="#Occasions" on:click={(e) => smoothScroll(e, 'Occasions')} class="text-gray-700 hover:text-pink-500">Special Occasions</a></li>
    </ul>
  </nav>
  <div class="flex items-center space-x-4">
    <Link to="/cart" class="text-gray-700 hover:text-pink-500 relative">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      {#if itemCount > 0}
        <span class="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
          {itemCount}
        </span>
      {/if}
    </Link>
  </div>
</div>
</header>