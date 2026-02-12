import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, BookOpen, Search } from 'lucide-react';
import GlossarySidebar from '../components/GlossarySidebar';

const MainLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
            {/* Navbar */}
            <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container px-4 md:px-8 mx-auto h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
                        <BookOpen className="h-6 w-6" />
                        <span>E-Ensiklopedia</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Beranda</Link>
                        <Link to="/products" className="text-sm font-medium hover:text-primary transition-colors">Daftar Isi</Link>
                        <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">Tentang</Link>
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <input
                                type="search"
                                placeholder="Cari Pengetahuan..."
                                className="pl-8 h-9 w-64 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Content Area */}
                    <div className="md:col-span-9">
                        <Outlet />
                    </div>

                    {/* Sidebar (Glossary & Info) - Visible on Desktop */}
                    <aside className="hidden md:block md:col-span-3 space-y-6">
                        <GlossarySidebar />
                    </aside>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-border py-6 md:py-0">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row px-4 md:px-8 mx-auto">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        &copy; 2026 E-Ensiklopedia Etnosains Madura.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
