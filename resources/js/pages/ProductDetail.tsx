import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Loader2, ArrowLeft, BookOpen, PlayCircle, Leaf, Info, FlaskConical, PenTool } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../services/api';
import VideoEmbed from '../components/VideoEmbed';

const ProductDetail = () => {
    const { slug } = useParams();
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('identitas');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await api.get(`/products/${slug}`);
                setProduct(response.data.data || response.data);
            } catch (error) {
                console.error('Failed to fetch product:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [slug]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-base-100">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Oops!</h1>
                        <p className="py-6">Produk yang kamu cari tidak ditemukan.</p>
                        <Link to="/products" className="btn btn-primary">Kembali ke Daftar Isi</Link>
                    </div>
                </div>
            </div>
        );
    }

    const getSection = (slug: string) => product.sections.find((s: any) => s.slug === slug);

    const sections = {
        pembuka: getSection('pembuka'),
        identitas: getSection('identitas'),
        bahan: getSection('bahan'),
        proses: getSection('proses'),
        ipas: getSection('ipas'),
        dampak: getSection('dampak'),
    };

    const tabs = [
        { id: 'identitas', label: 'Identitas & Budaya', icon: <Info className="w-5 h-5" />, section: sections.identitas },
        { id: 'bahan', label: 'Bahan Baku', icon: <Leaf className="w-5 h-5" />, section: sections.bahan },
        { id: 'proses', label: 'Proses Pembuatan', icon: <PenTool className="w-5 h-5" />, section: sections.proses },
        { id: 'ipas', label: 'Konsep IPAS', icon: <FlaskConical className="w-5 h-5" />, section: sections.ipas },
        { id: 'dampak', label: 'Dampak & Tanggung Jawab', icon: <BookOpen className="w-5 h-5" />, section: sections.dampak },
    ];

    const activeSection = tabs.find(t => t.id === activeTab)?.section;

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-8 pb-24 font-sans text-base-content overflow-x-hidden min-h-screen bg-base-100"
        >
            {/* Breadcrumb & Navigation */}
            <motion.nav variants={itemVariants} className="flex items-center justify-between px-4 md:px-8 pt-4">
                <Link to="/products" className="btn btn-ghost gap-2 normal-case text-lg font-bold">
                    <ArrowLeft className="h-5 w-5" /> Kembali ke Daftar Isi
                </Link>
            </motion.nav>

            {/* Header / Pembuka */}
            <header className="hero min-h-[500px] relative overflow-hidden mb-0 pt-8">
                <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-12 max-w-7xl w-full z-10 px-4 md:px-8">

                    {/* Product Image - EVEN BIGGER (60% width on desktop) */}
                    <div className="lg:w-[60%] w-full relative z-10 flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-full"
                        >
                            {product.cover_image ? (
                                <img
                                    src={product.cover_image.startsWith('images/') ? `/${product.cover_image}` : `/storage/${product.cover_image}`}
                                    alt={product.name}
                                    className="w-full h-auto object-cover shadow-2xl rounded-[2.5rem] border-4 border-white/50 bg-white"
                                />
                            ) : (
                                <div className="w-full aspect-video flex items-center justify-center bg-base-300 text-base-content/50 border-4 border-white rounded-[2.5rem] shadow-xl">
                                    <BookOpen className="w-32 h-32" />
                                </div>
                            )}
                        </motion.div>
                    </div>

                    {/* Text Content - SMALLER (40% width on desktop) */}
                    <div className="lg:w-[40%] w-full text-center lg:text-left space-y-6 relative z-20">
                        {/* Title Section - Slightly Smaller */}
                        <div>
                            <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-5xl lg:text-7xl font-black text-primary tracking-tighter leading-tight mb-4 font-serif"
                            >
                                {product.name}
                            </motion.h1>
                            <div className="h-1.5 w-24 bg-secondary rounded-full mx-auto lg:mx-0"></div>
                        </div>

                        {/* Description - Smaller Text */}
                        {sections.pembuka && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg md:text-xl font-medium leading-relaxed text-stone-700"
                                dangerouslySetInnerHTML={{ __html: sections.pembuka.content }}
                            />
                        )}

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
                        >
                            <button
                                onClick={() => {
                                    document.getElementById('materi-tabs')?.scrollIntoView({ behavior: 'smooth' });
                                    setActiveTab('identitas');
                                }}
                                className="btn bg-purple-600 hover:bg-purple-700 text-white border-none btn-xl rounded-full px-10 text-lg h-14 shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all"
                            >
                                Mulai Baca
                            </button>
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* Main Content Tabs */}
            <div id="materi-tabs" className="max-w-7xl mx-auto px-4 md:px-8 relative z-30">

                {/* Tabs Navigation - CLEAN & VISIBLE */}
                <div className="bg-white p-2 rounded-full shadow-[0_4px_20px_rgb(0,0,0,0.08)] border border-stone-200 inline-block w-full md:w-auto mx-auto mb-8 relative z-40">
                    <div className="flex flex-wrap justify-center gap-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                                    flex items-center gap-3 px-6 py-3 rounded-full font-bold transition-all duration-200 border-2
                                    ${activeTab === tab.id
                                        ? 'bg-purple-600 border-purple-600 text-white shadow-md'
                                        : 'bg-transparent border-transparent text-stone-500 hover:bg-stone-50 hover:text-purple-600 hover:border-purple-100'}
                                `}
                            >
                                {tab.icon}
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Card with AnimatePresence */}
                <div className="card bg-base-100 shadow-none overflow-hidden min-h-[500px]">
                    {/* Top Decor - Solid Purple */}
                    <div className="h-2 bg-primary w-24 mx-auto rounded-full mb-8"></div>

                    <div className="card-body p-8 md:p-16">
                        <AnimatePresence mode="wait">
                            {activeSection ? (
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full max-w-7xl mx-auto space-y-12"
                                >
                                    <div className="text-center space-y-4 mb-12">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                                            className="avatar placeholder"
                                        >
                                            <div className="bg-secondary/30 text-secondary-content rounded-full w-20">
                                                <span className="text-3xl">{tabs.find(t => t.id === activeTab)?.icon}</span>
                                            </div>
                                        </motion.div>
                                        <h2 className="text-3xl md:text-5xl font-black text-base-content tracking-tight">
                                            {tabs.find(t => t.id === activeTab)?.label}
                                        </h2>
                                    </div>

                                    {/* Video Section if available */}
                                    {activeSection.video_url && (
                                        <motion.div
                                            initial={{ scale: 0.95, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                            className="w-full mb-16 relative perspective-1000"
                                        >
                                            {/* Decorative Background Glow */}
                                            <div className="absolute -inset-8 bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20 rounded-[3rem] -z-10 blur-3xl opacity-60"></div>

                                            {/* TV / Tablet Frame Container */}
                                            <div className="bg-base-100 border-8 border-base-300 rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden relative group">

                                                {/* Screen Area */}
                                                <div className="bg-black p-2 md:p-4 rounded-[1.5rem] md:rounded-[2.5rem]">
                                                    <VideoEmbed
                                                        url={activeSection.video_url}
                                                        title={`Video ${product.name}`}
                                                        className="rounded-[1rem] md:rounded-[2rem] shadow-inner ring-1 ring-white/10"
                                                    />
                                                </div>

                                                {/* Bottom Control Bar Simulation for "Tablet/TV" look */}
                                                <div className="h-12 md:h-16 bg-base-200 flex items-center justify-center gap-6 border-t border-base-300/50">
                                                    <div className="w-12 h-1 rounded-full bg-base-content/20"></div>
                                                    <div className="w-8 h-8 rounded-full border-2 border-base-content/20 flex items-center justify-center">
                                                        <div className="w-3 h-3 rounded-[2px] border border-base-content/20"></div>
                                                    </div>
                                                    <div className="w-12 h-1 rounded-full bg-base-content/20"></div>
                                                </div>

                                                {/* "Speaker" Grills */}
                                                <div className="absolute top-1/2 -left-1 -translate-y-1/2 space-y-2 hidden md:block">
                                                    {[...Array(6)].map((_, i) => (
                                                        <div key={i} className="w-1.5 h-8 bg-base-300 rounded-r-full"></div>
                                                    ))}
                                                </div>
                                                <div className="absolute top-1/2 -right-1 -translate-y-1/2 space-y-2 hidden md:block">
                                                    {[...Array(6)].map((_, i) => (
                                                        <div key={i} className="w-1.5 h-8 bg-base-300 rounded-l-full"></div>
                                                    ))}
                                                </div>

                                                {/* Play Button Overlay Hint (Optional) */}
                                                <div className="absolute top-4 right-6 flex gap-2">
                                                    <div className="w-3 h-3 rounded-full bg-error animate-pulse"></div>
                                                    <div className="text-xs font-bold text-base-content/50 uppercase tracking-widest">Live</div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Main Text Content - Fun Notebook Style */}
                                    <div className="relative max-w-5xl mx-auto mt-16">

                                        {/* Mascots / Characters Decoration */}
                                        <div className="absolute -top-24 -left-12 w-25 hidden xl:block z-10 pointer-events-none">
                                            <img src="/images/characters/kakek.png" alt="Teacher" className="w-full drop-shadow-xl rotate-[-5deg]" />
                                        </div>
                                        <div className="absolute -bottom-10 -right-16 w-36 hidden xl:block z-10 pointer-events-none">
                                            <img src="/images/characters/anak3.png" alt="Student" className="w-full drop-shadow-xl rotate-[10deg]" />
                                        </div>

                                        {/* Notebook Page Container */}
                                        <div className="bg-base-100 relative p-8 md:p-16 rounded-[2px] shadow-[5px_5px_15px_rgba(139,92,246,0.15)] transform rotate-[-1deg]">

                                            {/* Notebook Visual Effects (Holes, Tape, etc) */}
                                            <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-primary/5 to-transparent rounded-t-[2px]"></div>
                                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-primary/20 shadow-sm rotate-1 transform backdrop-blur-sm"></div> {/* Tape - Purple Tint */}

                                            {/* Binder Holes (Left Side) */}
                                            <div className="absolute left-4 top-0 bottom-0 flex flex-col justify-evenly h-full py-12">
                                                {[...Array(6)].map((_, i) => (
                                                    <div key={i} className="w-6 h-6 rounded-full bg-base-100 shadow-inner ring-2 ring-primary/20"></div>
                                                ))}
                                            </div>

                                            {/* Content Area (Shifted slightly right for holes) */}
                                            <div className="ml-8 md:ml-12">

                                                {/* Fun Header Decoration */}
                                                <div className="flex items-center gap-4 mb-8 border-b-4 border-dashed border-primary/30 pb-4">
                                                    <div className="text-4xl">📝</div>
                                                    <h3 className="text-2xl md:text-3xl font-black text-primary font-serif tracking-wide">
                                                        Catatan Penting
                                                    </h3>
                                                </div>

                                                <div
                                                    className={`
                                                        prose prose-lg md:prose-xl prose-stone max-w-none text-stone-700
                                                        
                                                        // Headings
                                                        prose-headings:font-black prose-headings:text-secondary 
                                                        prose-headings:font-serif prose-headings:tracking-tight
                                                        prose-h2:text-4xl prose-h2:mt-8 prose-h2:mb-4
                                                        prose-h3:text-2xl prose-h3:text-accent
                                                        
                                                        // Paragraphs
                                                        prose-p:leading-relaxed prose-p:font-medium
                                                        
                                                        // Blockquotes (Sticky Note Style - Purple)
                                                        prose-blockquote:bg-purple-100 prose-blockquote:p-6 prose-blockquote:rounded-xl 
                                                        prose-blockquote:border-l-0 prose-blockquote:shadow-md prose-blockquote:rotate-1 
                                                        prose-blockquote:not-italic prose-blockquote:font-bold prose-blockquote:text-purple-900
                                                        prose-blockquote:relative prose-blockquote:mx-4
                                                        
                                                        // Lists
                                                        prose-li:marker:content-['⭐️'] prose-li:marker:text-primary prose-ul:pl-6
                                                        
                                                        // Strong/Bold
                                                        prose-strong:text-primary prose-strong:bg-primary/10 prose-strong:px-1 prose-strong:rounded
                                                        
                                                        // Images (Polaroid Style)
                                                        prose-img:border-8 prose-img:border-white prose-img:shadow-lg prose-img:rotate-2 prose-img:rounded-md
                                                        
                                                        ${activeTab === 'proses' ? 'process-content' : ''}
                                                        ${activeTab === 'identitas' ? 'identity-content' : ''}
                                                        ${activeTab === 'ipas' ? 'ipas-content' : ''}
                                                        ${activeTab === 'bahan' ? 'bahan-content' : ''}
                                                        ${activeTab === 'dampak' ? 'dampak-content' : ''}
                                                    `}
                                                    dangerouslySetInnerHTML={{ __html: activeSection.content }}
                                                />

                                                {/* Fun Footer Element */}
                                                <div className="mt-12 pt-8 border-t-2 border-stone-100 flex justify-between items-center text-stone-400 font-handwriting italic">
                                                    <span>✨ Ayo Semangat Belajar!</span>
                                                    <span>{product.name} • {tabs.find(t => t.id === activeTab)?.label}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex flex-col items-center justify-center h-full text-base-content/50 p-12 min-h-[400px]"
                                >
                                    <BookOpen className="h-24 w-24 mb-6 text-primary/20" />
                                    <p className="text-xl font-medium">Konten sedang disiapkan...</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            {/* Teacher Helper - Fixed Bottom Left */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 1 }}
                className="fixed bottom-0 left-4 z-50 pointer-events-none hidden lg:block"
                style={{ width: '90px' }}
            >
                <img src="/images/characters/anak5.png" alt="Teacher Helper" className="w-full drop-shadow-2xl" />
            </motion.div>
        </motion.div>
    );
};

export default ProductDetail;
