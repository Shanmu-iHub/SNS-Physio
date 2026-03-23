export const MobileBottomNav = (activeTab: string = 'home') => {
    const tabs = [
        { id: 'home', label: 'Home', icon: 'fa-home', href: '/' },
        { id: 'placements', label: 'Placements', icon: 'fa-chart-line', href: 'https://iipc.snsgroups.com/' },
        { id: 'programs', label: 'Programs', icon: 'fa-graduation-cap', href: '/academics/bpt/index.html' },
        { id: 'about', label: 'About Us', icon: 'fa-info-circle', href: '/about/index.html' },
        { id: 'apply', label: 'Apply', icon: 'fa-pen-to-square', href: '/admissions/index.html' }
    ];

    return `
    <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50 px-2 pb-safe">
        <div class="max-w-[480px] mx-auto flex justify-between items-center h-16">
            ${tabs.map(tab => `
                <a href="${tab.href}" class="flex flex-col items-center justify-center flex-1 min-w-0 transition-all duration-300 ${activeTab === tab.id ? 'text-yellow-500' : 'text-gray-400'}">
                    <div class="relative flex items-center justify-center w-8 h-8 rounded-xl ${activeTab === tab.id ? 'bg-yellow-50' : ''} mb-1">
                        <i class="fas ${tab.icon} ${activeTab === tab.id ? 'text-lg' : 'text-base'}"></i>
                    </div>
                    <span class="text-[10px] font-medium truncate w-full text-center">${tab.label}</span>
                </a>
            `).join('')}
        </div>
    </nav>
    <div class="h-16"></div> <!-- Spacer for fixed bottom nav -->
    `;
};
