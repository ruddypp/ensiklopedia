import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Search } from 'lucide-react';
import api from '../services/api';

const MainLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState<any[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const navigate = useNavigate();

    // Debounce suggestion fetch
    useEffect(() => {
        const fetchSuggestions = async () => {
            if (searchTerm.length >= 2) {
                try {
                    // We can fetch from products endpoint which now supports search
                    // Since update, index returns array.
                    // IMPORTANT: We need a dedicated 'suggestions' endpoint ideally, or minimal data.
                    // For now, let's use the products endpoint and also glossaries endpoint?
                    // actually, let's just use the /products endpoint as it's the main entry.
                    // Ideally we want mixed results.
                    // Let's do a parallel fetch for better UX if possible, or just product for now.
                    // The requirement says "search also for materi + glossary".

                    const [productsRes, glossaryRes] = await Promise.all([
                        api.get(`/products?search=${searchTerm}&limit=3`),
                        api.get(`/glossaries?search=${searchTerm}&limit=3`) // Backend limit might strictly be pagination but let's see. logic says take(limit)
                    ]);

                    const products = (productsRes.data.data || productsRes.data).map((p: any) => ({ ...p, type: 'Materi', url: `/products/${p.slug}` }));
                    const glossaries = (glossaryRes.data).map((g: any) => ({ ...g, name: g.title, type: 'Istilah', url: `/products?search=${encodeURIComponent(g.title)}` }));

                    setSuggestions([...products, ...glossaries]);
                    setShowSuggestions(true);
                } catch (e) {
                    console.error("Suggestion fetch error", e);
                }
            } else {
                setSuggestions([]);
                setShowSuggestions(false);
            }
        };

        const timeoutId = setTimeout(fetchSuggestions, 300);
        return () => clearTimeout(timeoutId);
    }, [searchTerm]);


    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setShowSuggestions(false);
        if (searchTerm.length >= 2) {
            navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
            {/* Navbar */}
            <nav className="sticky top-0 z-50 w-full bg-[#1e3a8a] shadow-md transition-all border-b-4 border-orange-500">
                <div className="container px-4 md:px-8 mx-auto h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 font-bold text-xl text-white">
                        <BookOpen className="h-6 w-6" />
                        <span>E-Ensiklopedia</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6 text-white/90">
                        <Link to="/" className="text-sm font-medium hover:text-white hover:font-bold transition-all">Beranda</Link>
                        <Link to="/products" className="text-sm font-medium hover:text-white hover:font-bold transition-all">Daftar Isi</Link>
                        <Link to="/about" className="text-sm font-medium hover:text-white hover:font-bold transition-all">Tentang</Link>
                        <div className="relative text-gray-800 group">
                            <form onSubmit={handleSearch}>
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                                <input
                                    type="search"
                                    placeholder="Cari Pengetahuan..."
                                    className="pl-8 h-9 w-64 rounded-full border-none bg-white px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    onFocus={() => { if (searchTerm.length >= 2) setShowSuggestions(true); }}
                                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // Delay to allow click
                                />
                            </form>

                            {/* Navbar Suggestions Dropdown */}
                            {showSuggestions && suggestions.length > 0 && (
                                <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-[60]">
                                    <div className="py-2">
                                        {suggestions.map((item, idx) => (
                                            <Link
                                                key={idx}
                                                to={item.url}
                                                className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                                                onClick={() => {
                                                    setSearchTerm('');
                                                    setShowSuggestions(false);
                                                }}
                                            >
                                                <div className="text-sm font-bold text-gray-800 line-clamp-1">{item.name}</div>
                                                <div className="text-xs text-gray-500 flex justify-between">
                                                    <span>{item.type}</span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="bg-gray-50 px-4 py-2 text-center border-t border-gray-100">
                                        <button onClick={(e) => handleSearch(e)} className="text-xs font-bold text-[#1e3a8a] hover:underline">
                                            Lihat Semua Hasil
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-b border-border bg-background p-4 flex flex-col gap-4">
                    <Link to="/" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Beranda</Link>
                    <Link to="/products" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Daftar Isi</Link>
                    <Link to="/about" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Tentang</Link>
                </div>
            )}

            {/* Main Content */}
            <main className="flex-1 container px-4 md:px-8 mx-auto py-8">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-orange-500 py-6 md:py-0 text-white">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row px-4 md:px-8 mx-auto">
                    <p className="text-center text-sm leading-loose md:text-left font-medium">
                        &copy; 2026 E-Ensiklopedia Etnosains Madura.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
