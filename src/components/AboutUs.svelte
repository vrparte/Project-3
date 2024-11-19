<script>
    import Michelle from "../assets/Michelle.jpg";
    const founder = {
        name: "Toronto Cupcake",
        image: Michelle, // Update this with the actual image path
    };
</script>

<section class="bg-white py-16 relative" id="AboutUs">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">About Us</h2>
        
        <div class="max-w-6xl mx-auto">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                <div class="p-8 md:w-2/3">
                    <h3 class="text-2xl font-bold text-gray-800 mb-6">{founder.name}</h3>
                    <div class="text-gray-600 space-y-4">
                        <p>
                            Welcome to Toronto Cupcake! Founded in 2010, we are proud to be Toronto's leading destination for gourmet branded cupcakes. Whether you're celebrating a birthday, hosting a corporate event, or simply indulging in a sweet treat, our handcrafted cupcakes are made fresh daily using the finest ingredients. Explore our wide range of classic and seasonal flavors, and enjoy fast, reliable delivery across the GTA.
                        </p>
                        
                        <p>
                            Our founder, Michelle, is passionate about creating delicious cupcakes that bring joy to people's lives. With a background in culinary arts and a love for baking, she started Toronto Cupcake with a simple mission: to make the best cupcakes in Toronto. Over the years, our team has grown, but our commitment to quality and customer satisfaction remains the same.
                        </p>
                        <p>
                            We love the idea that our treats are making people happy every time they bite into one. How much fun is that!
                        </p>
                        <p>
                            At Toronto Cupcake, we believe in giving back to the community. Since our inception, we have partnered with numerous local organizations, donating our time and/or delicious cupcakes to support causes that make a difference in local and regional communities. We are committed to making a positive impact in our community and welcome opportunities to collaborate on charitable events.
                        </p>
                        <p>
                            Ready to experience the best cupcakes in Toronto? Browse our selection online or get in touch to discuss custom orders. From corporate events to weddings, we have the perfect cupcakes to make your occasion unforgettable. Order today and have our gourmet cupcakes delivered right to your door!
                        </p>
                    </div>
                </div>
                <div class="md:w-1/3">
                    <img 
                        src={founder.image} 
                        alt={founder.name} 
                        class="w-full h-full object-fill"
                    >
                </div>
            </div>
        </div>
    </div>
</section>