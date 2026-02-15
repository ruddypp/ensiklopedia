import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Users } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen bg-base-100 font-sans text-base-content pb-16 relative overflow-hidden">

            {/* Header Section - Left Aligned Hero */}
            <div className="hero bg-base-100 pt-16 pb-12 mb-10 relative overflow-hidden">
                <div className="hero-content flex-col lg:flex-row justify-between w-full px-6 lg:px-20 gap-12">

                    {/* LEFT CONTENT */}
                    <div className="max-w-3xl text-left">
                        <span className="text-primary font-bold tracking-widest text-sm uppercase mb-3 block">
                            Tentang Aplikasi
                        </span>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                            E-Ensiklopedia <br />
                            <span className="text-primary">
                                Etnosains Madura
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-base-content/70 leading-relaxed max-w-2xl">
                            Media pembelajaran interaktif berbasis budaya lokal untuk mendukung
                            pemahaman sains siswa sekolah dasar secara kontekstual dan menyenangkan.
                        </p>
                    </div>

                    {/* RIGHT HERO VISUAL */}
                    <div className="relative flex justify-center lg:justify-end w-full lg:w-auto">
                        <div className="absolute w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>

                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full 
                            shadow-[0_20px_60px_rgba(0,0,0,0.15)] 
                            ring-4 ring-base-100 overflow-hidden">

                            <img
                                src="/images/characters/teacher-karakter.png"
                                alt="Leli Lestari"
                                className="w-full h-full object-cover scale-125"
                                style={{ transformOrigin: '42% 20%' }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Developer Identity Card */}
            <div className="container mx-auto px-4 max-w-4xl mb-14 relative">
                <div className="card lg:card-side bg-base-100 
                    shadow-[0_15px_40px_rgba(0,0,0,0.08)]  
                    overflow-hidden relative">

                    <div className="card-body lg:w-2/3 space-y-4">
                        <div>
                            <h2 className="card-title text-3xl font-bold text-primary">
                                Leli Lestari
                            </h2>
                            <p className="text-base-content/70 font-medium">
                                Mahasiswa PGSD
                            </p>
                        </div>

                        <p className="opacity-80">
                            Berdedikasi untuk mengembangkan inovasi pembelajaran berbasis kearifan lokal.
                            Aplikasi ini dikembangkan sebagai bagian dari penelitian skripsi tahun 2026.
                        </p>

                        <div className="stats bg-base-200/50 w-full mt-4 rounded-xl">
                            <div className="stat place-items-center p-4">
                                <div className="stat-title text-xs font-bold uppercase tracking-wider">
                                    Target
                                </div>
                                <div className="stat-value text-lg text-primary">
                                    Kelas V SD
                                </div>
                            </div>

                            <div className="stat place-items-center p-4">
                                <div className="stat-title text-xs font-bold uppercase tracking-wider">
                                    Tahun
                                </div>
                                <div className="stat-value text-lg text-secondary">
                                    2026
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Goals Section */}
            <div className="container mx-auto px-4 max-w-5xl relative">

                <motion.div
                    whileInView={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-8 bottom-0 hidden xl:block z-0 pointer-events-none"
                >
                    <img
                        src="/images/characters/kakek.png"
                        alt="Kakek Mascot"
                        className="w-48 drop-shadow-xl opacity-80"
                    />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">

                    <div className="card bg-base-100 rounded-2xl 
                        shadow-[0_10px_30px_rgba(0,0,0,0.08)] 
                        hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] 
                        transition-all duration-300 
                        hover:-translate-y-2">
                        <div className="card-body items-center text-center">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-3">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <h3 className="card-title text-lg">Budaya & Sains</h3>
                            <p className="text-sm opacity-80">
                                Mengintegrasikan pengetahuan asli masyarakat Madura ke dalam konsep ilmiah.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 rounded-2xl 
                        shadow-[0_10px_30px_rgba(0,0,0,0.08)] 
                        hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] 
                        transition-all duration-300 
                        hover:-translate-y-2">
                        <div className="card-body items-center text-center">
                            <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-xl flex items-center justify-center mb-3">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="card-title text-lg">Karakter Siswa</h3>
                            <p className="text-sm opacity-80">
                                Menanamkan nilai-nilai luhur budaya Madura seperti kerja keras dan rasa syukur.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 rounded-2xl 
                        shadow-[0_10px_30px_rgba(0,0,0,0.08)] 
                        hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] 
                        transition-all duration-300 
                        hover:-translate-y-2">
                        <div className="card-body items-center text-center">
                            <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-3">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <h3 className="card-title text-lg">Pembelajaran 21</h3>
                            <p className="text-sm opacity-80">
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
