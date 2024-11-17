<script>
    import { onMount } from 'svelte';
    import Wedding from "../assets/Wedding.webp";
    
    let currentIndex = 0;
    const occasions = [
      { 
        name: "Birthday Celebrations", 
        image: "/images/birthday-cupcakes.jpg", 
        description: "Make every birthday unforgettable with our custom-designed cupcakes. From children's parties to milestone birthdays, we create sweet memories that last a lifetime.",
        details: [
          "Custom themed designs",
          "Age-specific decorations",
          "Variety of flavors",
          "Personalized message options"
        ]
      },
      { 
        name: "Wedding Elegance", 
        image: Wedding, 
        description: "Elevate your wedding reception with our exquisite cupcake displays. Elegant, delicious, and perfectly matched to your wedding theme.",
        details: [
          "Tiered cupcake stands",
          "Matching color schemes",
          "Elegant decorations",
          "Bride and groom special flavors"
        ]
      },
      { 
        name: "Corporate Events", 
        image: "/images/corporate-cupcakes.jpg", 
        description: "Impress clients and motivate employees with our professionally crafted cupcake arrangements. Perfect for meetings, celebrations, and team events.",
        details: [
          "Logo branding options",
          "Bulk order discounts",
          "Professional presentation",
          "Customized flavor selections"
        ]
      },
      { 
        name: "Baby Shower", 
        image: "/images/baby-shower-cupcakes.jpg", 
        description: "Celebrate new life with adorable and delicious cupcakes that match your baby shower theme and bring joy to the celebration.",
        details: [
          "Gender reveal designs",
          "Cute character decorations",
          "Soft color palettes",
          "Matching cake and cupcake options"
        ]
      },
      { 
        name: "Graduation Celebration", 
        image: "/images/graduation-cupcakes.jpg", 
        description: "Commemorate academic achievements with our specially designed graduation cupcakes that capture the excitement of this milestone.",
        details: [
          "School color themes",
          "Graduation cap decorations",
          "Achievement-themed designs",
          "Personalized congratulatory messages"
        ]
      }
    ];
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % occasions.length;
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + occasions.length) % occasions.length;
    }
  
    onMount(() => {
      const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
      return () => clearInterval(interval);
    });
</script>

<section class="bg-white py-16 relative">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-4">Special Occasions</h2>
    <p class="text-center text-gray-600 mb-12 text-lg sm:w-[90%] md:w-[80%] mx-auto">
      Elevate every celebration with our custom-designed cupcakes. From intimate gatherings to grand events, we create sweet memories that last a lifetime.
    </p>
    
    <div class="relative w-full overflow-hidden">
      <div 
        class="flex transition-transform duration-500 ease-in-out" 
        style="transform: translateX(calc(-{currentIndex * 100}%))"
      >
        {#each occasions as occasion}
          <div class="w-full flex-shrink-0 px-4">
            <div class="flex bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto h-[500px]">
              <!-- {/* Image Section - Left Half */} -->
              <div class="w-1/2 relative">
                <img 
                  src={occasion.image} 
                  alt={occasion.name} 
                  class="absolute inset-0 w-full h-full object-cover"
                >
              </div>
              
              <!-- {/* Details Section - Right Half */} -->
              <div class="w-1/2 p-8 flex flex-col justify-center bg-pink-50">
                <h3 class="text-3xl font-bold text-gray-800 mb-4">{occasion.name}</h3>
                <p class="text-gray-600 mb-6">{occasion.description}</p>
                
                <div class="space-y-2">
                  <h4 class="text-xl font-semibold text-pink-600">What We Offer:</h4>
                  <ul class="list-disc list-inside text-gray-700">
                    {#each occasion.details as detail}
                      <li>{detail}</li>
                    {/each}
                  </ul>
                </div>
                

              </div>
            </div>
          </div>
        {/each}
      </div>
      
      <!-- {/* Navigation Buttons */} -->
      <button 
        on:click={prevSlide} 
        class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-white/50 to-transparent p-4 z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        on:click={nextSlide} 
        class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-l from-white/50 to-transparent p-4 z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</section>

<style>
  .overflow-hidden {
    overflow: hidden;
  }
</style>