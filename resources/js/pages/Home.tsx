import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Star, Heart, Shield, Users, Search, Leaf, Map, Book } from 'lucide-react';
import { GlossarySection } from '../components/GlossarySection';
import { HeroCarousel } from '../components/HeroCarousel';
import api from '../services/api';

const Home = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const scrollToGlossary = () => {
        document.getElementById('glossary-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                console.log('Fetching products for Home...');
                const response = await api.get('/products?limit=4');
                console.log('Home API Response:', response);

                const data = Array.isArray(response.data.data) ? response.data.data : response.data;
                console.log('Home Products Data:', data);

                if (Array.isArray(data)) {
                    setProducts(data);
                } else {
                    console.error('Fetched data is not an array:', data);
                }
            } catch (error) {
                console.error('Failed to fetch products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const getCardColor = (index: number) => {
        const colors = ['green', 'orange', 'blue', 'yellow'];
        return colors[index % colors.length];
    };

    return (
        <div className="min-h-screen bg-[#fffcf5] font-sans pb-20 relative overflow-x-hidden">

            {/* Background Texture/Pattern overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            {/* ================= HERO SECTION ================= */}
            <div className="relative pt-12 pb-16 z-10">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">

                    {/* Left Text */}
                    <div className="text-center md:text-left space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1e3a8a] leading-tight tracking-tight drop-shadow-sm">
                            Belajar Sains & Budaya <br />
                            <span className="text-gray-700">Menjadi Menyenangkan!</span>
                        </h1>
                        <p className="text-lg text-gray-600 font-medium max-w-md mx-auto md:mx-0">
                            Temukan keajaiban alam dan kekayaan tradisi lokal dalam satu genggaman.
                        </p>
                    </div>

                    {/* Right Illustration (Boy & Girl) -> Hero Carousel */}
                    <div className="relative flex justify-center md:justify-end">
                        <HeroCarousel
                            images={[
                                '/images/hero1.png',
                                '/images/hero2.png',
                                '/images/hero3.png',
                                '/images/hero4.png'
                            ]}
                        />
                    </div>
                </div>
            </div>

            {/* ================= 3 ACTION BUTTONS ================= */}
            <div className="container mx-auto px-6 relative z-10 mt-8 mb-16">
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

                    {/* Button 1: Sains Alam (Orange) */}
                    <Link to="/products?category=sains" className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300">
                        <div className="p-6 flex items-center gap-6 text-white">
                            <div className="w-24 h-24 flex items-center justify-center shrink-0">
                                <img src="/images/asset1.png" alt="Sains Alam" className="w-full h-full object-contain drop-shadow-md" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-2xl font-bold">Sains Alam</h3>
                                <p className="text-orange-100 text-sm font-medium opacity-90">Eksplorasi Alam Semesta</p>
                            </div>
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
                    </Link>

                    {/* Button 2: Budaya Lokal (Yellow) */}
                    <Link to="/products?category=budaya" className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-lg hover:shadow-yellow-500/40 hover:-translate-y-1 transition-all duration-300">
                        <div className="p-6 flex items-center gap-6 text-white">
                            <div className="w-24 h-24 flex items-center justify-center shrink-0">
                                <img src="/images/asset2.png" alt="Budaya Lokal" className="w-full h-full object-contain drop-shadow-md" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-2xl font-bold">Budaya Lokal</h3>
                                <p className="text-yellow-100 text-sm font-medium opacity-90">Warisan Nusantara</p>
                            </div>
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
                    </Link>

                    {/* Button 3: E-Ensiklopedia (Blue) - Scrolls to Glossary */}
                    <Link to="/products?category=ensiklopedia" className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300">
                        <div className="p-6 flex items-center gap-6 text-white">
                            <div className="w-24 h-24 flex items-center justify-center shrink-0">
                                <img src="/images/asset3.png" alt="E-Ensiklopedia" className="w-full h-full object-contain drop-shadow-md" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-2xl font-bold">Ensiklopedia</h3>
                                <p className="text-blue-100 text-sm font-medium opacity-90">Kamus Pengetahuan</p>
                            </div>
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
                    </Link>
                </div>
            </div>

            {/* ================= TOPIK TERBARU ================= */}
            <section className="container mx-auto px-6 mb-20">
                <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100 relative overflow-hidden min-h-[400px]">

                    {/* Section Header */}
                    <div className="flex justify-between items-center mb-8 px-2">
                        <h2 className="text-2xl font-black text-[#1e3a8a]">Topik Terbaru</h2>
                        <div className="flex gap-2">
                            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                            <span className="w-3 h-3 rounded-full bg-blue-400"></span>
                            <span className="w-3 h-3 rounded-full bg-orange-400"></span>
                        </div>
                    </div>

                    {/* Cards Grid/Slider */}
                    {loading ? (
                        <div className="flex justify-center py-20">
                            <span className="loading loading-spinner text-primary loading-lg"></span>
                        </div>
                    ) : products.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            {products.map((product, index) => {
                                const cardColor = getCardColor(index);
                                return (
                                    <Link to={`/products/${product.slug}`} key={product.id} className="group bg-neutral-50 rounded-3xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all hover:border-blue-200 flex flex-col h-full">
                                        <div className="h-48 bg-gray-200 relative overflow-hidden shrink-0">
                                            {product.cover_image ? (
                                                <img
                                                    src={product.cover_image.startsWith('images/') ? `/${product.cover_image}` : `/storage/${product.cover_image}`}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x300/e2e8f0/1e293b?text=' + product.name }}
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                                                    <span>No Image</span>
                                                </div>
                                            )}
                                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-gray-700 shadow-sm">
                                                {product.category || 'Materi'}
                                            </div>
                                        </div>
                                        <div className="p-5 flex flex-col flex-1">
                                            <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-1">{product.name}</h3>

                                            <p className="text-gray-500 text-sm line-clamp-2 mb-4 leading-relaxed">
                                                {product.description || 'Pelajari materi ini lebih lanjut dengan penjelasan yang interaktif.'}
                                            </p>

                                            {/* Dashed Lines Decorative */}
                                            <div className="space-y-2 mb-4 opacity-30 mt-auto">
                                                <div className="h-1 w-full border-b border-dashed border-gray-400"></div>
                                                <div className="h-1 w-2/3 border-b border-dashed border-gray-400"></div>
                                            </div>

                                            <button className={`w-full py-2.5 rounded-xl text-white font-bold text-sm shadow-md transition-transform active:scale-95
                                                ${cardColor === 'green' ? 'bg-[#5CB85C] hover:bg-green-600' :
                                                    cardColor === 'orange' ? 'bg-[#D9534F] hover:bg-red-600' :
                                                        cardColor === 'blue' ? 'bg-[#428BC1] hover:bg-blue-600' : 'bg-yellow-500 hover:bg-yellow-600'
                                                }
                                            `}>
                                                Baca
                                            </button>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="flex justify-center items-center h-48 text-gray-400 italic">
                            Belum ada topik terbaru yang tersedia.
                        </div>
                    )}
                </div>
            </section>

            {/* ================= GLOSSARY SECTION ================= */}
            <section id="glossary-section" className="px-6 mb-12">
                <GlossarySection />
            </section>

        </div>
    );
};

export default Home;
