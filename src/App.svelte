<script>
  // You can add any necessary logic here
  import TorontoCupcakeLogo from './assets/TC logo.png';
  import HeroCupcakeImage from './assets/Hero section cupcakes.webp';
  import ChocolateHazelnutImage from './assets/ChocolateHazelnut.webp';
</script>

<main class="bg-pink-50 min-h-screen">
  <!-- Header -->
  <header class="bg-white shadow-md">
    <div class="container mx-auto px-4 py-6 flex justify-between items-center">
      <img src={TorontoCupcakeLogo} alt="Toronto Cupcakes" class="h-12">
      <nav>
        <ul class="flex space-x-6">
          <li><a href="#" class="text-gray-700 hover:text-pink-500">Home</a></li>
          <li><a href="#" class="text-gray-700 hover:text-pink-500">Shop</a></li>
          <li><a href="#" class="text-gray-700 hover:text-pink-500">About</a></li>
          <li><a href="#" class="text-gray-700 hover:text-pink-500">Contact</a></li>
        </ul>
      </nav>
      <div class="flex items-center space-x-4">
        <button class="text-gray-700 hover:text-pink-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button class="text-gray-700 hover:text-pink-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="container mx-auto px-4 py-16">
    <div class="flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-8 md:mb-0">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Delicious Cupcakes for Every Occasion</h1>
        <p class="text-xl text-gray-600 mb-8">Handcrafted with love in Toronto</p>
        <button class="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition duration-300">Shop Now</button>
      </div>
      <div class="md:w-1/2">
        <img src={HeroCupcakeImage} alt="Cupcakes" class="w-full h-full object-cover mask-radial-gradient">
      </div>
    </div>
  </section>

  <!-- Featured Products -->
  <section class="bg-white py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Featured Cupcakes</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Repeat this card for each featured product -->
        <div class="bg-pink-100 rounded-lg overflow-hidden shadow-md">
          <img src={ChocolateHazelnutImage} alt="Cupcake" class="">
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Chocolate Hazelnut</h3>
            <p class="text-gray-600 mb-4">Rich chocolate cupcake with creamy frosting</p>
            <div class="flex justify-between items-center">
              <span class="text-pink-500 font-bold">$3.99</span>
              <button class="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition duration-300">Add to Cart</button>
            </div>
          </div>
        </div>
        <!-- Repeat for other cupcakes -->
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-800 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-semibold mb-4">About Us</h3>
          <p class="text-gray-400">Toronto Cupcake is dedicated to bringing you the most delicious cupcakes in the city.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white">FAQ</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Delivery</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Returns</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">Contact Us</h3>
          <p class="text-gray-400">123 Cupcake Street, Toronto, ON</p>
          <p class="text-gray-400">Phone: (123) 456-7890</p>
          <p class="text-gray-400">Email: info@torontocupcake.com</p>
        </div>
      </div>
    </div>
  </footer>
</main>

<style>
  .mask-radial-gradient {
  mask-image: radial-gradient(circle, black 55%, transparent 75%);
  -webkit-mask-image: radial-gradient(circle, black 55%, transparent 75%);
}
</style>