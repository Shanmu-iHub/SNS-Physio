
// Automatic Update & Cache Clear Script
(function () {
    const CURRENT_VERSION = "2026.03.02.01"; // UPDATE THIS NUMBER TO CLEAR CACHE FOR ALL USERS
    const storedVersion = localStorage.getItem('site_version');

    if (storedVersion && storedVersion !== CURRENT_VERSION) {
        localStorage.setItem('site_version', CURRENT_VERSION);
        console.log("New version detected. Clearing cache...");

        // Force a hard reload from the server
        window.location.reload(true);

        // If the browser doesn't support reload(true), use a cache-busting URL
        if (!window.location.search.includes('v=')) {
            window.location.href = window.location.pathname + '?v=' + CURRENT_VERSION;
        }
    } else {
        localStorage.setItem('site_version', CURRENT_VERSION);
    }
})();

const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
    <style>
        @keyframes swing {
            0%, 100% { transform: rotate(-3deg); }
            50% { transform: rotate(3deg); }
        }
        .swing {
            animation: swing 2s ease-in-out infinite;
            transform-origin: top center;
        }
    </style>
    <!-- Hanging Tag 1: IAP APPROVED -->
    <a href="https://www.tnmgrmu.ac.in/" target="_blank" class="fixed top-[22%] right-0 z-50 swing">
        <div class="bg-[#00a651] text-white px-3 py-6 rounded-l-xl shadow-2xl flex flex-col items-center border-l border-t border-b border-white/20">
            <span class="font-bold text-xs uppercase tracking-widest"
                style="writing-mode: vertical-rl; text-orientation: mixed; letter-spacing: 0.2em;">IAP APPROVED</span>
        </div>
    </a>

    <!-- Hanging Tag 2: Brochure -->
    <a href="/brochure" class="fixed top-[46%] right-0 z-50 swing" style="display: block; animation-delay: 0.3s;">
        <div class="bg-[#ed1c24] text-white px-3 py-8 rounded-l-xl shadow-2xl flex flex-col items-center space-y-3 group border-l border-t border-b border-white/20">
            <i class="fas fa-file-pdf text-xl group-hover:scale-110 transition-transform duration-300"></i>
            <span class="font-bold text-xs uppercase tracking-widest"
                style="writing-mode: vertical-rl; text-orientation: mixed; letter-spacing: 0.2em;">BROCHURE</span>
        </div>
    </a>

    <!-- Floating CTA Button (Mobile) -->
    <div class="fixed bottom-6 left-6 z-50 lg:hidden">
        <a href="/admissions"
            class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center space-x-2 pulse-slow">
            <i class="fas fa-pen-to-square"></i>
            <span class="font-bold">Apply Now</span>
        </a>
    </div>

    <!-- Navigation -->
    <nav class="bg-white shadow-md sticky top-0 z-40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <a href="/" class="flex items-center space-x-3">
                    <img src="/static/images/SNS%20Physio.jpg" alt="SNS College of Physiotherapy Logo" class="h-16 w-auto">
                    <div>
                        <h1 class="text-xl font-bold text-gray-900">SNS College of Physiotherapy</h1>
                        <p class="text-xs text-gray-500">Excellence in Care</p>
                    </div>
                </a>

                <div class="hidden md:flex items-center space-x-6">
                    <a href="/" class="text-gray-700 hover:text-primary-600 font-medium">Home</a>

                    <!-- Programs Dropdown -->
                    <div class="relative group">
                        <button class="text-gray-700 hover:text-primary-600 font-medium flex items-center">
                            Programs <i class="fas fa-chevron-down ml-1 text-xs"></i>
                        </button>
                        <div
                            class="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-64 mt-0 z-50">
                            <a href="/academics/bpt/index.html"
                                class="block px-4 py-2 hover:bg-primary-50 text-gray-700">B.P.T (4.5 Years)</a>
                            <a href="/academics/mpt/index.html"
                                class="block px-4 py-2 hover:bg-primary-50 text-gray-700">M.P.T (2 Years)</a>
                        </div>
                    </div>

                    <!-- Infrastructure Dropdown -->
                    <div class="relative group">
                        <button class="text-gray-700 hover:text-primary-600 font-medium flex items-center">
                            Infrastructure <i class="fas fa-chevron-down ml-1 text-xs"></i>
                        </button>
                        <div
                            class="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-48 mt-0 z-50">
                            <a href="/facilities"
                                class="block px-4 py-2 hover:bg-primary-50 text-gray-700">Facilities</a>
                            <a href="/gallery" class="block px-4 py-2 hover:bg-primary-50 text-gray-700">Gallery</a>
                            <a href="/transport" class="block px-4 py-2 hover:bg-primary-50 text-gray-700">Transport</a>
                        </div>
                    </div>

                    <!-- Beyond Academics Dropdown -->
                    <div class="relative group">
                        <button class="text-gray-700 hover:text-primary-600 font-medium flex items-center">
                            Beyond Academics <i class="fas fa-chevron-down ml-1 text-xs"></i>
                        </button>
                        <div
                            class="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-56 mt-0 z-50">
                            <a href="/sports-clubs" class="block px-4 py-2 hover:bg-primary-50 text-gray-700">Sports &
                                Clubs</a>
                            <a href="/innovation" class="block px-4 py-2 hover:bg-primary-50 text-gray-700">Innovation
                                Hub</a>
                            <a href="/events" class="block px-4 py-2 hover:bg-primary-50 text-gray-700">Events &
                                Celebrations</a>
                            <a href="/success-stories" class="block px-4 py-2 hover:bg-primary-50 text-gray-700">Success
                                Stories</a>
                        </div>
                    </div>

                    <!-- Meet Us Dropdown -->
                    <div class="relative group">
                        <button class="text-gray-700 hover:text-primary-600 font-medium flex items-center">
                            Meet Us <i class="fas fa-chevron-down ml-1 text-xs"></i>
                        </button>
                        <div class="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-56 mt-0 z-50">
                            <a href="/about" class="block px-4 py-2 hover:bg-primary-50 text-gray-700">About Us</a>
                            <a href="/contact" class="block px-4 py-2 hover:bg-primary-50 text-gray-700">Contact Us</a>
                            <a href="/mandatory-disclosure" class="block px-4 py-2 hover:bg-primary-50 text-gray-700">Mandatory Disclosure</a>
                        </div>
                    </div>

                    <a href="/admissions"
                        class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-bold transition">
                        Apply Now <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>

                <button id="mobile-menu-btn" class="md:hidden text-gray-700">
                    <i class="fas fa-bars text-2xl"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
            <div class="px-4 py-4 space-y-3">
                <a href="/" class="block text-gray-700 hover:text-primary-600 font-medium py-2">Home</a>

                <!-- Programs -->
                <div>
                    <button
                        class="w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2 flex justify-between items-center"
                        onclick="document.getElementById('mobile-programs').classList.toggle('hidden')">
                        Programs <i class="fas fa-chevron-down"></i>
                    </button>
                    <div id="mobile-programs" class="hidden pl-4 space-y-2 mt-2">
                        <a href="/academics/bpt/index.html"
                            class="block text-gray-600 hover:text-primary-600 py-1">B.P.T (4.5 Years)</a>
                        <a href="/academics/mpt/index.html" class="block text-gray-600 hover:text-primary-600 py-1">M.P.T
                            (2 Years)</a>
                    </div>
                </div>

                <!-- Infrastructure -->
                <div>
                    <button
                        class="w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2 flex justify-between items-center"
                        onclick="document.getElementById('mobile-infrastructure').classList.toggle('hidden')">
                        Infrastructure <i class="fas fa-chevron-down"></i>
                    </button>
                    <div id="mobile-infrastructure" class="hidden pl-4 space-y-2 mt-2">
                        <a href="/facilities" class="block text-gray-600 hover:text-primary-600 py-1">Facilities</a>
                        <a href="/gallery" class="block text-gray-600 hover:text-primary-600 py-1">Gallery</a>
                        <a href="/transport" class="block text-gray-600 hover:text-primary-600 py-1">Transport</a>
                    </div>
                </div>

                <!-- Beyond Academics -->
                <div>
                    <button
                        class="w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2 flex justify-between items-center"
                        onclick="document.getElementById('mobile-beyond').classList.toggle('hidden')">
                        Beyond Academics <i class="fas fa-chevron-down"></i>
                    </button>
                    <div id="mobile-beyond" class="hidden pl-4 space-y-2 mt-2">
                        <a href="/sports-clubs" class="block text-gray-600 hover:text-primary-600 py-1">Sports &
                            Clubs</a>
                        <a href="/innovation" class="block text-gray-600 hover:text-primary-600 py-1">Innovation Hub</a>
                        <a href="/events" class="block text-gray-600 hover:text-primary-600 py-1">Events &
                            Celebrations</a>
                        <a href="/success-stories" class="block text-gray-600 hover:text-primary-600 py-1">Success
                            Stories</a>
                    </div>
                </div>

                <!-- Meet Us -->
                <div>
                    <button
                        class="w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2 flex justify-between items-center"
                        onclick="document.getElementById('mobile-meetus').classList.toggle('hidden')">
                        Meet Us <i class="fas fa-chevron-down"></i>
                    </button>
                    <div id="mobile-meetus" class="hidden pl-4 space-y-2 mt-2">
                        <a href="/about" class="block text-gray-600 hover:text-primary-600 py-1">About Us</a>
                        <a href="/contact" class="block text-gray-600 hover:text-primary-600 py-1">Contact Us</a>
                        <a href="/mandatory-disclosure" class="block text-gray-600 hover:text-primary-600 py-1">Mandatory Disclosure</a>
                    </div>
                </div>

                <a href="/admissions" class="block bg-primary-500 text-white text-center px-6 py-3 rounded-lg font-bold">
                    Apply Now <i class="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>
    </nav>
