<script>
    import TorontoCupcakeLogo from '../assets/TC logo.png';
  </script>
  
  <header class="bg-white shadow-md top-0 fixed w-full z-50">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="flex items-center">
            <img src={TorontoCupcakeLogo} alt="Toronto Cupcakes" class="h-12 px-3">
            <h1 class="font-bold text-gray-700 text-2xl">Toronto Cupcakes</h1>
        </div>
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