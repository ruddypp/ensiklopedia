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

            {/* Header / Pembuka (DaisyUI Hero) */}
            <header className="hero min-h-[400px] bg-base-100 relative overflow-hidden mb-12">
                {/* No Decorative Background Elements - Clean White */}
                <div className="hero-content flex-col lg:flex-row-reverse gap-12 max-w-7xl w-full z-10 px-6">
                    {/* Product Image */}
                    <motion.div
                        initial={{ x: 50, opacity: 0, rotate: 2 }}
                        animate={{ x: 0, opacity: 1, rotate: -2 }}
                        whileHover={{ rotate: 0, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="max-w-md w-full"
                    >
                        {product.cover_image ? (
                            <img
                                src={product.cover_image.startsWith('images/') ? `/${product.cover_image}` : `/storage/${product.cover_image}`}
                                alt={product.name}
                                className="mask mask-squircle shadow-2xl w-full object-cover border-4 border-base-100 bg-base-100"
                            />
                        ) : (
                            <div className="mask mask-squircle w-full shadow-2xl aspect-[4/3] flex items-center justify-center bg-base-300 text-base-content/50">
                                <BookOpen className="w-24 h-24" />
                            </div>
                        )}
                    </motion.div>

                    {/* Text Content */}
                    <div className="text-center lg:text-left space-y-6 max-w-2xl">
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="badge badge-lg p-4 gap-2 shadow-sm bg-primary/10 text-primary border-primary/20"
                        >
                            <PlayCircle className="w-4 h-4" />
                            Ayo Belajar Bersama!
                        </motion.div>

                        <motion.h1
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="text-5xl lg:text-7xl font-serif font-black uppercase text-primary"
                        >
                            {product.name}
                        </motion.h1>

                        {sections.pembuka && (
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="prose prose-lg prose-stone leading-relaxed font-medium bg-base-100/60 p-6 rounded-box"
                                dangerouslySetInnerHTML={{ __html: sections.pembuka.content }}
                            />
                        )}

                        <div className="flex justify-center lg:justify-start relative group">
                            {/* Rabbit (Kelinci) Mascot - Encouraging Reading */}
                            <motion.div
                                animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -right-16 -top-20 hidden sm:block z-20 pointer-events-none"
                            >
                                <img src="/images/characters/kelinci.png" alt="Rabbit Mascot" className="w-28 drop-shadow-lg" />
                            </motion.div>
                            {/* Owl Mascot - Left Side */}
                            <motion.div
                                animate={{ y: [0, -5, 0], rotate: [0, -2, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -left-20 -bottom-10 hidden sm:block z-20 pointer-events-none"
                            >
                                <img src="/images/characters/owl.png" alt="Owl Mascot" className="w-24 drop-shadow-lg" />
                            </motion.div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    document.getElementById('materi-tabs')?.scrollIntoView({ behavior: 'smooth' });
                                    setActiveTab('identitas');
                                }}
                                className="btn btn-primary btn-lg rounded-full shadow-xl gap-3 relative z-10"
                            >
                                Mulai Baca <ArrowLeft className="w-6 h-6 rotate-[-90deg]" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Tabs (DaisyUI Tabs) */}
            <div id="materi-tabs" className="max-w-7xl mx-auto px-4 md:px-6">

                {/* DaisyUI Tabs Boxed */}
                <div className="flex justify-center mb-8 overflow-x-auto pb-4">
                    <div className="tabs tabs-boxed bg-base-200/50 p-2 rounded-2xl gap-2">
                        {tabs.map((tab) => (
                            <a
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`tab tab-lg h-auto py-3 px-6 rounded-xl transition-all duration-300 gap-2 font-bold ${activeTab === tab.id ? 'tab-active bg-primary text-primary-foreground shadow-md scale-105' : 'hover:bg-base-200'}`}
                            >
                                {tab.icon}
                                {tab.label}
                            </a>
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
                                    className="max-w-5xl mx-auto space-y-12"
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
                                            initial={{ scale: 0.9, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                            className="mockup-window bg-base-300 shadow-2xl mb-12"
                                        >
                                            <div className="bg-black aspect-video flex justify-center items-center">
                                                <VideoEmbed url={activeSection.video_url} title={`Video ${product.name}`} />
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Main Text Content */}
                                    <div
                                        className={`
                                            prose prose-xl prose-stone max-w-none text-base-content
                                            prose-headings:text-primary prose-headings:font-bold
                                            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                                            prose-strong:text-base-content
                                            prose-p:leading-relaxed prose-li:marker:text-primary
                                            ${activeTab === 'proses' ? 'process-content' : ''}
                                            ${activeTab === 'identitas' ? 'identity-content' : ''}
                                            ${activeTab === 'ipas' ? 'ipas-content' : ''}
                                            ${activeTab === 'bahan' ? 'bahan-content' : ''}
                                            ${activeTab === 'dampak' ? 'dampak-content' : ''}
                                        `}
                                        dangerouslySetInnerHTML={{ __html: activeSection.content }}
                                    />
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
            {/* Running Squirrel (Tupai) Mascot at Bottom */}
            <motion.div
                animate={{ x: [-200, 1000] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="fixed bottom-0 left-0 z-50 pointer-events-none hidden lg:block opacity-90"
                style={{ width: '150px' }}
            >
                <img src="/images/characters/tupai.png" alt="Running Squirrel" className="w-full drop-shadow-xl" />
            </motion.div>

            {/* Running Fox Mascot at Bottom (Opposite Direction) */}
            <motion.div
                animate={{ x: [1000, -200] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
                className="fixed bottom-0 left-0 z-40 pointer-events-none hidden lg:block opacity-90"
                style={{ width: '140px' }}
            >
                <img src="/images/characters/fox.png" alt="Running Fox" className="w-full drop-shadow-xl scale-x-[-1]" />
            </motion.div>
        </motion.div>
    );
};

export default ProductDetail;