`;

const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
<!-- Footer -->
    <footer class="bg-gray-900 text-gray-300 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-4 gap-8 mb-8">
                <div>
                    <div class="flex items-center space-x-3 mb-4">
                        <img src="/static/images/SNS%20Physio.jpg" alt="SNS College of Physiotherapy Logo"
                            class="h-12 w-auto bg-white rounded p-1">
                        <div>
                            <h3 class="text-white font-bold">SNS College of Physiotherapy</h3>
                            <p class="text-xs">Excellence in Care</p>
                        </div>
                    </div>
                    <p class="text-sm leading-relaxed">
                        Affiliation: M.G.R Medical University<br>
                        Established: 2020<br>
                        Coimbatore, Tamil Nadu
                    </p>
                </div>

                <div>
                    <h4 class="text-white font-bold mb-4">Quick Links</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="/" class="hover:text-white transition">Home</a></li>
                        <li><a href="/about" class="hover:text-white transition">About Us</a></li>
                        <li><a href="/facilities" class="hover:text-white transition">Facilities</a></li>
                        <li><a href="/gallery" class="hover:text-white transition">Gallery</a></li>
                        <li><a href="/sports-clubs" class="hover:text-white transition">Sports & Clubs</a></li>
                        <li><a href="/events" class="hover:text-white transition">Events & Celebrations</a></li>
                        <li><a href="/success-stories" class="hover:text-white transition">Success Stories</a></li>
                        <li><a href="/transport" class="hover:text-white transition">Transport</a></li>
                        <li><a href="/innovation" class="hover:text-white transition">Innovation Hub</a></li>
                        <li><a href="/brochure" class="hover:text-white transition">Download Brochure</a></li>
                        <li><a href="/admissions" class="hover:text-white transition">Admissions</a></li>
                        <li><a href="/contact" class="hover:text-white transition">Contact</a></li>
                        <li><a href="/mandatory-disclosure" class="hover:text-white transition">Mandatory Disclosure</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-white font-bold mb-4">Programs</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="/academics/bpt/index.html" class="hover:text-white transition">B.P.T</a></li>
                        <li><a href="/academics/mpt/index.html" class="hover:text-white transition">M.P.T</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-white font-bold mb-4">Connect</h4>
                    <ul class="space-y-2 text-sm mb-4">
                        <li><i class="fas fa-map-marker-alt mr-2"></i>SNS Kalvi Nagar, Sathy Main Road<br />(Opp. CRI Pumps), Kurumbapalayam (Po),<br />Coimbatore – 641 107.</li>
                        <li><a href="tel:+919003655855" class="hover:text-white transition"><i
                                    class="fas fa-phone mr-2"></i>Admission: +91 90036 55855</a></li>
                        <li><a href="tel:09840246474" class="hover:text-white transition"><i
                                    class="fas fa-phone mr-2"></i>General: 09840246474</a></li>
                        <li><a href="mailto:snsphysio@gmail.com" class="hover:text-white transition"><i
                                    class="fas fa-envelope mr-2"></i>snsphysio@gmail.com</a></li>
                    </ul>
                    <div class="flex space-x-3">
                        <a href="https://www.facebook.com/snsinstitutions" target="_blank"
                            class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/snsinstitutions" target="_blank"
                            class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/@snsinstitutions" target="_blank"
                            class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <a href="https://www.linkedin.com/school/snsinstitutions/" target="_blank"
                            class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-800 pt-8 text-center text-sm">
                <p>&copy; 2026 SNS College of Physiotherapy. All rights reserved.</p>
                <p class="mt-2 text-primary-400 font-semibold">Caring for Your Health | We are Physical Therapists</p>
                <p class="mt-1 text-xs">SNS Core Value: Sincerity, Nobility, Service</p>
                <p class="mt-3 text-primary-400 font-bold"><i class="fas fa-headset mr-2"></i>Helpline: 95644 23456</p>
            </div>
        </div>
    </footer>

    <!-- JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
    
    <!-- Instagram Floating Icon -->
    <a href="https://www.instagram.com/snsinstitutions/" class="instagram-float" target="_blank" rel="noopener noreferrer"
        title="Follow us on Instagram">
        <i class="fab fa-instagram"></i>
    </a>
    <!-- WhatsApp Floating Icon -->
    <a href="https://wa.me/919629937861" class="whatsapp-float" target="_blank" rel="noopener noreferrer"
        title="Chat with us on WhatsApp">
        <i class="fab fa-whatsapp"></i>
    </a>
`;

