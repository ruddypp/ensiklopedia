import { useState, useEffect } from 'react';
import { Search, ChevronRight, ChevronLeft, Menu, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import api from '../services/api';

const CATEGORIES = [
    'Kearifan Lokal',
    'Tokoh Ilmuwan',
    'Istilah Sains'
];

export const GlossarySection = () => {
    const [glossaryItems, setGlossaryItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const itemsPerPage = 2; // As seen in image (2 items visible)

    useEffect(() => {
        const fetchGlossary = async () => {
            try {
                const response = await api.get('/glossaries');
                setGlossaryItems(Array.isArray(response.data.data) ? response.data.data : response.data);
            } catch (error) {
                console.error('Failed to fetch glossary:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchGlossary();
    }, []);

    // Filter items
    const filteredItems = glossaryItems.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const displayedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center py-20">
                <Loader2 className="w-8 h-8 text-[#1e3a8a] animate-spin" />
            </div>
        );
    }

    return (
        <div className="w-full max-w-5xl mx-auto mt-20 relative z-20">
            {/* Header Card - Deep Blue with Orange Border */}
            <div className="bg-[#1e3a8a] text-white rounded-t-[2rem] p-5 flex items-center justify-between shadow-lg relative z-10 mx-4 lg:mx-0 border-b-8 border-orange-500 select-none">
                <div className="flex items-center gap-3">
                    {/* Logo placeholder if needed, or just text */}
                    <h2 className="text-xl md:text-2xl font-bold tracking-wide">Glosarium Budaya Lokal</h2>
                </div>
            </div>

            {/* Main Content Areas */}
            <div className="bg-white/80 backdrop-blur-sm rounded-b-[2rem] shadow-xl border border-t-0 border-gray-100 p-6 md:p-8 flex flex-col md:flex-row gap-8 mx-4 lg:mx-0 relative">

                {/* Left Listing Column */}
                <div className="flex-1 space-y-6">
                    {displayedItems.length > 0 ? (
                        displayedItems.map((item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex gap-6 items-start p-4 hover:bg-blue-50/50 rounded-2xl transition-all group"
                            >
                                <div className="w-24 h-24 md:w-32 md:h-24 bg-gray-200 rounded-xl overflow-hidden flex-shrink-0 shadow-sm border border-gray-100 group-hover:shadow-md transition-all">
                                    <img
                                        src={item.image.startsWith('http') || item.image.startsWith('/') ? item.image : `/${item.image}`}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = 'https://placehold.co/150x150?text=' + (item.title ? item.title[0] : 'G');
                                        }}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-[#1e3a8a] group-hover:text-orange-600 transition-colors">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{item.description}</p>
                                    {item.category && (
                                        <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] uppercase tracking-wider font-bold rounded-md">
                                            {item.category}
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="text-center py-10 text-gray-500 italic">
                            Tidak ada item ditemukan.
                        </div>
                    )}

                    {/* Pagination Controls */}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                        <button
                            onClick={handlePrev}
                            disabled={currentPage === 1}
                            className="btn btn-ghost btn-sm gap-2 disabled:opacity-30 text-gray-500 hover:text-[#1e3a8a]"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            Sebelumnya
                        </button>
                        <span className="text-sm font-medium text-gray-400">
                            Halaman <span className="text-[#1e3a8a] font-bold">{currentPage}</span> / {totalPages || 1}
                        </span>
                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages || totalPages === 0}
                            className="btn btn-ghost btn-sm gap-2 disabled:opacity-30 text-gray-500 hover:text-[#1e3a8a]"
                        >
                            Selanjutnya
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Right Sidebar - Search & Filter */}
                <div className="w-full md:w-72 space-y-6">
                    <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100/50">
                        <h3 className="text-lg font-bold text-[#1e3a8a] mb-4 border-b border-blue-100 pb-2">
                            Pencarian Cepat
                        </h3>

                        {/* Search Box */}
                        <div className="relative mb-6">
                            <input
                                type="text"
                                placeholder="Cari istilah..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/20 focus:border-[#1e3a8a] bg-white shadow-sm transition-all"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-[#1e3a8a] text-white rounded-lg hover:bg-blue-800 transition-colors shadow-sm">
                                <Search className="w-4 h-4" />
                            </button>

                            {/* Suggestions Dropdown */}
                            {searchTerm.length >= 1 && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 max-h-60 overflow-y-auto">
                                    {glossaryItems.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())).map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => {
                                                setSearchTerm(item.title);
                                                setCurrentPage(1);
                                            }}
                                            className="w-full text-left px-4 py-3 text-sm hover:bg-blue-50 text-gray-700 hover:text-[#1e3a8a] border-b border-gray-50 last:border-none transition-colors flex items-center gap-2"
                                        >
                                            <Search className="w-3 h-3 text-gray-400" />
                                            <span dangerouslySetInnerHTML={{
                                                __html: item.title.replace(new RegExp(`(${searchTerm})`, 'gi'), '<span class="font-bold text-orange-500">$1</span>')
                                            }} />
                                        </button>
                                    ))}
                                    {glossaryItems.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())).length === 0 && (
                                        <div className="px-4 py-3 text-sm text-gray-400 italic text-center">
                                            Tidak ada hasil.
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Filters */}
                        <ul className="space-y-2">
                            {CATEGORIES.map(category => (
                                <li key={category}>
                                    <button
                                        onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                                        className={`flex items-center gap-3 text-sm font-medium transition-all w-full text-left p-2 rounded-lg
                                            ${selectedCategory === category ? 'bg-white text-[#1e3a8a] shadow-sm font-bold' : 'text-gray-500 hover:bg-white/50 hover:text-[#1e3a8a]'}
                                        `}
                                    >
                                        <span className={`w-2 h-2 rounded-full ${selectedCategory === category ? 'bg-orange-500' : 'bg-gray-300'}`}></span>
                                        {category}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};
