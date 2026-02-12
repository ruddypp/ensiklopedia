import { useState, useEffect } from 'react';
import { BookOpen, Search, Loader2 } from 'lucide-react';
import api from '../services/api';

const GlossarySidebar = () => {
    const [terms, setTerms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchTerms = async () => {
            try {
                const response = await api.get('/glossaries');
                // Assume response.data is the array or response.data.data
                setTerms(Array.isArray(response.data.data) ? response.data.data : response.data);
            } catch (error) {
                console.error('Failed to fetch glossary:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTerms();
    }, []);

    const filteredTerms = terms.filter(item =>
        item.term.toLowerCase().includes(search.toLowerCase()) ||
        item.definition.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="rounded-xl border border-border bg-card text-card-foreground shadow-sm sticky top-24 h-[calc(100vh-8rem)] flex flex-col">
            <div className="p-4 border-b border-border">
                <h3 className="font-semibold leading-none tracking-tight mb-4 flex items-center gap-2 text-primary">
                    <BookOpen className="h-5 w-5" /> Glosarium
                </h3>
                <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                        type="search"
                        placeholder="Cari istilah..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-8 h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                {loading ? (
                    <div className="flex justify-center py-4">
                        <Loader2 className="h-6 w-6 animate-spin text-primary" />
                    </div>
                ) : filteredTerms.length > 0 ? (
                    filteredTerms.map((item) => (
                        <div key={item.id} className="pb-3 border-b border-border last:border-0 last:pb-0">
                            <dt className="font-semibold text-sm text-foreground mb-1">{item.term}</dt>
                            <dd className="text-xs text-muted-foreground leading-relaxed">{item.definition}</dd>
                        </div>
                    ))
                ) : (
                    <p className="text-sm text-muted-foreground text-center py-4">
                        Tidak ada istilah ditemukan.
                    </p>
                )}
            </div>
        </div>
    );
};

export default GlossarySidebar;
