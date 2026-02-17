import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Loader2, ArrowLeft, Search, MoreHorizontal, Leaf, Info, Settings, Book, } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../services/api';
import VideoEmbed from '../components/VideoEmbed';
import { GlossarySection } from '@/components/GlossarySection';

const ProductDetail = () => {
    const { slug } = useParams();
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [activeSectionId, setActiveSectionId] = useState<number | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await api.get(`/products/${slug}`);
                const productData = response.data.data || response.data;
                setProduct(productData);

                // Set default active section to the first one sorted by sort_order
                if (productData.sections && productData.sections.length > 0) {
                    setActiveSectionId(productData.sections[0].id);
                }
            } catch (error) {
                console.error('Failed to fetch product:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [slug]);

    const [showKakek, setShowKakek] = useState(true);
    const [showIbu, setShowIbu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition < 100) {
                setShowKakek(true);
                setShowIbu(false);
            } else {
                setShowKakek(false);
                setShowIbu(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-[#f0f4f8]">
                <span className="loading loading-spinner loading-lg text-blue-600"></span>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Oops!</h1>
                        <p className="py-6">Produk tidak ditemukan.</p>
                        <Link to="/products" className="btn btn-primary">Kembali</Link>
                    </div>
                </div>
            </div>
        );
    }

    const activeSection = product.sections?.find((s: any) => s.id === activeSectionId);

    return (
        <div className="min-h-screen bg-[#fffcf5] py-10 px-4 font-sans flex items-center justify-center relative overflow-hidden">

            {/* Background Pattern - Consistent with Home */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            {/* Back Button (Outside Card) */}
            <Link to="/products" className="absolute top-6 left-6 btn btn-circle btn-ghost bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white z-50">
                <ArrowLeft className="w-6 h-6 text-[#1e3a8a]" />
            </Link>

            {/* Main Card Container - Folder Style */}
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-full max-w-5xl bg-[#fef3c7] rounded-[2rem] shadow-2xl overflow-hidden border-4 border-[#fde68a] relative z-10 flex flex-col"
                style={{ minHeight: '80vh' }}
            >

                {/* 1. Header Bar (Window Style) */}
                <div className="bg-[#fef9c3] px-6 py-4 flex items-center justify-between border-b-2 border-[#fde68a]">
                    <h1 className="text-2xl md:text-3xl font-black text-[#1e3a8a] tracking-tight">
                        {product.name}
                    </h1>
                    {/* Window Controls */}
                    <div className="flex gap-2 bg-[#faebd7] px-3 py-1.5 rounded-full border border-[#fde68a]">
                        <Search className="w-4 h-4 text-stone-400" />
                        <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    </div>
                </div>

                {/* 2. Main Content Area (Centered) */}
                <div className="flex-1 relative p-6 md:p-8 flex flex-col items-center justify-center bg-white/50">

                    {/* Media Display */}
                    <div className="w-full max-w-4xl h-[400px] md:h-[500px] bg-white rounded-3xl shadow-lg border-4 border-white overflow-hidden relative mb-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSectionId ? `media-${activeSectionId}` : 'media-default'}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="w-full h-full"
                            >
                                {activeSection?.video_url ? (
                                    <div className="w-full h-full flex items-center justify-center bg-black">
                                        <VideoEmbed url={activeSection.video_url} title={activeSection.title} className="w-full h-full" />
                                    </div>
                                ) : activeSection?.image ? (
                                    <img
                                        src={activeSection.image.startsWith('images/') ? `/${activeSection.image}` : `/storage/${activeSection.image}`}
                                        alt={activeSection.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            if (product.cover_image) {
                                                e.currentTarget.src = product.cover_image.startsWith('images/') ? `/${product.cover_image}` : `/storage/${product.cover_image}`;
                                            } else {
                                                e.currentTarget.style.display = 'none';
                                            }
                                        }}
                                    />
                                ) : product.cover_image ? (
                                    <img
                                        src={product.cover_image.startsWith('images/') ? `/${product.cover_image}` : `/storage/${product.cover_image}`}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-blue-50 text-blue-200">
                                        <Book className="w-24 h-24" />
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>

                        {/* Floating Title Overlay */}
                        {activeSection && (
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-sm border border-white/50">
                                <h2 className="text-[#1e3a8a] font-bold text-lg">
                                    {activeSection.title}
                                </h2>
                            </div>
                        )}
                    </div>

                    {/* Text Content Area (Bottom) */}
                    <div className="w-full max-w-4xl bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-sm border-2 border-[#fef08a] relative overflow-hidden">
                        {/* Decorative paper holes/lines */}
                        <div className="absolute top-0 left-0 w-full h-4 bg-[#fef9c3] border-b border-[#fde68a]"></div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSectionId}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="prose prose-lg md:prose-xl prose-stone max-w-none font-medium"
                            >
                                {activeSection ? (
                                    <div
                                        className="text-justify leading-loose [&>p]:mb-6 text-stone-700"
                                        dangerouslySetInnerHTML={{ __html: activeSection.content }}
                                    />
                                ) : (
                                    <p className="text-center text-stone-500 italic">Pilih bagian di bawah untuk membaca lebih lanjut.</p>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

                {/* 3. Bottom Tabs (Folder Tabs Style) */}
                <div className="bg-[#fef3c7] px-6 pt-6 pb-4 border-t border-[#fde68a] relative z-20">
                    <div className="flex gap-4 justify-center flex-wrap">
                        {product.sections?.map((section: any) => (
                            <button
                                key={section.id}
                                onClick={() => setActiveSectionId(section.id)}
                                className={`
                                    relative px-6 py-3 font-bold text-sm md:text-base rounded-2xl transition-all duration-200 border-2 shadow-sm
                                    ${activeSectionId === section.id
                                        ? 'bg-[#1e40af] text-white border-[#1e40af] shadow-md transform -translate-y-1'
                                        : 'bg-[#ffedd5] text-[#1e3a8a] border-[#fde68a] hover:bg-[#fed7aa] hover:border-orange-300'
                                    }
                                `}
                            >
                                {section.title}
                            </button>
                        ))}
                    </div>
                </div>
                {/* ================= GLOSSARY SECTION ================= */}
                <section id="glossary-section" className="px-6 mb-12">
                    <GlossarySection />
                </section>
            </motion.div>

            {/* Decorative Mascots */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: showKakek ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-24 right-0 hidden xl:block z-50 pointer-events-none"
            >
                <img src="/images/characters/kakek.png" alt="Kakek" className="w-37 drop-shadow-xl" />
            </motion.div>

            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: showIbu ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="fixed bottom-22 left-0 hidden xl:block z-50 pointer-events-none"
            >
                <img src="/images/characters/ibu.png" alt="Ibu" className="w-31 drop-shadow-xl" />
            </motion.div>
        </div>

    );
};

export default ProductDetail;
