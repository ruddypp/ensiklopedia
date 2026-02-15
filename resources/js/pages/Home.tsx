import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Star, Heart, Shield, Users, Search } from 'lucide-react';
import api from '../services/api';

const Home = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get('/products');
                const data = response.data.data || response.data;
                setProducts(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const scrollToContent = () => {
        document.getElementById('daftar-isi')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="space-y-20 pb-12 relative overflow-hidden">

            {/* ================= HERO ================= */}
            <div className="hero min-h-[85vh] bg-base-100 relative overflow-hidden flex items-start pt-4">

                <div className="hero-content flex-col lg:flex-row-reverse gap-12 items-center w-full max-w-7xl px-6">

                    <div className="flex-1 flex justify-center lg:justify-end -mt-20 relative">
                        <img
                            src="/images/hero_illustration.png"
                            className="max-w-[450px] w-full drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                            alt="Etnosains"
                        />
                    </div>

                    <div className="flex-1 text-center lg:text-left relative">

                        <h1 className="text-6xl md:text-7xl font-black text-primary mb-6 leading-none">
                            Etnosains<br />
                            Madura
                        </h1>

                        <p className="text-lg text-base-content/70 mb-8 max-w-lg mx-auto lg:mx-0">
                            Jelajahi kekayaan budaya Madura melalui kacamata sains modern.
                        </p>

                        <div className="flex gap-4 justify-center lg:justify-start">
                            <button
                                onClick={scrollToContent}
                                className="btn bg-base-100 text-primary border-none shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                            >
                                Mulai Petualangan
                            </button>

                            <Link
                                to="/about"
                                className="btn btn-ghost text-primary hover:scale-105 transition-transform"
                            >
                                Tentang Kami
                            </Link>
                        </div>
                    </div>
                </div>

                {/* HERO CHARACTER */}
                <motion.img
                    src="/images/characters/anak.png"
                    className="absolute right-6 bottom-6 w-28 opacity-90 hidden lg:block pointer-events-none"
                    animate={{ y: [0, -12, 0], rotate: [0, 2, -2, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>


            {/* ================= STATS ================= */}
            <section className="container mx-auto px-4 relative">

                {/* Character Left */}
                <motion.img
                    src="/images/characters/anak2.png"
                    className="absolute -left-10 top-10 w-24 opacity-70 hidden xl:block pointer-events-none"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Character Right */}
                <motion.img
                    src="/images/characters/anak3.png"
                    className="absolute -right-10 bottom-0 w-20 opacity-60 hidden xl:block pointer-events-none"
                    animate={{ y: [0, -8, 0], rotate: [0, -1.5, 1.5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />

                <div className="stats stats-vertical lg:stats-horizontal shadow-xl bg-base-100 w-full relative z-10">
                    <div className="stat place-items-center">
                        <div className="stat-title text-primary uppercase font-bold">Judul</div>
                        <div className="stat-value text-2xl">E-Ensiklopedia</div>
                        <div className="stat-desc">Berbasis Kearifan Lokal</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title text-primary uppercase font-bold">Fokus</div>
                        <div className="stat-value text-2xl">IPAS SD</div>
                        <div className="stat-desc">Fase B & C</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title text-primary uppercase font-bold">Tujuan</div>
                        <div className="stat-value text-2xl">Literasi Sains</div>
                        <div className="stat-desc">Mengenal Budaya</div>
                    </div>
                </div>
            </section>


            {/* ================= FEATURES ================= */}
            <section className="container mx-auto px-4 relative">

                {/* Floating Bapak */}
                <motion.img
                    src="/images/characters/bapak.png"
                    className="absolute left-0 bottom-0 w-28 opacity-70 hidden xl:block pointer-events-none"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Floating Anak 4 */}
                <motion.img
                    src="/images/characters/anak4.png"
                    className="absolute right-0 top-10 w-20 opacity-60 hidden xl:block pointer-events-none"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />

                <h2 className="text-3xl font-bold text-center mb-10 text-primary">
                    Kenapa E-Ensiklopedia Ini Keren?
                </h2>

                <div className="grid md:grid-cols-3 gap-6 relative z-10">

                    <div className="card bg-base-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                        <div className="card-body text-center">
                            <div className="mx-auto bg-primary/10 p-3 rounded-full text-primary w-fit mb-2">
                                <Heart className="w-6 h-6" />
                            </div>
                            <h3 className="card-title justify-center">Berbasis Budaya</h3>
                            <p>Belajar sains dari tradisi lokal.</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                        <div className="card-body text-center">
                            <div className="mx-auto bg-primary/10 p-3 rounded-full text-primary w-fit mb-2">
                                <Search className="w-6 h-6" />
                            </div>
                            <h3 className="card-title justify-center">Kontekstual</h3>
                            <p>Materi IPAS dikaitkan langsung.</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                        <div className="card-body text-center">
                            <div className="mx-auto bg-primary/10 p-3 rounded-full text-primary w-fit mb-2">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="card-title justify-center">Interaktif</h3>
                            <p>Dilengkapi video dan gambar.</p>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Home;
