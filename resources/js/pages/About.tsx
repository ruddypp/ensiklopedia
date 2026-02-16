import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Users } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen bg-neutral-50 font-sans text-base-content pb-20 relative overflow-hidden">

            {/* Header Section - Left Aligned Hero */}
            <div className="hero bg-gradient-to-b from-blue-50 to-white pt-20 pb-24 mb-10 relative overflow-hidden">
                <div className="hero-content flex-col lg:flex-row justify-between w-full px-6 lg:px-20 gap-12 relative z-10">

                    {/* LEFT CONTENT */}
                    <div className="max-w-3xl text-left">
                        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-bold tracking-widest text-sm uppercase mb-4">
                            ✨ Tentang Aplikasi
                        </span>

                        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight text-stone-800">
                            Ensiklopedia <br />
                            <span className="text-primary transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                                Etnosains Madura
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl font-medium">
                            Media pembelajaran interaktif berbasis budaya lokal untuk mendukung
                            pemahaman sains siswa sekolah dasar secara kontekstual dan menyenangkan.
                        </p>
                    </div>

                    {/* RIGHT HERO VISUAL */}
                    <div className="relative flex justify-center lg:justify-end w-full lg:w-auto">
                        <div className="absolute w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>

                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full 
                            shadow-[0_20px_60px_rgba(0,0,0,0.15)] 
                            ring-8 ring-white overflow-hidden border-4 border-primary/20">

                            <img
                                src="/images/characters/teacher-karakter.png"
                                alt="Teacher Karakter"
                                className="w-full h-full object-cover scale-125"
                                style={{ transformOrigin: '42% 20%' }}
                            />
                        </div>
                    </div>
                </div>

                {/* Cloud Divider */}
                <div className="absolute bottom-0 left-0 w-full leading-none text-neutral-50">
                    <svg className="w-full h-16 md:h-24" preserveAspectRatio="none" viewBox="0 0 1440 320">
                        <path fill="currentColor" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </div>

            {/* Goals Section */}
            <div className="container mx-auto px-6 max-w-6xl relative -mt-10 z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="card bg-white rounded-[2rem] border-2 border-blue-50 hover:border-blue-200
                        shadow-xl hover:shadow-2xl hover:shadow-blue-500/10
                        transition-all duration-300 
                        hover:-translate-y-2 group">
                        <div className="card-body items-center text-center p-8">
                            <div className="w-16 h-16 bg-blue-100 text-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <BookOpen className="w-8 h-8" />
                            </div>
                            <h3 className="card-title text-xl font-bold text-stone-800">Budaya & Sains</h3>
                            <p className="text-stone-500 font-medium">
                                Mengintegrasikan pengetahuan asli masyarakat Madura ke dalam konsep ilmiah.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-white rounded-[2rem] border-2 border-yellow-50 hover:border-yellow-200
                        shadow-xl hover:shadow-2xl hover:shadow-yellow-500/10
                        transition-all duration-300 
                        hover:-translate-y-2 group mt-0 md:-mt-8">
                        <div className="card-body items-center text-center p-8">
                            <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="card-title text-xl font-bold text-stone-800">Karakter Siswa</h3>
                            <p className="text-stone-500 font-medium">
                                Menanamkan nilai-nilai luhur budaya Madura seperti kerja keras dan rasa syukur.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-white rounded-[2rem] border-2 border-orange-50 hover:border-orange-200
                        shadow-xl hover:shadow-2xl hover:shadow-orange-500/10
                        transition-all duration-300 
                        hover:-translate-y-2 group">
                        <div className="card-body items-center text-center p-8">
                            <div className="w-16 h-16 bg-orange-100 text-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <GraduationCap className="w-8 h-8" />
                            </div>
                            <h3 className="card-title text-xl font-bold text-stone-800">Pembelajaran 21</h3>
                            <p className="text-stone-500 font-medium">
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
