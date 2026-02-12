import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Star, Heart, Shield, Users, Search } from 'lucide-react'; // Added icons
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
            {/* 1. Sampul Depan (Hero Section) - Clean Modern Look */}
            <div className="hero min-h-[600px] bg-base-100 relative overflow-hidden">
                <div className="hero-content flex-col lg:flex-row-reverse gap-12 items-center z-10 w-full max-w-7xl px-4 md:px-8">
                    {/* Illustration */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <img
                            src="/images/hero_illustration.png"
                            className="max-w-md w-full drop-shadow-2xl animate-fade-in-up"
                            alt="Etnousains Madura Illustration"
                        />
                    </div>

                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 text-primary leading-tight tracking-tight">
                            E-Ensiklopedia <br />
                            <span className="text-primary">
                                Etnosains Madura
                            </span>
                        </h1>
                        <p className="py-6 text-xl text-base-content/70 leading-relaxed max-w-lg mx-auto lg:mx-0">
                            Jelajahi kekayaan budaya Madura melalui kacamata sains modern. Temukan keajaiban di balik Batik, Rengginang, dan tradisi lokal lainnya.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button onClick={scrollToContent} className="btn btn-primary btn-lg rounded-full shadow-primary/30 shadow-lg gap-3 px-8 hover:scale-105 transition-transform">
                                Mulai Petualangan <ArrowRight className="w-5 h-5" />
                            </button>
                            <Link to="/about" className="btn btn-ghost btn-lg rounded-full gap-2 px-8">
                                Tentang Kami
                            </Link>
                        </div>
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
                <div className="card bg-accent text-accent-content shadow-xl">
                    <div className="card-body items-center text-center">
                        <div className="p-4 bg-white/20 rounded-full mb-2">
                            <Star className="w-8 h-8" />
                        </div>
                        <h2 className="card-title text-2xl">Tujuan Kami</h2>
                        <p className="text-lg">Menyediakan sumber belajar yang menyenangkan untuk memahami sains di balik budaya Madura sehari-hari.</p>
                    </div>
                </div>

                {/* Target */}
                <div className="card bg-secondary text-secondary-content shadow-xl">
                    <div className="card-body items-center text-center">
                        <div className="p-4 bg-white/20 rounded-full mb-2">
                            <Users className="w-8 h-8" />
                        </div>
                        <h2 className="card-title text-2xl">Untuk Siapa?</h2>
                        <ul className="text-left text-lg space-y-2 list-disc pl-5">
                            <li>Peserta didik SD/MI (Fase B & C)</li>
                            <li>Guru sebagai referensi ajar</li>
                            <li>Orang tua pendamping belajar</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 5. Keunggulan (Features Grid) */}
            <section className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10 text-primary">Kenapa E-Ensiklopedia Ini Keren?</h2>
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
                            <div className="mx-auto bg-secondary/20 p-3 rounded-full text-secondary-content w-fit mb-2">
                                <Search className="w-6 h-6" />
                            </div>
                            <h3 className="card-title justify-center">Konsep Kontekstual</h3>
                            <p>Materi IPAS dikaitkan langsung dengan kehidupan nyata.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all">
                        <div className="card-body text-center">
                            <div className="mx-auto bg-accent/20 p-3 rounded-full text-accent-content w-fit mb-2">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="card-title justify-center">Interaktif</h3>
                            <p>Dilengkapi video dan gambar menarik untuk belajar.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Petunjuk Penggunaan - DaisyUI Steps (Vertical on mobile, horizontal on desktop) */}
            <section className="bg-base-200/50 py-12 rounded-3xl mx-4">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8 text-primary">Cara Menggunakan</h2>
                    <ul className="steps steps-vertical lg:steps-horizontal w-full">
                        <li className="step step-primary" data-content="1">Pilih Topik Budaya</li>
                        <li className="step step-primary" data-content="2">Baca Informasi</li>
                        <li className="step step-primary" data-content="3">Tonton Video</li>
                        <li className="step step-primary" data-content="4">Pahami Konsep Sains</li>
                    </ul>
                </div>
            </section>

            {/* 7. Pengenalan Etnosains (Simple Card) */}
            <section className="container mx-auto px-4">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure className="lg:w-1/3 bg-primary/5 p-8 flex items-center justify-center">
                        <BookOpen className="w-32 h-32 text-primary/40" />
                    </figure>
                    <div className="card-body lg:w-2/3">
                        <h2 className="card-title text-3xl mb-4 text-primary">Apa itu Etnosains?</h2>
                        <p className="text-lg leading-relaxed">
                            Etnosains adalah pengetahuan asli suatu masyarakat yang diperoleh dari leluhur secara turun-temurun.
                            Dalam buku ini, kita akan menggali sains (IPA) yang tersembunyi di dalam budaya Madura seperti pembuatan Batik, Rengginang, dan lainnya!
                        </p>
                    </div>
                </div>
            </section>

            {/* 8. Daftar Isi (Product Grid) - DaisyUI Cards */}
            <section id="daftar-isi" className="container mx-auto px-4 pb-12">
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
