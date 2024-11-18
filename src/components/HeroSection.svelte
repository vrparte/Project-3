<script>
    import HeroCupcakeImage from '../assets/Hero section cupcakes.webp';
  </script>
  
  <section class="container mx-auto px-4 py-16 h-[100vh] flex align-middle justify-center">
    <div class="flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-8 md:mb-0">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Delicious Cupcakes for Every Occasion</h1>
        <p class="text-xl text-gray-600 mb-8">Handcrafted with love in Toronto</p>
        <a class="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition duration-300" href="#FeaturedCupcakes">Shop Now</a>
      </div>
      <div class="md:w-1/2">
        <img src={HeroCupcakeImage} alt="Cupcakes" class="w-full h-full object-cover mask-radial-gradient">
      </div>
    </div>
  </section>
  
  <style>
    .mask-radial-gradient {
      mask-image: radial-gradient(circle, black 40%, transparent 70%);
      -webkit-mask-image: radial-gradient(circle, black 40%, transparent 70%);
    }
  </style>