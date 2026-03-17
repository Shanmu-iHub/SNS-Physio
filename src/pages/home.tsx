import { ParentsTestimonialsCarousel } from '../components/testimonials'

export const HomePage = () => {
    return `
    <!-- Hero Section with Real SNS Content -->
    <section class="relative text-white py-24 lg:py-32 overflow-hidden">
        <!-- Background Image with Overlay -->
        <div class="absolute inset-0 z-0">
            <img src="/static/images/hero.png" alt="SNS College of Physiotherapy Campus" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-r from-black/10 via-black/10 to-transparent"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div class="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
                        <i class="fas fa-certificate text-yellow-400 mr-2"></i>
                        <span class="text-sm font-semibold tracking-wide">Premier Institution for Physiotherapy Education</span>
                    </div>
                    
                    <h1 class="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight font-display">
                            Shaping Future <br/>
                            <span class="text-primary-500">Healthcare Professionals</span>
                    </h1>
                    
                    <div class="h-1 w-24 bg-primary-500 mb-8 rounded-full"></div>

                    <p class="text-xl lg:text-2xl mb-6 text-gray-200 leading-relaxed max-w-xl">
                        Trained by Stanford Alumni, our students learn world-class <strong class="text-white">Design Thinking Methodologies</strong> and innovation practices that open doors to elite universities worldwide.
                    </p>

                    <p class="text-sm lg:text-base mb-8 text-gray-200 leading-relaxed max-w-xl">
                        Transform your child into a confident learner and global leader at Coimbatore's most progressive CBSE school.
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-4 mb-10">
                        <a href="/admissions" class="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-primary-500/30 transition transform hover:-translate-y-1 flex items-center justify-center">
                            Apply for 2026-27
                            <i class="fas fa-arrow-right ml-2 text-sm"></i>
                        </a>
                        <a href="/about" class="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition flex items-center justify-center">
                            <i class="fas fa-play mr-2 text-sm"></i>
                            About Us
                        </a>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-4 text-xs text-gray-200">
                        <div class="inline-flex items-center">
                            <i class="fas fa-circle-check text-green-400 mr-2"></i>
                            CBSE Affiliated
                        </div>
                        <div class="inline-flex items-center">
                            <i class="fas fa-shield-halved text-green-400 mr-2"></i>
                            Verified by CBSE
                        </div>
                        <div class="inline-flex items-center">
                            <i class="fas fa-calendar text-green-400 mr-2"></i>
                            Since 2014
                        </div>
                    </div>
                </div>
                
                <div class="hidden lg:block relative">
                    <!-- Optional: Add a floated refined card or keep clean to show the background image -->
                    <!-- Keeping it clean to showcase the 'Real' image -->
                    <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="bg-white/10 border border-white/10 rounded-xl p-5 text-center transition-all duration-300 ease-out hover:scale-105 hover:bg-white/20 hover:shadow-xl hover:border-white/30 cursor-pointer">
                                <div class="text-4xl font-extrabold text-white transition-transform duration-300 hover:scale-110">10:1</div>
                                <div class="text-xs text-gray-200 mt-1">Student Teacher Ratio</div>
                            </div>
                            <div class="bg-white/10 border border-white/10 rounded-xl p-5 text-center transition-all duration-300 ease-out hover:scale-105 hover:bg-white/20 hover:shadow-xl hover:border-white/30 cursor-pointer">
                                <div class="text-4xl font-extrabold text-white transition-transform duration-300 hover:scale-110">60%</div>
                                <div class="text-xs text-gray-200 mt-1">10+ Years Experience</div>
                            </div>
                            <div class="bg-white/10 border border-white/10 rounded-xl p-5 text-center transition-all duration-300 ease-out hover:scale-105 hover:bg-white/20 hover:shadow-xl hover:border-white/30 cursor-pointer">
                                <div class="text-4xl font-extrabold text-white transition-transform duration-300 hover:scale-110">25+</div>
                                <div class="text-xs text-gray-200 mt-1">Extra Curricular</div>
                            </div>
                            <div class="bg-white/10 border border-white/10 rounded-xl p-5 text-center transition-all duration-300 ease-out hover:scale-105 hover:bg-white/20 hover:shadow-xl hover:border-white/30 cursor-pointer">
                                <div class="text-4xl font-extrabold text-white transition-transform duration-300 hover:scale-110">12+</div>
                                <div class="text-xs text-gray-200 mt-1">Years of CBSE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Trust Bar -->
    <section class="py-10 bg-white border-b">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center divide-x divide-gray-100">
                <div class="p-4">
                    <div class="text-4xl font-bold text-gray-900 mb-2">2014</div>
                    <div class="text-sm text-gray-500 font-medium uppercase tracking-wide">Established</div>
                </div>
                <div class="p-4">
                    <div class="text-4xl font-bold text-gray-900 mb-2">1000+</div>
                    <div class="text-sm text-gray-500 font-medium uppercase tracking-wide">Happy Students</div>
                </div>
                <div class="p-4">
                    <div class="text-4xl font-bold text-gray-900 mb-2">A+</div>
                    <div class="text-sm text-gray-500 font-medium uppercase tracking-wide">Campus Rating</div>
                </div>
                <div class="p-4">
                    <div class="text-4xl font-bold text-gray-900 mb-2">SNS iHub</div>
                    <div class="text-sm text-gray-500 font-medium uppercase tracking-wide">Innovation Center</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Why SNS College of Physiotherapy -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-primary-600">Why Parents Choose SNS College of Physiotherapy</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    We don't just teach subjects—we redesign common minds through design thinking, preparing your child for tomorrow's challenges.
                </p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Card 1 -->
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group">
                    <div class="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                        <i class="fas fa-lightbulb text-3xl text-primary-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Design Thinking Education</h3>
                    <p class="text-gray-600 leading-relaxed">
                        India's first school with <strong>GenAI-Powered Design Thinking Framework (Patented)</strong>. Built on <strong>Empathy</strong>, every child learns to solve problems creatively using AI-enhanced methodologies from an early age.
                    </p>
                </div>
                
                <!-- Card 2 -->
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group">
                    <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                        <i class="fas fa-users text-3xl text-blue-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">3P Culture Framework</h3>
                    <p class="text-gray-600 leading-relaxed">
                        <strong>Purpose, Process, People</strong>—our holistic approach ensures every child develops academically, socially, emotionally, and ethically.
                    </p>
                </div>
                
                <!-- Card 3 -->
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group">
                    <div class="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                        <i class="fas fa-hand-holding-heart text-3xl text-green-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">10:1 Personalized Care</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Ultra-low student-teacher ratio ensures every child receives individual attention. 60% of our faculty have 10+ years of experience.
                    </p>
                </div>
                
                <!-- Card 4 -->
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group">
                    <div class="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                        <i class="fas fa-rocket text-3xl text-purple-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">SNS Innovation Hub</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Access to SNS iHub—India's Y-Combinator equivalent. Students work with AI, IoT, Robotics, AR/VR labs preparing them for future careers.
                    </p>
                </div>
                
                <!-- Card 5 -->
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group">
                    <div class="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                        <i class="fas fa-building text-3xl text-pink-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">World-Class SPINE Center</h3>
                    <p class="text-gray-600 leading-relaxed">
                        5-level activity center with swimming pool, indoor cricket, gym, music studio, dance studio, theater, and more—everything under one roof.
                    </p>
                </div>
                
                <!-- Card 6 -->
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group">
                    <div class="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                        <i class="fas fa-layer-group text-3xl text-indigo-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">5 Pillars Development</h3>
                    <p class="text-gray-600 leading-relaxed">
                        <strong>Learning, Upskilling, Innovation, Networking, Character Building</strong>—comprehensive development for future leaders.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Academic Programs Overview -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                 <span class="text-primary-600">Academic Excellence in Physiotherapy</span>
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    World-class clinical training enhanced with design thinking, experiential learning, and innovation.
                </p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <!-- Program 1 -->
                <a href="/academics/bpt" class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition z-10"></div>
                        <img src="/static/images/hero.png" alt="B.P.T" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-3xl font-bold text-gray-900 mb-2">B.P.T</h3>
                        <p class="text-primary-600 font-semibold mb-4">Bachelor of Physiotherapy</p>
                        <p class="text-gray-600 line-clamp-3">
                            A comprehensive 4.5-year undergraduate program focusing on human anatomy, physiology, and physical therapy techniques with a 6-month mandatory internship.
                        </p>
                        <div class="mt-6 text-primary-600 font-bold flex items-center">
                            Explore <i class="fas fa-arrow-right ml-2 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0"></i>
                        </div>
                    </div>
                </a>
                
                <!-- Program 2 -->
                <a href="/academics/mpt" class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition z-10"></div>
                        <img src="/static/images/secondary.png" alt="M.P.T" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-3xl font-bold text-gray-900 mb-2">M.P.T</h3>
                        <p class="text-blue-600 font-semibold mb-4">Master of Physiotherapy</p>
                        <p class="text-gray-600 line-clamp-3">
                            A 2-year postgraduate program specializing in areas like Orthopaedics, Neurology, Sports Physiotherapy, and Cardiopulmonary Sciences.
                        </p>
                        <div class="mt-6 text-blue-600 font-bold flex items-center">
                            Explore <i class="fas fa-arrow-right ml-2 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0"></i>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>

    ${ParentsTestimonialsCarousel()}

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-primary-600 to-red-600 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl lg:text-5xl font-bold mb-4">
                Ready to Transform Your Child's Future?
            </h2>
            <p class="text-xl opacity-90 mb-8">
                Admissions open for Academic Year 2026-27. Limited seats available.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admissions" class="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition shadow-xl">
                    <i class="fas fa-pen-to-square mr-2"></i>
                    Apply Now
                </a>
                <a href="/contact" class="bg-white/20 backdrop-blur-lg hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition">
                    <i class="fas fa-phone mr-2"></i>
                    Schedule Campus Visit
                </a>
            </div>
        </div>
    </section>
  `;
};
