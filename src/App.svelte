<script>
  import Header from './components/Header.svelte';
  import HeroSection from './components/HeroSection.svelte';
  import FeaturedProducts from './components/FeaturedProducts.svelte';
  import Footer from './components/Footer.svelte';
  import Cart from './components/Cart.svelte';
  import SpecialOccasions from './components/SpecialOccasions.svelte';
</script>

<main class="bg-pink-50 min-h-screen">
  <Header />
  <HeroSection />
  <FeaturedProducts />
  <Cart/>
  <SpecialOccasions />
  <Footer />
</main>

<style>
  /* You can keep global styles here */
</style>