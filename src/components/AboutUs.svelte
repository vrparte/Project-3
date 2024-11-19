<script>
    import Michelle from "../assets/Michelle.jpg";
    import { onMount } from 'svelte';
    
    const founder = {
        name: "Toronto Cupcake",
        image: Michelle,
    };

    let isVisible = false;

    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    isVisible = true;
                }
            });
        }, { threshold: 0.1 });

        const aboutSection = document.querySelector('#AboutUs');
        if (aboutSection) observer.observe(aboutSection);

        return () => observer.disconnect();
    });
</script>

<section class="bg-gradient-to-b from-pink-50 to-white py-24 relative" id="AboutUs">
    <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16 text-pink-600 font-cursive">Our Sweet Story</h2>
        
        <div class="max-w-6xl mx-auto">
            <div class="bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row transform transition-all duration-500 ease-in-out" class:translate-y-0={isVisible} class:translate-y-10={!isVisible} class:opacity-100={isVisible} class:opacity-0={!isVisible}>
                <div class="p-10 md:w-2/3">
                    <h3 class="text-3xl font-bold text-gray-800 mb-8 font-cursive">{founder.name}</h3>
                    <div class="text-gray-700 space-y-6 leading-relaxed">
                        <p class="first-letter:text-4xl first-letter:font-bold first-letter:text-pink-500 first-letter:mr-2 first-letter:float-left">
                            Welcome to Toronto Cupcake! Founded in 2010, we are proud to be Toronto's leading destination for gourmet branded cupcakes. Whether you're celebrating a birthday, hosting a corporate event, or simply indulging in a sweet treat, our handcrafted cupcakes are made fresh daily using the finest ingredients.
                        </p>
                        
                        <p>
                            Our founder, Michelle, is passionate about creating delicious cupcakes that bring joy to people's lives. With a background in culinary arts and a love for baking, she started Toronto Cupcake with a simple mission: to make the best cupcakes in Toronto.
                        </p>
                        <p class="font-semibold text-pink-600 text-lg italic">
                            "We love the idea that our treats are making people happy every time they bite into one. How much fun is that!"
                        </p>
                        <p>
                            At Toronto Cupcake, we believe in giving back to the community. Since our inception, we have partnered with numerous local organizations, donating our time and delicious cupcakes to support causes that make a difference in local and regional communities.
                        </p>
                        <p>
                            Ready to experience the best cupcakes in Toronto? Browse our selection online or get in touch to discuss custom orders. From corporate events to weddings, we have the perfect cupcakes to make your occasion unforgettable.
                        </p>
                    </div>
                </div>
                <div class="md:w-1/3 relative overflow-hidden">
                    <img 
                        src={founder.image} 
                        alt={founder.name} 
                        class="w-full h-full object-fill transform transition-transform duration-500 ease-in-out hover:scale-105"
                    >
                    <div class="absolute inset-0 bg-gradient-to-t from-pink-500 to-transparent opacity-20"></div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');

    :global(.font-cursive) {
        font-family: 'Dancing Script', cursive;
    }
</style>