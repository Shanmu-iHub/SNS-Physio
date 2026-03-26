import { PageHeader } from '../components/page-header'

export const EventsPage = () => {
    return `
    ${PageHeader(
        'Events & Celebrations',
        'Experience the vibrant life at SNS College of Physiotherapy through our memorable events, celebrations, and activities',
        '/static/images/_MG_5652.jpg',
        'Events'
    )}

    <!-- Instagram-Style Gallery -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <!-- Gallery Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <!-- Event 1: Advaya -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="/static/images/advaya.png" alt="Advaya" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <!-- Always visible title -->
                    <div class="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                        <h3 class="text-white font-bold text-2xl">Advaya</h3>
                    </div>
                    <!-- Hover overlay with full details -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div>
                            <h3 class="text-white font-bold text-2xl mb-2">Advaya</h3>
                            <p class="text-white/90 text-sm mb-3">Celebration of Advaya at SNS College of Physiotherapy.</p>
                            <div class="flex items-center text-white/80 text-xs space-x-4 mb-3">
                                <span><i class="fas fa-calendar mr-1"></i> 2026</span>
                                <span><i class="fas fa-star mr-1"></i> Activity</span>
                            </div>
                            <a href="https://www.instagram.com/snsinstitutions/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur text-white px-4 py-2 rounded-lg text-xs font-semibold transition border border-white/30">
                                <i class="fas fa-arrow-right mr-2"></i> Read More
                            </a>
                        </div>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold">Activity</span>
                    </div>
                </div>

                <!-- Event 2: ARP & BOG -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="/static/images/arp_and_bog.jpg" alt="ARP & BOG" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <!-- Always visible title -->
                    <div class="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                        <h3 class="text-white font-bold text-2xl">ARP & BOG</h3>
                    </div>
                    <!-- Hover overlay with full details -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div>
                            <h3 class="text-white font-bold text-2xl mb-2">ARP & BOG</h3>
                            <p class="text-white/90 text-sm mb-3">Celebration and gathering for ARP & BOG.</p>
                            <div class="flex items-center text-white/80 text-xs space-x-4 mb-3">
                                <span><i class="fas fa-calendar mr-1"></i> 2026</span>
                                <span><i class="fas fa-users mr-1"></i> Event</span>
                            </div>
                            <a href="https://www.instagram.com/snsinstitutions/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur text-white px-4 py-2 rounded-lg text-xs font-semibold transition border border-white/30">
                                <i class="fas fa-arrow-right mr-2"></i> Read More
                            </a>
                        </div>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">Event</span>
                    </div>
                </div>

                <!-- Event 3: Culturals -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="/static/images/culturals.jpg" alt="Culturals" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <!-- Always visible title -->
                    <div class="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                        <h3 class="text-white font-bold text-2xl">Culturals</h3>
                    </div>
                    <!-- Hover overlay with full details -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div>
                            <h3 class="text-white font-bold text-2xl mb-2">Culturals</h3>
                            <p class="text-white/90 text-sm mb-3">Cultural events at SNS College of Physiotherapy showcase student talent.</p>
                            <div class="flex items-center text-white/80 text-xs space-x-4 mb-3">
                                <span><i class="fas fa-calendar mr-1"></i> 2026</span>
                                <span><i class="fas fa-music mr-1"></i> Culturals</span>
                            </div>
                            <a href="https://www.instagram.com/snsinstitutions/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur text-white px-4 py-2 rounded-lg text-xs font-semibold transition border border-white/30">
                                <i class="fas fa-arrow-right mr-2"></i> Read More
                            </a>
                        </div>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold">Celebration</span>
                    </div>
                </div>

                <!-- Event 4: Castle of Talents -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="/static/images/castle_of_talents.jpg" alt="Castle of Talents" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <!-- Always visible title -->
                    <div class="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                        <h3 class="text-white font-bold text-2xl">Castle of Talents</h3>
                    </div>
                    <!-- Hover overlay with full details -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div>
                            <h3 class="text-white font-bold text-2xl mb-2">Castle of Talents</h3>
                            <p class="text-white/90 text-sm mb-3">Showcasing the unique abilities of our students at Castle of Talents.</p>
                            <div class="flex items-center text-white/80 text-xs space-x-4 mb-3">
                                <span><i class="fas fa-calendar mr-1"></i> 2026</span>
                                <span><i class="fas fa-star mr-1"></i> Competition</span>
                            </div>
                            <a href="https://www.instagram.com/snsinstitutions/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur text-white px-4 py-2 rounded-lg text-xs font-semibold transition border border-white/30">
                                <i class="fas fa-arrow-right mr-2"></i> Read More
                            </a>
                        </div>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">Activity</span>
                    </div>
                </div>

                <!-- Event 5: Christmas Celebration -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="/static/images/christmas.jpg" alt="Christmas Celebration" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <!-- Always visible title -->
                    <div class="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                        <h3 class="text-white font-bold text-2xl">Christmas Celebration</h3>
                    </div>
                    <!-- Hover overlay with full details -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div>
                            <h3 class="text-white font-bold text-2xl mb-2">Christmas Celebration</h3>
                            <p class="text-white/90 text-sm mb-3">May this festive season fill your hearts with joy, peace, and goodwill. Wishing everyone a Christmas filled with love, happiness, and new beginnings. Warm Christmas wishes from SNS Institutions!!!</p>
                            <div class="flex items-center text-white/80 text-xs space-x-4 mb-3">
                                <span><i class="fas fa-calendar mr-1"></i> Dec 2025</span>
                                <span><i class="fas fa-gift mr-1"></i> Festival</span>
                            </div>
                            <a href="https://www.instagram.com/snsinstitutions/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur text-white px-4 py-2 rounded-lg text-xs font-semibold transition border border-white/30">
                                <i class="fas fa-arrow-right mr-2"></i> Read More
                            </a>
                        </div>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">Festival</span>
                    </div>
                </div>

                <!-- Event 6: Educational Tour -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="https://scontent-maa5-2.cdninstagram.com/v/t51.82787-15/600926622_18338297017235871_4661934839550693_n.webp?_nc_cat=108&ig_cache_key=Mzc5MTQ0MDEwMzUyOTk3OTM2MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwNzl4NzE5LnNkci5DMyJ9&_nc_ohc=hj6nIL29W-gQ7kNvwH6fa6p&_nc_oc=Adn2izmgrMj0wJvaoenoDA4Z8oVyZEYWScjV9qu9RYkMwMa4dymbXpg6j5aqtsYdwus&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-maa5-2.cdninstagram.com&_nc_gid=SMeZyFwDQ6zdYvow83ynIw&oh=00_AftllX9COVfNADSiq96pbuZ3I7MCjUEczOw5dRbT4Vt8Nw&oe=6987A25D" alt="Educational Tour" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <!-- Always visible title -->
                    <div class="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                        <h3 class="text-white font-bold text-2xl">Educational Tour</h3>
                    </div>
                    <!-- Hover overlay with full details -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div>
                            <h3 class="text-white font-bold text-2xl mb-2">Educational Tour</h3>
                            <p class="text-white/90 text-sm mb-3">Our students enjoyed an enriching educational tour to Thekkady, where learning met nature and adventure. From exploring the Periyar Wildlife Sanctuary to understanding biodiversity and conservation firsthand, the experience went beyond textbooks. Filled with teamwork, joy, and unforgettable memories!</p>
                            <div class="flex items-center text-white/80 text-xs space-x-4 mb-3">
                                <span><i class="fas fa-calendar mr-1"></i> Dec 2025</span>
                                <span><i class="fas fa-hiking mr-1"></i> Thekkady</span>
                            </div>
                            <a href="https://www.instagram.com/p/DSd5rGBEwpi/?img_index=1" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur text-white px-4 py-2 rounded-lg text-xs font-semibold transition border border-white/30">
                                <i class="fas fa-arrow-right mr-2"></i> Read More
                            </a>
                        </div>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">Educational Tour</span>
                    </div>
                </div>

                <!-- Event 7: Raksha Bandhan -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="/static/images/physio/raksha_bandhan.jpg" alt="Raksha Bandhan"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <!-- Always visible title -->
                    <div
                        class="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                        <h3 class="text-white font-bold text-2xl">Raksha Bandhan</h3>
                    </div>
                    <!-- Hover overlay with full details -->
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div>
                            <h3 class="text-white font-bold text-2xl mb-2">Raksha Bandhan</h3>
                            <p class="text-white/90 text-sm mb-3">Raksha Bandhan celebration at SNS College of
                                Physiotherapy, honouring the bond of protection and care.</p>
                            <div class="flex items-center text-white/80 text-xs space-x-4 mb-3">
                                <span><i class="fas fa-calendar mr-1"></i> Aug 2025</span>
                                <span><i class="fas fa-star mr-1"></i> Celebration</span>
                            </div>
                            <a href="https://www.instagram.com/snsinstitutions/" target="_blank" rel="noopener noreferrer"
                                class="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur text-white px-4 py-2 rounded-lg text-xs font-semibold transition border border-white/30">
                                <i class="fas fa-arrow-right mr-2"></i> Read More
                            </a>
                        </div>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold">Celebration</span>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">Be Part of Our Vibrant Community</h2>
            <p class="text-xl text-gray-600 mb-8">
                Join SNS College of Physiotherapy and create unforgettable memories through our diverse events and celebrations!
            </p>
            <a href="/admissions" class="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition">
                <i class="fas fa-pen-to-square mr-2"></i>
                Apply for Admission
            </a>
        </div>
    </section>
  `;
};
