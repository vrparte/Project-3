<script>
    import ChocolateHazelnutImage from '../assets/ChocolateHazelnut.webp';
  </script>
  
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