import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Users } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-[#1e3a8a] pb-20 relative overflow-hidden">

            {/* Header Section - Left Aligned Hero */}
            <div className="hero pt-20 pb-24 mb-10 relative overflow-hidden">
                <div className="hero-content flex-col lg:flex-row justify-between w-full px-6 lg:px-20 gap-12 relative z-10">

                    {/* LEFT CONTENT */}
                    <div className="max-w-3xl text-left">
                        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight text-[#1e3a8a] drop-shadow-sm">
                            Ensiklopedia <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                Etnosains Madura
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-blue-800/80 leading-relaxed max-w-2xl font-medium">
                            Media pembelajaran interaktif berbasis budaya lokal untuk mendukung
                            pemahaman sains siswa sekolah dasar secara kontekstual dan menyenangkan.
                        </p>
                    </div>

                    {/* RIGHT HERO VISUAL */}
                    <div className="relative flex justify-center lg:justify-end w-full lg:w-auto">
                        <div className="absolute w-72 h-72 bg-yellow-200/50 rounded-full blur-3xl animate-pulse"></div>

                        {/* Playful Image Frame */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <div className="absolute -inset-3 border-[6px] border-yellow-400 rounded-[3rem] -rotate-3"></div>
                            <div className="w-full h-full rounded-[2.5rem] overflow-hidden rotate-3 shadow-xl border-4 border-white">
                                <img
                                    src="/images/characters/teacher-karakter.png"
                                    alt="Teacher Karakter"
                                    className="w-full h-full object-cover scale-110"
                                    style={{ transformOrigin: 'top center' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Bottom Wave */}
                <div className="absolute bottom-0 left-0 w-full leading-none text-orange-50/50">
                    <svg className="w-full h-16 md:h-24" preserveAspectRatio="none" viewBox="0 0 1440 320">
                        <path fill="#fff7ed" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </div>

            {/* Goals Section */}
            <div className="container mx-auto px-6 max-w-6xl relative -mt-10 z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1: Blue */}
                    <div className="card bg-blue-100 rounded-[2.5rem] border-4 border-blue-200
                        shadow-lg hover:shadow-xl hover:shadow-blue-200/50
                        transition-all duration-300 
                        hover:-translate-y-2 group overflow-hidden relative">
                        {/* Decorative Circle */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-200 rounded-full opacity-50"></div>

                        <div className="card-body items-center text-center p-8 relative z-10">
                            <div className="w-20 h-20 bg-white text-blue-500 rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <BookOpen className="w-10 h-10" />
                            </div>
                            <h3 className="card-title text-2xl font-black text-[#1e3a8a]">Budaya & Sains</h3>
                            <p className="text-blue-800 font-medium">
                                Mengintegrasikan pengetahuan asli masyarakat Madura ke dalam konsep ilmiah.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Yellow */}
                    <div className="card bg-yellow-100 rounded-[2.5rem] border-4 border-yellow-200
                        shadow-lg hover:shadow-xl hover:shadow-yellow-200/50
                        transition-all duration-300 
                        hover:-translate-y-2 group mt-0 md:-mt-8 overflow-hidden relative">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-200 rounded-full opacity-50"></div>

                        <div className="card-body items-center text-center p-8 relative z-10">
                            <div className="w-20 h-20 bg-white text-yellow-500 rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Users className="w-10 h-10" />
                            </div>
                            <h3 className="card-title text-2xl font-black text-yellow-800">Karakter Siswa</h3>
                            <p className="text-yellow-900 font-medium">
                                Menanamkan nilai-nilai luhur budaya Madura seperti kerja keras dan rasa syukur.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Orange */}
                    <div className="card bg-orange-100 rounded-[2.5rem] border-4 border-orange-200
                        shadow-lg hover:shadow-xl hover:shadow-orange-200/50
                        transition-all duration-300 
                        hover:-translate-y-2 group overflow-hidden relative">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-200 rounded-full opacity-50"></div>

                        <div className="card-body items-center text-center p-8 relative z-10">
                            <div className="w-20 h-20 bg-white text-orange-500 rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <GraduationCap className="w-10 h-10" />
                            </div>
                            <h3 className="card-title text-2xl font-black text-orange-800">Pembelajaran 21</h3>
                            <p className="text-orange-900 font-medium">
                                Meningkatkan berpikir kritis melalui kegiatan inkuiri dan pengamatan.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
