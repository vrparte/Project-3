<script>
    const teamMembers = [
        {
            name: "Emily Thompson",
            role: "Founder & Head Baker",
            image: "/images/emily-thompson.jpg",
            description: "A passionate pastry chef with over 15 years of experience, Emily founded Toronto Cupcake with a vision to create extraordinary dessert experiences.",
            expertise: ["Artisan Baking", "Pastry Innovation", "Flavor Development", "Culinary Leadership"]
        },
        {
            name: "Michael Chen",
            role: "Head of Creative Design",
            image: "/images/michael-chen.jpg",
            description: "A creative genius who transforms cupcakes into edible art, Michael leads our design team in creating stunning and unique cupcake designs.",
            expertise: ["Creative Cupcake Design", "Decorative Techniques", "Color Theory", "Artistic Presentation"]
        },
        {
            name: "Sarah Rodriguez",
            role: "Customer Experience Manager",
            image: "/images/sarah-rodriguez.jpg",
            description: "Dedicated to ensuring every customer's experience is as sweet as our cupcakes, Sarah is the heart of our customer service team.",
            expertise: ["Customer Relationship", "Service Excellence", "Event Coordination", "Client Satisfaction"]
        }
    ];
</script>

<section class="bg-white py-16 relative" id="AboutUs">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-4">About Us</h2>
        <div class="text-center text-gray-600 mb-12 text-lg sm:w-[90%] md:w-[80%] mx-auto">
            <p class="mb-4">
                Welcome to Toronto Cupcake, the GTA's premier destination for gourmet cupcakes since 2010. Whether celebrating a special occasion or treating yourself, our handcrafted cupcakes are made fresh daily with the finest ingredients. Enjoy a variety of flavors and fast delivery across Toronto.
            </p>
            
            <p class="mb-4">
                We're proud to support our community, partnering with local organizations to make a difference through donations and events.
            </p>
            
            <p>
                Ready to sweeten your day? Browse our selection online or contact us for custom orders. Perfect for weddings, birthdays, or corporate events—order now for doorstep delivery!
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each teamMembers as member}
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="relative h-64">
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            class="absolute inset-0 w-full h-full object-cover"
                        >
                    </div>
                    <div class="p-6 bg-pink-50">
                        <h3 class="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                        <h4 class="text-lg text-pink-600 mb-4">{member.role}</h4>
                        <p class="text-gray-600 mb-4">{member.description}</p>
                        <div>
                            <h5 class="text-lg font-semibold text-pink-600 mb-2">Expertise:</h5>
                            <ul class="list-disc list-inside text-gray-700">
                                {#each member.expertise as skill}
                                    <li>{skill}</li>
                                {/each}
                            </ul>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>