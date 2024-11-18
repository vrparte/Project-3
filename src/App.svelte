<script>
  import { Router, Route, Link, useLocation } from "svelte-routing";
  import Header from './components/Header.svelte';
  import HeroSection from './components/HeroSection.svelte';
  import AboutUs from './components/AboutUs.svelte';
  import FeaturedProducts from './components/FeaturedProducts.svelte';
  import Footer from './components/Footer.svelte';
  import Cart from './components/Cart.svelte';
  import SpecialOccasions from './components/SpecialOccasions.svelte';
  import FloatingCartButton from "./components/FloatingCartButton.svelte";

  export let url = "";

  let showFloatingCart = true;
</script>

<Router {url}>
  <main class="bg-pink-50 min-h-screen mt-12">
    <Header />
    
    <Route path="/" let:params>
      <HeroSection />
      <AboutUs />
      <FeaturedProducts />
      <SpecialOccasions />
    </Route>

    <Route path="/cart" component={Cart} />

    <Footer />
  </main>
  {#if showFloatingCart}
    <FloatingCartButton />
  {/if}
</Router>

<style>
  /* You can keep global styles here */
</style>