class AppHeader extends HTMLElement {
    connectedCallback() {
        this.appendChild(headerTemplate.content.cloneNode(true));
        this.setupMobileMenu();
        this.setActiveLink();
    }

    setupMobileMenu() {
        const mobileMenuBtn = this.querySelector('#mobile-menu-btn');
        const mobileMenu = this.querySelector('#mobile-menu');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Close mobile menu when clicking a link
        this.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenu) mobileMenu.classList.add('hidden');
            });
        });
    }

    setActiveLink() {
        const path = window.location.pathname;
        const links = this.querySelectorAll('.hidden.md\\:flex a'); // Only highlight desktop links for now to keep it clean
        let currentLink = null;

        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href !== '/' && path.includes(href)) {
                if (!currentLink || href.length > currentLink.getAttribute('href').length) {
                    currentLink = link;
                }
            }
        });

        if (path === '/' || path === '/index.html') {
            const homeLinks = Array.from(links).filter(link => link.getAttribute('href') === '/');
            homeLinks.forEach(link => {
                link.classList.add('text-primary-600', 'font-bold');
                link.classList.remove('text-gray-700');
            });
        } else if (currentLink) {
            currentLink.classList.add('text-primary-600', 'font-bold');
            currentLink.classList.remove('text-gray-700');

            // Highlight parent dropdown button
            const dropdown = currentLink.closest('.relative.group');
            if (dropdown) {
                const btn = dropdown.querySelector('button');
                if (btn) {
                    btn.classList.add('text-primary-600', 'font-bold');
                    btn.classList.remove('text-gray-700');
                }
            }
        }
    }
}
customElements.define('app-header', AppHeader);

