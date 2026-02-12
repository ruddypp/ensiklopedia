import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, User, GraduationCap, Users, ArrowRight } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen bg-base-100 font-sans text-base-content pb-12 relative overflow-hidden">
            {/* Header Section - Modern Clean */}
            <div className="hero bg-base-100 py-16 mb-12 relative overflow-hidden">
                {/* No Background Blobs */}
                <div className="hero-content text-center">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="mb-4 inline-block relative"
                        >
                            <img src="/images/characters/kelinci.png" alt="Rabbit Mascot" className="w-24 mx-auto drop-shadow-md" />
                            {/* Owl Mascot - Partner */}
                            <img src="/images/characters/owl.png" alt="Owl Mascot" className="w-16 absolute -right-12 bottom-0 drop-shadow-md" />
                        </motion.div>
                        <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">Tentang Aplikasi</span>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-base-content tracking-tight">
                            E-Ensiklopedia <br /><span className="text-primary">Etnosains Madura</span>
                        </h1>
                        <p className="text-xl text-base-content/70 leading-relaxed max-w-lg mx-auto">
                            Media pembelajaran interaktif berbasis budaya lokal untuk mendukung pemahaman sains siswa sekolah dasar secara kontekstual dan menyenangkan.
                        </p>
                    </div>
                </div>
            </div>

            {/* Developer Identity Card - DaisyUI Card with Side Layout */}
            <div className="container mx-auto px-4 max-w-4xl mb-16 relative">
                {/* Squirrel (Tupai) Mascot - Peeking Side */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="absolute -left-12 top-1/2 hidden xl:block z-20 pointer-events-none"
                >
                    <img src="/images/characters/tupai.png" alt="Squirrel Mascot" className="w-40 drop-shadow-xl rotate-12" />
                </motion.div>

                {/* Fox Mascot - Right Side */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="absolute -right-12 top-1/4 hidden xl:block z-20 pointer-events-none"
                >
                    <img src="/images/characters/fox.png" alt="Fox Mascot" className="w-36 drop-shadow-xl -rotate-12 scale-x-[-1]" />
                </motion.div>

                <div className="card lg:card-side bg-base-100 shadow-xl overflow-hidden z-10 relative">
                    <figure className="relative lg:w-1/3 bg-primary/5 p-8 flex flex-col items-center justify-center text-center">
                        <div className="avatar mb-4">
                            <div className="w-32 h-32 rounded-full shadow-lg ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                                <img
                                    src="/images/characters/teacher-karakter.png"
                                    alt="Leli Lestari"
                                    className="w-full h-full object-cover scale-150"
                                    style={{ transformOrigin: '42% 20%' }}
                                />
                            </div>
                        </div>
                        <div className="badge badge-primary p-3 gap-2">
                            <GraduationCap className="w-4 h-4" /> Pengembang
                        </div>
                    </figure>
                    <div className="card-body lg:w-2/3 space-y-4">
                        <div>
                            <h2 className="card-title text-3xl font-bold text-primary">Leli Lestari</h2>
                            <p className="text-base-content/70 font-medium">Mahasiswa PGSD</p>
                        </div>
                        <p className="opacity-80">
                            Berdedikasi untuk mengembangkan inovasi pembelajaran berbasis kearifan lokal. Aplikasi ini dikembangkan sebagai bagian dari penelitian skripsi tahun 2026.
                        </p>

                        <div className="stats shadow bg-base-200/50 w-full mt-4">
                            <div className="stat place-items-center p-4">
                                <div className="stat-title text-xs font-bold uppercase tracking-wider">Target</div>
                                <div className="stat-value text-lg text-primary">Kelas V SD</div>
                            </div>
                            <div className="stat place-items-center p-4">
                                <div className="stat-title text-xs font-bold uppercase tracking-wider">Tahun</div>
                                <div className="stat-value text-lg text-secondary">2026</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Visi / Goals - DaisyUI Cards Grid */}
            <div className="container mx-auto px-4 max-w-5xl relative">
                {/* Turtle (Penyu) Mascot - Supporting */}
                <motion.div
                    whileInView={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-16 bottom-0 hidden xl:block z-0 pointer-events-none"
                >
                    <img src="/images/characters/penyu.png" alt="Turtle Mascot" className="w-48 drop-shadow-xl opacity-80" />
                </motion.div>

                {/* Bear Mascot - Supporting Left */}
                <motion.div
                    whileInView={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -left-16 top-0 hidden xl:block z-0 pointer-events-none"
                >
                    <img src="/images/characters/bear.png" alt="Bear Mascot" className="w-48 drop-shadow-xl opacity-80" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                        <div className="card-body items-center text-center">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-2">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <h3 className="card-title text-lg">Budaya & Sains</h3>
                            <p className="text-sm opacity-80">
                                Mengintegrasikan pengetahuan asli masyarakat Madura ke dalam konsep ilmiah.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                        <div className="card-body items-center text-center">
                            <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-xl flex items-center justify-center mb-2">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="card-title text-lg">Karakter Siswa</h3>
                            <p className="text-sm opacity-80">
                                Menanamkan nilai-nilai luhur budaya Madura seperti kerja keras dan rasa syukur.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                        <div className="card-body items-center text-center">
                            <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-2">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <h3 className="card-title text-lg">Pembelajaran 21</h3>
                            <p className="text-sm opacity-80">
                                Meningkatkan berpikir kritis melalui kegiatan inkuiri dan pengamatan.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16">
                    <Link to="/products" className="btn btn-primary rounded-full px-8 shadow-lg gap-2">
                        Lihat Materi Pembelajaran <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
