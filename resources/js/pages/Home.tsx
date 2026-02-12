import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Star, Heart, Shield, Users, Search, PlayCircle, Lightbulb } from 'lucide-react'; // Added icons
import api from '../services/api';

const Home = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get('/products');
                // Handle different potential API response structures
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
        <div className="space-y-16 animate-fade-in-up pb-12">

            {/* 1. Sampul Depan (Hero Section) - DaisyUI Hero */}
            {/* 1. Sampul Depan (Hero Section) - Clean Modern Look - Compact "Above Fold" */}
            <div className="hero min-h-[85vh] bg-base-100 relative overflow-hidden flex items-start pt-2 lg:pt-4">
                <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center z-10 w-full max-w-7xl px-4 md:px-8">
                    {/* Illustration - Popped Up & Bigger */}
                    <div className="flex-1 flex justify-center lg:justify-end -mt-16 lg:-mt-32 relative z-0">
                        <img
                            src="/images/hero_illustration.png"
                            className="max-w-[450px] md:max-w-lg w-full drop-shadow-2xl animate-fade-in-up hover:scale-105 transition-transform duration-500"
                            alt="Etnosains Madura Illustration"
                        />
                    </div>

                    <div className="flex-1 text-center lg:text-left z-10 -mt-8 lg:mt-0">

                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black font-heading text-primary leading-none tracking-tighter mb-6 drop-shadow-sm animate-fade-in-up delay-100">
                            Etnosains<br />
                            <span className="text-primary">Madura</span>
                        </h1>
                        <p className="text-lg md:text-xl text-base-content/70 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-in-up delay-200">
                            Jelajahi kekayaan budaya Madura melalui kacamata sains modern. Temukan keajaiban di balik Batik, Rengginang, dan tradisi lokal lainnya.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
                            <button onClick={scrollToContent} className="btn bg-white text-primary border-none hover:bg-primary/5 btn-lg rounded-full shadow-xl gap-3 px-8 hover:scale-105 transition-transform group">
                                Mulai Petualangan <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <Link to="/about" className="btn btn-ghost btn-lg rounded-full gap-2 px-8 hover:bg-primary/5 text-primary">
                                Tentang Kami
                            </Link>
                        </div>
                        {/* Rabbit (Kelinci) Mascot - Hero Bottom Right */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="absolute right-0 bottom-10 hidden lg:block z-0 pointer-events-none"
                        >
                            <img src="/images/characters/kelinci.png" alt="Rabbit Mascot" className="w-32 drop-shadow-lg" />
                        </motion.div>
                    </div>
                </div>

                {/* No Decorative Background Blobs - Clean White */}
            </div>

            {/* 2. Identitas Buku (Stats/Features) - DaisyUI Stats */}
            <section className="container mx-auto px-4">
                <div className="stats stats-vertical lg:stats-horizontal shadow-xl bg-base-100 w-full">
                    <div className="stat place-items-center">
                        <div className="stat-title text-primary uppercase font-bold tracking-wide">Judul</div>
                        <div className="stat-value text-2xl font-serif">E-Ensiklopedia Etnosains</div>
                        <div className="stat-desc">Berbasis Kearifan Lokal Madura</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title text-primary uppercase font-bold tracking-wide">Fokus</div>
                        <div className="stat-value text-2xl font-serif">IPAS SD/MI</div>
                        <div className="stat-desc">Fase B & C</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title text-primary uppercase font-bold tracking-wide">Tujuan</div>
                        <div className="stat-value text-2xl font-serif">Literasi Sains</div>
                        <div className="stat-desc">Mengenal Budaya Sendiri</div>
                    </div>
                </div>
            </section>

            {/* 3. Tujuan & 4. Target Pengguna - DaisyUI Cards Side-by-Side */}
            <section className="grid md:grid-cols-2 gap-8 container mx-auto px-4">
                {/* Tujuan */}
                <div className="card bg-white text-base-content border-none shadow-xl group hover:shadow-2xl transition-all">
                    <div className="card-body items-center text-center">
                        <div className="p-4 bg-primary/10 text-primary rounded-full mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                            <Star className="w-8 h-8" />
                        </div>
                        <h2 className="card-title text-2xl text-primary">Tujuan Kami</h2>
                        <p className="text-lg">Menyediakan sumber belajar yang menyenangkan untuk memahami sains di balik budaya Madura sehari-hari.</p>
                    </div>
                </div>

                {/* Target */}
                <div className="card bg-primary/5 text-base-content shadow-xl border-none hover:shadow-2xl transition-all">
                    <div className="card-body items-center text-center">
                        <div className="p-4 bg-white text-primary shadow-sm rounded-full mb-2">
                            <Users className="w-8 h-8" />
                        </div>
                        <h2 className="card-title text-2xl text-primary">Untuk Siapa?</h2>
                        <ul className="text-left text-lg space-y-2 list-disc pl-5">
                            <li>Peserta didik SD/MI (Fase B & C)</li>
                            <li>Guru sebagai referensi ajar</li>
                            <li>Orang tua pendamping belajar</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 5. Keunggulan (Features Grid) */}
            <section className="container mx-auto px-4 relative">
                {/* Turtle (Penyu) Mascot - Floating Left */}
                <motion.div
                    animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -left-12 top-0 hidden xl:block z-0 pointer-events-none"
                >
                    <img src="/images/characters/penyu.png" alt="Turtle Mascot" className="w-48 drop-shadow-xl" />
                </motion.div>

                {/* Bear Mascot - Floating Right */}
                <motion.div
                    animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -right-12 bottom-0 hidden xl:block z-0 pointer-events-none"
                >
                    <img src="/images/characters/bear.png" alt="Bear Mascot" className="w-56 drop-shadow-xl" />
                </motion.div>

                <h2 className="text-3xl font-bold text-center mb-10 text-primary relative z-10">Kenapa E-Ensiklopedia Ini Keren?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all">
                        <div className="card-body text-center">
                            <div className="mx-auto bg-primary/10 p-3 rounded-full text-primary w-fit mb-2">
                                <Heart className="w-6 h-6" />
                            </div>
                            <h3 className="card-title justify-center">Berbasis Budaya</h3>
                            <p>Belajar sains dari tradisi lokal yang dekat denganmu.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all">
                        <div className="card-body text-center">
                            <div className="mx-auto bg-primary/5 p-3 rounded-full text-primary w-fit mb-2">
                                <Search className="w-6 h-6" />
                            </div>
                            <h3 className="card-title justify-center">Konsep Kontekstual</h3>
                            <p>Materi IPAS dikaitkan langsung dengan kehidupan nyata.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all">
                        <div className="card-body text-center">
                            <div className="mx-auto bg-primary/5 p-3 rounded-full text-primary w-fit mb-2">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="card-title justify-center">Interaktif</h3>
                            <p>Dilengkapi video dan gambar menarik untuk belajar.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Petunjuk Penggunaan - Creative Grid */}
            <section className="py-12 mx-4">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12 text-primary">Cara Menggunakan</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Step 1 */}
                        <div className="card bg-white shadow-xl hover:-translate-y-2 transition-transform duration-300 border-none group">
                            <div className="card-body items-center text-center p-8">
                                <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                                    <Search className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-primary">1. Pilih Topik</h3>
                                <p className="text-sm text-base-content/70">Cari budaya yang ingin kamu pelajari</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="card bg-white shadow-xl hover:-translate-y-2 transition-transform duration-300 border-none group">
                            <div className="card-body items-center text-center p-8">
                                <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                                    <BookOpen className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-primary">2. Baca Informasi</h3>
                                <p className="text-sm text-base-content/70">Pelajari sejarah dan faktanya</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="card bg-white shadow-xl hover:-translate-y-2 transition-transform duration-300 border-none group">
                            <div className="card-body items-center text-center p-8">
                                <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                                    <PlayCircle className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-primary">3. Tonton Video</h3>
                                <p className="text-sm text-base-content/70">Lihat visualisasinya secara langsung</p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="card bg-white shadow-xl hover:-translate-y-2 transition-transform duration-300 border-none group">
                            <div className="card-body items-center text-center p-8">
                                <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                                    <Lightbulb className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-primary">4. Pahami Sains</h3>
                                <p className="text-sm text-base-content/70">Temukan konsep ilmiah di baliknya</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Pengenalan Etnosains (Simple Card) */}
            <section className="container mx-auto px-4">
                <div className="card lg:card-side bg-base-100 shadow-xl overflow-hidden">
                    <figure className="lg:w-1/3 bg-primary/5 p-0 flex items-center justify-center relative">
                        {/* Replaced Icon with Image */}
                        <img
                            src="/images/etosains-penjelasan.png"
                            alt="Visualisasi Etnosains"
                            className="w-full h-full object-cover min-h-[300px]"
                        />
                    </figure>
                    <div className="card-body lg:w-2/3 p-8 lg:p-12">
                        <h2 className="card-title text-3xl md:text-4xl mb-6 text-primary font-bold">Apa itu Etnosains?</h2>
                        <p className="text-lg leading-relaxed">
                            Etnosains adalah pengetahuan asli suatu masyarakat yang diperoleh dari leluhur secara turun-temurun.
                            Dalam buku ini, kita akan menggali sains (IPA) yang tersembunyi di dalam budaya Madura seperti pembuatan Batik, Rengginang, dan lainnya!
                        </p>
                    </div>
                </div>
            </section>

            {/* 8. Daftar Isi (Product Grid) - DaisyUI Cards */}
            <section id="daftar-isi" className="container mx-auto px-4 pb-12 relative">
                {/* Squirrel (Tupai) Mascot - Peeking Right */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
                    className="absolute -right-4 -top-20 hidden lg:block z-10 pointer-events-none"
                >
                    <img src="/images/characters/tupai.png" alt="Squirrel Mascot" className="w-40 drop-shadow-xl rotate-[-10deg]" />
                </motion.div>

                {/* Fox Mascot - Peeking Left */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
                    className="absolute -left-4 -top-20 hidden lg:block z-10 pointer-events-none"
                >
                    <img src="/images/characters/fox.png" alt="Fox Mascot" className="w-40 drop-shadow-xl rotate-[10deg] scale-x-[-1]" />
                </motion.div>

                <div className="flex items-center gap-4 mb-10">
                    <div className="h-1 flex-1 bg-secondary rounded-full"></div>
                    <h2 className="text-4xl font-bold text-center text-primary uppercase tracking-widest">Daftar Isi</h2>
                    <div className="h-1 flex-1 bg-secondary rounded-full"></div>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="card bg-base-100 shadow-xl h-96 animate-pulse">
                                <div className="h-48 bg-base-300 rounded-t-2xl"></div>
                                <div className="card-body">
                                    <div className="h-6 bg-base-300 rounded w-3/4 mb-4"></div>
                                    <div className="h-4 bg-base-300 rounded w-full"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <Link
                                key={product.id}
                                to={`/products/${product.slug}`}
                                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 group"
                            >
                                <figure className="aspect-square relative overflow-hidden bg-base-200">
                                    {product.cover_image ? (
                                        <img
                                            src={product.cover_image.startsWith('images/') ? `/${product.cover_image}` : `/storage/${product.cover_image}`}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center w-full h-full text-base-content/30">
                                            <BookOpen className="w-16 h-16" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                                        <span className="btn btn-sm btn-primary rounded-full">Baca Sekarang</span>
                                    </div>
                                </figure>
                                <div className="card-body items-center text-center p-6">
                                    <h3 className="card-title text-xl font-bold text-primary group-hover:text-secondary transition-colors">{product.name}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Home;