const mobileNavTemplate = document.createElement('template');
mobileNavTemplate.innerHTML = `
    <style>
        .mobile-nav-container {
            display: none;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background: white;
            box-shadow: 0 -10px 25px rgba(0, 0, 0, 0.1);
            border-radius: 25px 25px 0 0;
            z-index: 9999;
            padding: 12px 10px calc(12px + env(safe-area-inset-bottom));
            flex-direction: row;
            justify-content: space-around;
            align-items: flex-end;
        }

        @media (max-width: 768px) {
            .mobile-nav-container {
                display: flex;
            }
            body {
                padding-bottom: 90px !important; /* Extra space for the bottom nav */
            }
            /* Adjust floating icons to be above the navbar */
            .whatsapp-float { 
                bottom: 100px !important; 
                right: 20px !important;
                width: 50px !important;
                height: 50px !important;
                font-size: 24px !important;
            }
            .instagram-float { 
                bottom: 160px !important; 
                right: 20px !important;
                width: 50px !important;
                height: 50px !important;
                font-size: 24px !important;
            }
        }

        .nav-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-decoration: none;
            color: #9ca3af;
            font-size: 11px;
            font-weight: 600;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            flex: 1;
            padding-bottom: 4px;
        }

        .nav-item i {
            font-size: 20px;
            margin-bottom: 5px;
        }

        .nav-item.active {
            color: #9298CB;
        }

        .nav-item.featured {
            position: relative;
            margin-top: -35px;
        }

        .featured-icon-wrapper {
            width: 64px;
            height: 64px;
            background: #9298CB;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 20px rgba(146, 152, 203, 0.4);
            border: 5px solid white;
            margin-bottom: 4px !important;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .nav-item.featured:hover .featured-icon-wrapper {
            transform: translateY(-5px) scale(1.05);
        }

        .nav-item.featured.active .featured-icon-wrapper {
            background: #eab308; /* Yellow/Gold for active programs */
            box-shadow: 0 8px 20px rgba(234, 179, 8, 0.4);
        }

        .nav-item.featured i {
            font-size: 24px;
            margin-bottom: 0;
        }
    </style>
    <div class="mobile-nav-container">
        <a href="/" class="nav-item" data-page="home">
            <i class="fas fa-home"></i>
            <span>Home</span>
        </a>
        <a href="https://iipc.snsgroups.com/" target="_blank" class="nav-item">
            <i class="fas fa-chart-line"></i>
            <span>Placements</span>
        </a>
        <a href="/academics/bpt/index.html" class="nav-item featured" data-page="programs">
            <div class="featured-icon-wrapper">
                <i class="fas fa-graduation-cap"></i>
            </div>
            <span>Programs</span>
        </a>
        <a href="/about/index.html" class="nav-item" data-page="about">
            <i class="fas fa-info-circle"></i>
            <span>About Us</span>
        </a>
        <a href="/admissions/index.html" class="nav-item" data-page="apply">
            <i class="fas fa-pen-to-square"></i>
            <span>Apply</span>
        </a>
    </div>
`;

class AppMobileNav extends HTMLElement {
    connectedCallback() {
        this.appendChild(mobileNavTemplate.content.cloneNode(true));
        this.setActiveItem();
    }

    setActiveItem() {
        const path = window.location.pathname;
        const items = this.querySelectorAll('.nav-item');

        items.forEach(item => {
            const href = item.getAttribute('href');
            if (href === '/' && (path === '/' || path === '/index.html')) {
                item.classList.add('active');
            } else if (href && href !== '/' && path.includes(href)) {
                item.classList.add('active');
            }
        });
    }
}
customElements.define('app-mobile-nav', AppMobileNav);

class AppFooter extends HTMLElement {
    connectedCallback() {
        this.appendChild(footerTemplate.content.cloneNode(true));
        this.appendChild(document.createElement('app-mobile-nav'));
    }
}
customElements.define('app-footer', AppFooter);
