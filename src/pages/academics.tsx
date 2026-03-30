import { PageHeader } from '../components/page-header'

export const BPTPage = () => {
    return `
    ${PageHeader(
        'Bachelor of Physiotherapy (B.P.T)', 
        'A comprehensive 4.5-year undergraduate program in Physiotherapy', 
        '/static/images/hero.png',
        'B.P.T'
    )}
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">Program Overview</h2>
                    <p class="text-lg text-gray-600 leading-relaxed mb-6">
                        The Bachelor of Physiotherapy (B.P.T) is a 4.5-year full-time undergraduate program, which encompasses a mandatory 6-month clinical internship. The course provides a strong foundation in human anatomy, physiology, and physical therapy techniques.
                    </p>
                    <p class="text-lg text-gray-600 leading-relaxed">
                        Students gain comprehensive practical experience through rigorous clinical rotations, state-of-the-art laboratories, and extensive patient interaction, equipping them for successful careers in healthcare and rehabilitation.
                    </p>
                </div>
                <div class="bg-blue-50 rounded-3xl p-10">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Key Focus Areas</h3>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center mr-3 mt-0.5"><i class="fas fa-check text-blue-700 text-xs"></i></div>
                            <span class="text-gray-700">Anatomy & Physiology</span>
                        </li>
                        <li class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center mr-3 mt-0.5"><i class="fas fa-check text-blue-700 text-xs"></i></div>
                            <span class="text-gray-700">Biomechanics & Kinesiology</span>
                        </li>
                        <li class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center mr-3 mt-0.5"><i class="fas fa-check text-blue-700 text-xs"></i></div>
                            <span class="text-gray-700">Electrotherapy & Exercise Therapy</span>
                        </li>
                        <li class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center mr-3 mt-0.5"><i class="fas fa-check text-blue-700 text-xs"></i></div>
                            <span class="text-gray-700">Clinical Orthopaedics & Neurology</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
                <p class="text-xl text-gray-600">The field of Physiotherapy offers diverse and rewarding career paths</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <i class="fas fa-hospital text-4xl text-blue-600 mb-6"></i>
                    <h3 class="text-xl font-bold mb-4">Clinical Practice</h3>
                    <p class="text-gray-600 leading-relaxed">Work in major hospitals, private clinics, and rehabilitation centers, providing direct patient care.</p>
                </div>
                <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <i class="fas fa-running text-4xl text-green-600 mb-6"></i>
                    <h3 class="text-xl font-bold mb-4">Sports Physiotherapy</h3>
                    <p class="text-gray-600 leading-relaxed">Join sports teams, fitness centers, and athlete management organizations to improve performance.</p>
                </div>
                <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <i class="fas fa-graduation-cap text-4xl text-purple-600 mb-6"></i>
                    <h3 class="text-xl font-bold mb-4">Academic & Research</h3>
                    <p class="text-gray-600 leading-relaxed">Pursue teaching roles in medical colleges or engage in cutting-edge physiotherapy research.</p>
                </div>
            </div>
        </div>
    </section>
    `;
}

export const MPTPage = () => {
    return `
    ${PageHeader(
        'Master of Physiotherapy (M.P.T)', 
        'A 2-year postgraduate program specializing in advanced physiotherapy techniques', 
        '/static/images/secondary.png',
        'M.P.T'
    )}
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">Program Overview</h2>
                    <p class="text-lg text-gray-600 leading-relaxed mb-6">
                        The Master of Physiotherapy (M.P.T) is an advanced 2-year postgraduate program designed to provide specialized knowledge and clinical expertise in specific areas of physical therapy.
                    </p>
                    <p class="text-lg text-gray-600 leading-relaxed">
                        With an emphasis on evidence-based practice and advanced clinical reasoning, our M.P.T graduates are well-prepared for leadership roles in clinical, research, and academic settings.
                    </p>
                </div>
                <div class="bg-purple-50 rounded-3xl p-10">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Specializations Offered</h3>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-purple-200 flex items-center justify-center mr-3 mt-0.5"><i class="fas fa-check text-purple-700 text-xs"></i></div>
                            <span class="text-gray-700">Orthopaedics</span>
                        </li>
                        <li class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-purple-200 flex items-center justify-center mr-3 mt-0.5"><i class="fas fa-check text-purple-700 text-xs"></i></div>
                            <span class="text-gray-700">Neurology</span>
                        </li>
                        <li class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-purple-200 flex items-center justify-center mr-3 mt-0.5"><i class="fas fa-check text-purple-700 text-xs"></i></div>
                            <span class="text-gray-700">Sports & Biomechanics</span>
                        </li>
                        <li class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-purple-200 flex items-center justify-center mr-3 mt-0.5"><i class="fas fa-check text-purple-700 text-xs"></i></div>
                            <span class="text-gray-700">Cardiopulmonary Sciences</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Postgraduate Career Pathways</h2>
                <p class="text-xl text-gray-600">Specialized knowledge leads to high-level professional opportunities</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-purple-500">
                    <i class="fas fa-user-md text-4xl text-purple-600 mb-6"></i>
                    <h3 class="text-xl font-bold mb-4">Specialist Consultant</h3>
                    <p class="text-gray-600 leading-relaxed">Lead specialized departments in multi-specialty healthcare centers as an expert practitioner.</p>
                </div>
                <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-purple-500">
                    <i class="fas fa-chalkboard-teacher text-4xl text-purple-600 mb-6"></i>
                    <h3 class="text-xl font-bold mb-4">Academic Leadership</h3>
                    <p class="text-gray-600 leading-relaxed">Professorship and administrative roles in premier medical and physiotherapy institutions.</p>
                </div>
                <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-purple-500">
                    <i class="fas fa-search-plus text-4xl text-purple-600 mb-6"></i>
                    <h3 class="text-xl font-bold mb-4">Clinical Research</h3>
                    <p class="text-gray-600 leading-relaxed">Lead independent research projects and clinical trials in advanced rehabilitation sciences.</p>
                </div>
            </div>
        </div>
    </section>
    `;
}
