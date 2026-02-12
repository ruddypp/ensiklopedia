import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import api from '../services/api';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get('/products');
                setProducts(Array.isArray(response.data.data) ? response.data.data : response.data);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-base-100">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <div className="space-y-8 min-h-screen bg-base-100 pb-12 relative overflow-hidden">
            {/* Kakek Mascot - Bottom Left */}
            <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 bottom-0 hidden lg:block z-0 pointer-events-none"
            >
                <img src="/images/characters/kakek.png" alt="Kakek Mascot" className="w-48 drop-shadow-xl opacity-80" />
            </motion.div>

            {/* Anak 5 Mascot - Bottom Right */}
            <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-4 bottom-0 hidden lg:block z-0 pointer-events-none"
            >
                <img src="/images/characters/anak5.png" alt="Student Mascot" className="w-40 drop-shadow-xl opacity-80" />
            </motion.div>

            <div className="hero bg-base-100 py-12 relative overflow-visible">
                {/* Anak 4 Mascot - Top Right Peeking */}
                <motion.div
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                    className="absolute bottom-0 right-10 hidden md:block z-10 pointer-events-none"
                >
                    <img src="/images/characters/anak4.png" alt="Student Mascot" className="w-32 drop-shadow-lg" />
                </motion.div>

                {/* Anak 1 Mascot - Top Left Peeking */}
                <motion.div
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                    className="absolute bottom-0 left-10 hidden md:block z-10 pointer-events-none"
                >
                    <img src="/images/characters/anak.png" alt="Student Mascot" className="w-32 drop-shadow-lg scale-x-[-1]" />
                </motion.div>

                <div className="hero-content text-center relative z-20">
                    <div className="max-w-2xl">
                        <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-2 block">Katalog Pengetahuan</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-6">Daftar Isi Pengetahuan</h1>
                        <p className="text-xl text-base-content/70 leading-relaxed">
                            Temukan kekayaan budaya dan sains Madura yang penuh makna. Pilih topik di bawah ini untuk mulai belajar.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                {products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="card bg-base-100 shadow-sm">
                        <div className="card-body items-center text-center p-12">
                            <p className="text-lg opacity-60">Belum ada produk yang tersedia saat ini.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductList;
