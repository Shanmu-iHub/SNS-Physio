import { PageHeader } from '../components/page-header'

export const FacilitiesPage = () => {
    return `
    ${PageHeader(
        'World-Class Infrastructure', 
        'Everything a physiotherapy student needs for holistic development under one roof—unlocking their potential at the SPINE Activity Center', 
        '/static/images/hero5.png',
        'Facilities'
    )}

    <!-- SPINE Center -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block font-sans">Wellness & Lifestyle</span>
                <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">SNS SPINE Activity Center</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                    World-class facilities for mental & physical wellbeing
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Swimming Pool -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/pool.jpg" alt="Swimming Pool" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Swimming Pool</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Dive into excellence.
                        </p>
                    </div>
                </div>

                <!-- Indoor Pitch -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/cricket.jpg" alt="Indoor Pitch" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Indoor Pitch</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            All-weather sports.
                        </p>
                    </div>
                </div>

                <!-- Fitness Gym -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/gym.jpg" alt="Fitness Gym" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Fitness Gym</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Train hard, shape up.
                        </p>
                    </div>
                </div>

                <!-- Gaming Center -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/gaming.jpg" alt="Gaming Center" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Gaming Center</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Innovation through play.
                        </p>
                    </div>
                </div>

                <!-- Mini Theatre -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/theater.jpg" alt="Mini Theatre" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Mini Theatre</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Entertainment redefined.
                        </p>
                    </div>
                </div>

                <!-- Music Studio -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/music.jpg" alt="Music Studio" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Music Studio</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Fuel your soul.
                        </p>
                    </div>
                </div>

                <!-- Dance Studio -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/dance.jpg" alt="Dance Studio" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Dance Studio</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Art meets innovation.
                        </p>
                    </div>
                </div>

                <!-- Connection Lounge -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/lounge.jpg" alt="Connection Lounge" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Connection Lounge</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Network and relax.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Academic Facilities -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                 <h2 class="text-4xl font-bold text-gray-900 mb-6">Academic Infrastructure</h2>
                 <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Modern learning spaces designed to foster innovation and collaboration.
                 </p>
            </div>
            
            <div class="grid md:grid-cols-4 gap-8">
                <div class="bg-white rounded-xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300">
                    <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-chalkboard-teacher text-3xl text-purple-600"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 text-lg mb-2">Smart Classrooms</h3>
                    <p class="text-sm text-gray-600">Interactive learning with smart boards</p>
                </div>
                <div class="bg-white rounded-xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-heartbeat text-3xl text-blue-600"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 text-lg mb-2">Physio Labs</h3>
                    <p class="text-sm text-gray-600">Anatomy, Physiology & Exercise Therapy labs</p>
                </div>
                <div class="bg-white rounded-xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300">
                    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-desktop text-3xl text-green-600"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 text-lg mb-2">Computer Labs</h3>
                    <p class="text-sm text-gray-600">State-of-the-art computing facilities</p>
                </div>
                <div class="bg-white rounded-xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300">
                    <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-book text-3xl text-primary-600"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 text-lg mb-2">Library</h3>
                    <p class="text-sm text-gray-600">Comprehensive resource collection</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-r from-pink-600 to-primary-600 text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 class="text-4xl lg:text-5xl font-bold mb-6">Experience It In Person</h2>
            <p class="text-xl lg:text-2xl mb-10 text-white/90 font-light">
                Words and pictures can only say so much. Schedule a visit to see our world-class campus.
            </p>
            <a href="/contact" class="bg-white text-pink-600 hover:bg-gray-100 px-10 py-5 rounded-xl font-bold text-xl shadow-xl transition transform hover:scale-105 inline-block">
                Schedule Campus Tour
            </a>
        </div>
    </section>
  `;
};
