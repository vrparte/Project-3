<script>
  // Svelte store to handle active page
  import { writable } from 'svelte/store';
  const activePage = writable('home');

  // Importing images
  import cupcakeAssortment from './assets/backgroundcupcake.jpeg';
  import specialOccasions from './assets/specialoccasions.png';
  import deliveryIcon from './assets/deliveryIcon.png';
  import aboutUsImage from './assets/aboutUs.png';
</script>

<main class="container mx-auto p-4">
  <header class="border-q">
    <h1 class="text-4xl font-bold text-center border-white" >Toronto Cupcake</h1>
  </header>
  <header class="bg-amber-100 p-4 flex justify-between items-center">
    <div class="logo">
      <img src="/assets/logo.png" alt="Logo" class="h-12">
    </div>
    <nav class="space-x-4">
      <a href="#" on:click={() => activePage.set('home')} class="text-gray-800 hover:text-amber-600">Home</a>
      <a href="#" on:click={() => activePage.set('occasions')} class="text-gray-800 hover:text-amber-600">Occasions</a>
      <a href="#" on:click={() => activePage.set('delivery')} class="text-gray-800 hover:text-amber-600">Delivery</a>
      <a href="#" on:click={() => activePage.set('about')} class="text-gray-800 hover:text-amber-600">About Us</a>
      <a href="#" on:click={() => activePage.set('contact')} class="text-gray-800 hover:text-amber-600">Contact</a>
    </nav>
  </header>

  {#if $activePage === 'home'}
    <section class="hero bg-cover bg-center text-center text-white font-bold py-32" style="background-image: url('assets/kidsEatingCupcake.jpg');">
      <h1 class="text-4xl mb-4">Canada's and Greater Toronto Area's Favorite Stop for Special Treats!</h1>
      <button class="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">Order Here</button>
    </section>

    <section class="mt-8">
      <h2 class="text-2xl font-bold mb-4">One Dozen of Assorted Cupcakes</h2>
      <div class="special-card flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
        <img src={cupcakeAssortment} alt="One dozen assorted cupcakes" class="mb-4">
        <p class="mb-4">12 Delicious treats in one click - $38/dozen</p>
        <button class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Add to Cart</button>
      </div>
    </section>
  {/if}

  {#if $activePage === 'occasions'}
    <section class="mt-8">
      <h2 class="text-2xl font-bold mb-4">Special Occasions</h2>
      <img src={specialOccasions} alt="Special Occasions cupcakes" class="w-full rounded-lg mb-4">
      <p>Celebrate your occasions with our amazing cupcakes!</p>
    </section>
  {/if}

  {#if $activePage === 'delivery'}
    <section class="mt-8">
      <h2 class="text-2xl font-bold mb-4">Local Delivery Available</h2>
      <img src={deliveryIcon} alt="Delivery Icon" class="w-24 mb-4">
      <p class="mb-4">We deliver cupcakes to select areas within Toronto. Click below to contact us for details.</p>
      <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Contact Us</button>
    </section>
  {/if}

  {#if $activePage === 'about'}
    <section class="mt-8">
      <h2 class="text-2xl font-bold mb-4">About Us</h2>
      <img src={aboutUsImage} alt="About Us" class="w-full rounded-lg mb-4">
      <p>Toronto Cupcake was created by pastry chefs with a passion for baking amazing cupcakes.</p>
    </section>
  {/if}

  {#if $activePage === 'contact'}
    <section class="mt-8">
      <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
      <form class="flex flex-col space-y-4">
        <input type="text" placeholder="Name" required class="p-2 border border-gray-300 rounded">
        <input type="email" placeholder="Email" required class="p-2 border border-gray-300 rounded">
        <textarea placeholder="Your Message" required class="p-2 border border-gray-300 rounded"></textarea>
        <button type="submit" class="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">Send Message</button>
      </form>
    </section>
  {/if}
</main>
