<script>
  import { Router, Route, Link } from "svelte-routing";
  import Header from './components/Header.svelte';
  import HeroSection from './components/HeroSection.svelte';
  import FeaturedProducts from './components/FeaturedProducts.svelte';
  import Footer from './components/Footer.svelte';
  import Cart from './components/Cart.svelte';
  import SpecialOccasions from './components/SpecialOccasions.svelte';

  export let url = "";
</script>

<Router {url}>
  <main class="bg-pink-50 min-h-screen">
    <Header />
    
    <Route path="/" let:params>
      <HeroSection />
      <FeaturedProducts />
      <SpecialOccasions />
    </Route>

    <Route path="/cart" component={Cart} />

    <Footer />
  </main>
</Router>

<style>
  /* You can keep global styles here */
</style>