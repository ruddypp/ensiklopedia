import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Loader2, Search, Filter, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import api from '../services/api';
import { GlossarySection } from '@/components/GlossarySection';

const ProductList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('search') || '';
    const pageQuery = parseInt(searchParams.get('page') || '1');

    const [products, setProducts] = useState<any[]>([]);
    const [glossaries, setGlossaries] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({
        current_page: 1,
        last_page: 1,
        next_page_url: null,
        prev_page_url: null
    });
    const [searchTerm, setSearchTerm] = useState(searchQuery);

    useEffect(() => {
        setSearchTerm(searchQuery);
    }, [searchQuery]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // Fetch Products
                const productResponse = await api.get(`/products?page=${pageQuery}&search=${searchQuery}`);
                const productData = productResponse.data;

                if (productData.data) {
                    setProducts(productData.data);
                    setPagination({
                        current_page: productData.current_page,
                        last_page: productData.last_page,
                        next_page_url: productData.next_page_url,
                        prev_page_url: productData.prev_page_url
                    });
                } else {
                    setProducts(productData); // Fallback if not paginated (shouldn't happen with updated controller)
                }

                // Fetch Glossary if searching
                if (searchQuery.length >= 2) {
                    const glossaryResponse = await api.get(`/glossaries?search=${searchQuery}`);
                    setGlossaries(glossaryResponse.data);
                } else {
                    setGlossaries([]);
                }

            } catch (error) {
                console.error('Failed to fetch data:', error);
            } finally {
                setLoading(false);
            }
        };

        const timeoutId = setTimeout(() => {
            fetchData();
        }, 300); // Debounce slightly to avoid rapid calls on direct nav, though mainly for typing if we linked it

        return () => clearTimeout(timeoutId);
    }, [pageQuery, searchQuery]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm.length >= 2 || searchTerm.length === 0) {
            setSearchParams({ search: searchTerm, page: '1' });
        }
    };

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= pagination.last_page) {
            setSearchParams({ search: searchQuery, page: newPage.toString() });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Helper to rotate colors for the cards
    const getCardColor = (index: number) => {
        const colors = ['green', 'orange', 'blue', 'yellow'];
        return colors[index % colors.length];
    };

    const getButtonStyles = (color: string) => {
        switch (color) {
            case 'green': return 'bg-[#5CB85C] hover:bg-green-600';
            case 'orange': return 'bg-[#D9534F] hover:bg-red-600';
            case 'blue': return 'bg-[#428BC1] hover:bg-blue-600';
            case 'yellow': return 'bg-yellow-500 hover:bg-yellow-600';
            default: return 'bg-blue-500 hover:bg-blue-600';
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-[#fffcf5]">
                <span className="loading loading-spinner loading-lg text-[#1e3a8a]"></span>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#fffcf5] font-sans pb-20 relative overflow-x-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            {/* ================= HERO / HEADER SECTION ================= */}
            <div className="relative pt-12 pb-8 z-10">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-[#1e3a8a] leading-tight tracking-tight drop-shadow-sm mb-6">
                        {searchQuery ? `Hasil Pencarian: "${searchQuery}"` : (
                            <>
                                Jelajahi Pustaka <br />
                                <span className="text-gray-700">Sains & Budaya</span>
                            </>
                        )}
                    </h1>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto mb-8 relative">
                        <form onSubmit={handleSearch} className="relative">
                            <input
                                type="text"
                                placeholder="Cari materi atau istilah (min. 2 huruf)..."
                                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-orange-200 focus:border-orange-500 focus:outline-none shadow-sm text-gray-700 bg-white/80 backdrop-blur"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-bold hover:bg-orange-600 transition-colors">
                                Cari
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* ================= GLOSSARY RESULTS (If Searching) ================= */}
            {searchQuery && glossaries.length > 0 && (
                <div className="container mx-auto px-6 relative z-10 mb-12">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6 flex items-center gap-2">
                            <BookOpen className="w-6 h-6" />
                            Istilah Ditemukan
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {glossaries.map((item) => (
                                <div key={item.id} className="bg-white p-5 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-all">
                                    <h3 className="font-bold text-lg text-blue-800 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                    <div className="mt-2 text-xs text-blue-400 font-semibold bg-blue-50 inline-block px-2 py-1 rounded">
                                        {item.category || 'Umum'}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* ================= PRODUCTS GRID ================= */}
            <div className="container mx-auto px-6 relative z-10 mb-20">
                <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100 min-h-[500px]">

                    {/* Filter / Toolbar */}
                    <div className="flex justify-between items-center mb-8 px-2 border-b border-gray-100 pb-4">
                        <div className="flex items-center gap-2 text-gray-400">
                            <Filter className="w-5 h-5" />
                            <span className="text-sm font-medium">Materi Pembelajaran</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                            <span className="w-3 h-3 rounded-full bg-blue-400"></span>
                            <span className="w-3 h-3 rounded-full bg-orange-400"></span>
                        </div>
                    </div>

                    {products.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
                                {products.map((product, index) => {
                                    const cardColor = getCardColor(index);
                                    return (
                                        <Link
                                            to={`/products/${product.slug}`}
                                            key={product.id}
                                            className="group bg-neutral-50 rounded-3xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all hover:border-blue-200 flex flex-col h-full"
                                        >
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
                                                <h3 className="font-bold text-xl text-gray-800 mb-2 line-clamp-1 group-hover:text-[#1e3a8a] transition-colors">{product.name}</h3>

                                                <p className="text-gray-500 text-sm line-clamp-2 mb-4 leading-relaxed">
                                                    {product.description || 'Pelajari materi ini lebih lanjut dengan penjelasan yang interaktif.'}
                                                </p>

                                                <div className="mt-auto">
                                                    <div className="space-y-2 mb-4 opacity-30">
                                                        <div className="h-1 w-full border-b border-dashed border-gray-400"></div>
                                                        <div className="h-1 w-2/3 border-b border-dashed border-gray-400"></div>
                                                    </div>

                                                    <button className={`w-full py-2.5 rounded-xl text-white font-bold text-sm shadow-md transition-transform active:scale-95 ${getButtonStyles(cardColor)}`}>
                                                        Baca Sekarang
                                                    </button>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>

                            {/* Pagination Controls */}
                            <div className="flex justify-center items-center gap-4 mt-8">
                                <button
                                    onClick={() => handlePageChange(pagination.current_page - 1)}
                                    disabled={pagination.current_page === 1}
                                    className="flex items-center gap-2 px-6 py-2.5 bg-orange-500 text-white rounded-full font-bold shadow-md hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:shadow-none transition-all"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                    Prev
                                </button>

                                <span className="font-bold text-gray-600">
                                    Hal {pagination.current_page} dari {pagination.last_page}
                                </span>

                                <button
                                    onClick={() => handlePageChange(pagination.current_page + 1)}
                                    disabled={pagination.current_page === pagination.last_page}
                                    className="flex items-center gap-2 px-6 py-2.5 bg-orange-500 text-white rounded-full font-bold shadow-md hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:shadow-none transition-all"
                                >
                                    Next
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-gray-400 text-lg">
                                {searchQuery ? 'Tidak ada materi yang cocok dengan pencarian Anda.' : 'Belum ada materi yang tersedia.'}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Decorative Mascots */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="fixed bottom-0 right-4 hidden lg:block z-50 pointer-events-none"
            >
                <img src="/images/characters/anak5.png" alt="Student" className="w-32 drop-shadow-xl" />
            </motion.div>

            {/* ================= GLOSSARY SECTION ================= */}
            <section id="glossary-section" className="px-6 mb-12">
                <GlossarySection />
            </section>

        </div>
    );
};

export default ProductList;
