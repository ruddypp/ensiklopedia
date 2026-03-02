import { AnimatePresence, motion } from 'framer-motion';
import {
    BookOpen,
    Brain,
    ChevronLeft,
    ChevronRight,
    Compass,
    FlaskConical,
    Globe,
    GraduationCap,
    Heart,
    Home,
    Info,
    Laptop,
    Lightbulb,
    Microscope,
    RefreshCw,
    Smile,
    Star,
    Users,
    X,
    Zap,
} from 'lucide-react';
import { JSX, useState } from 'react';

/* ─────────────────────────────────────────
   SECTION PAGE TYPES
───────────────────────────────────────── */
interface SlidePage {
    title: string;
    render: () => JSX.Element;
}

/* ─────────────────────────────────────────
   SLIDE CONTENT PER CARD
───────────────────────────────────────── */

// ── Card 1: Identitas ──
const IdentitasPages: SlidePage[] = [
    {
        title: 'Identitas E-Ensiklopedia',
        render: () => (
            <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-2xl border border-blue-100">
                    <div className="w-12 h-12 bg-[#1e3a8a] rounded-xl flex items-center justify-center shrink-0">
                        <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Judul</p>
                        <p className="text-sm font-black text-[#1e3a8a] leading-tight">E-Ensiklopedia Etnosains Madura</p>
                        <p className="text-xs text-gray-500 leading-tight">Pembelajaran IPAS Berbasis Budaya Lokal untuk Siswa SD</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                    {[
                        { icon: <Star className="w-4 h-4" />, label: 'Penulis/Penyusun', value: 'Leli Lestari', color: 'bg-yellow-50 border-yellow-200 text-yellow-700' },
                        { icon: <Zap className="w-4 h-4" />, label: 'Tahun', value: '2026', color: 'bg-orange-50 border-orange-200 text-orange-700' },
                        { icon: <GraduationCap className="w-4 h-4" />, label: 'Sasaran Kelas', value: 'Siswa Kelas V SD/MI', color: 'bg-green-50 border-green-200 text-green-700' },
                        { icon: <Info className="w-4 h-4" />, label: 'Jenis', value: 'E-Ensiklopedia', color: 'bg-blue-50 border-blue-200 text-blue-700' },
                    ].map((item) => (
                        <div key={item.label} className={`p-3 rounded-xl border ${item.color} flex items-start gap-2`}>
                            <div className="mt-0.5 shrink-0">{item.icon}</div>
                            <div>
                                <p className="text-[9px] font-bold uppercase tracking-wide opacity-70 leading-tight">{item.label}</p>
                                <p className="text-xs font-black leading-tight">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-4 text-white text-center">
                    <BookOpen className="w-6 h-6 mx-auto mb-2 opacity-80" />
                    <p className="text-xs font-medium leading-relaxed opacity-90">
                        Media pembelajaran yang menghubungkan <span className="font-black">sains</span> dengan{' '}
                        <span className="font-black">budaya lokal Madura</span> untuk siswa Sekolah Dasar.
                    </p>
                </div>
            </div>
        ),
    },
];

// ── Card 2: Tujuan ──
const TujuanPages: SlidePage[] = [
    {
        title: 'Tujuan E-Ensiklopedia',
        render: () => (
            <div className="space-y-3">
                <p className="text-xs text-gray-600 leading-relaxed bg-orange-50 p-3 rounded-xl border border-orange-100">
                    E-Ensiklopedia Etnosains Budaya Madura dikembangkan sebagai media pembelajaran IPAS yang menghubungkan
                    sains dengan budaya lokal. Melalui e-ensiklopedia ini, siswa mempelajari produk budaya Madura sebagai
                    sumber belajar sains yang dekat dengan kehidupan sehari-hari.
                </p>
                <div className="space-y-2">
                    {[
                        {
                            icon: <Brain className="w-4 h-4" />,
                            label: 'Berpikir Kritis',
                            desc: 'Melatih keterampilan mengamati, menanya, menjelaskan, dan menarik kesimpulan.',
                            bg: 'bg-purple-50 border-purple-200',
                            iconBg: 'bg-purple-500',
                        },
                        {
                            icon: <Heart className="w-4 h-4" />,
                            label: 'Sikap Tanggung Jawab',
                            desc: 'Menumbuhkan sikap tanggung jawab dalam menghargai dan menjaga kelestarian budaya.',
                            bg: 'bg-red-50 border-red-200',
                            iconBg: 'bg-red-500',
                        },
                        {
                            icon: <FlaskConical className="w-4 h-4" />,
                            label: 'Pembelajaran IPAS',
                            desc: 'Menghubungkan sains dengan konteks budaya lokal yang dekat dengan kehidupan siswa.',
                            bg: 'bg-blue-50 border-blue-200',
                            iconBg: 'bg-blue-600',
                        },
                    ].map((item) => (
                        <div key={item.label} className={`flex gap-3 items-start p-3 rounded-xl border ${item.bg}`}>
                            <div className={`${item.iconBg} text-white rounded-lg p-1.5 shrink-0`}>{item.icon}</div>
                            <div>
                                <p className="text-xs font-black text-gray-800">{item.label}</p>
                                <p className="text-[11px] text-gray-500 leading-snug">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="rounded-xl overflow-hidden border-2 border-orange-200 bg-orange-50">
                    <div className="h-20 flex items-center justify-center">
                        <img
                            src="/images/characters/cewe.png"
                            alt="Siswa mengamati budaya"
                            className="h-full object-contain"
                        />
                    </div>
                    <p className="text-center text-[10px] text-orange-600 font-semibold py-1.5">
                        🔍 Siswa mengamati produk budaya Madura
                    </p>
                </div>
            </div>
        ),
    },
];

// ── Card 3: Target Pengguna ──
const TargetPages: SlidePage[] = [
    {
        title: 'Target Pengguna',
        render: () => (
            <div className="space-y-3">
                <p className="text-xs text-gray-500 text-center italic bg-gray-50 p-2 rounded-xl">
                    E-ensiklopedia ini ditujukan untuk berbagai pengguna:
                </p>
                <div className="space-y-2">
                    {[
                        {
                            icon: <Smile className="w-5 h-5" />,
                            title: 'Siswa',
                            desc: 'Bagi siswa SD, e-ensiklopedia ini menjadi sumber belajar yang menarik dan mudah dipahami karena disajikan dengan bahasa sederhana serta dilengkapi gambar dan aktivitas belajar.',
                            bg: 'bg-blue-600',
                            ring: 'ring-blue-200',
                        },
                        {
                            icon: <GraduationCap className="w-5 h-5" />,
                            title: 'Guru',
                            desc: 'Bagi guru, e-ensiklopedia ini dapat digunakan sebagai referensi pembelajaran IPAS berbasis budaya lokal yang dekat dengan kehidupan siswa.',
                            bg: 'bg-orange-500',
                            ring: 'ring-orange-200',
                        },
                        {
                            icon: <Microscope className="w-5 h-5" />,
                            title: 'Peneliti',
                            desc: 'Bagi peneliti, e-ensiklopedia ini menjadi dokumentasi etnosains budaya Madura yang dapat dikembangkan lebih lanjut.',
                            bg: 'bg-purple-600',
                            ring: 'ring-purple-200',
                        },
                        {
                            icon: <Globe className="w-5 h-5" />,
                            title: 'Masyarakat',
                            desc: 'Bagi masyarakat umum, e-ensiklopedia ini dapat menjadi bacaan untuk mengenal budaya Madura secara lebih luas.',
                            bg: 'bg-green-600',
                            ring: 'ring-green-200',
                        },
                    ].map((item) => (
                        <div key={item.title} className="flex gap-3 items-start p-3 rounded-xl bg-gray-50 border border-gray-100">
                            <div className={`${item.bg} text-white rounded-full p-2 shrink-0 ring-4 ${item.ring}`}>
                                {item.icon}
                            </div>
                            <div>
                                <p className="text-xs font-black text-gray-800">{item.title}</p>
                                <p className="text-[11px] text-gray-500 leading-snug">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
];

// ── Card 4: Keunggulan ──
const KeunggulanPages: SlidePage[] = [
    {
        title: 'Keunggulan E-Ensiklopedia',
        render: () => (
            <div className="space-y-3">
                <div className="grid grid-cols-4 gap-2">
                    {[
                        { icon: <Laptop className="w-5 h-5" />, label: 'Akses Digital', color: 'bg-blue-500' },
                        { icon: <Compass className="w-5 h-5" />, label: 'Nav Mudah', color: 'bg-orange-500' },
                        { icon: <Zap className="w-5 h-5" />, label: 'Multimedia', color: 'bg-purple-500' },
                        { icon: <RefreshCw className="w-5 h-5" />, label: 'Diperbarui', color: 'bg-green-500' },
                    ].map((item) => (
                        <div key={item.label} className="flex flex-col items-center gap-1 text-center">
                            <div
                                className={`${item.color} text-white rounded-2xl p-2.5 w-11 h-11 flex items-center justify-center shadow`}
                            >
                                {item.icon}
                            </div>
                            <span className="text-[9px] font-bold text-gray-600 leading-tight">{item.label}</span>
                        </div>
                    ))}
                </div>
                <div className="space-y-2">
                    {[
                        'Materi dapat diakses melalui perangkat digital seperti handphone dan laptop.',
                        'Dilengkapi dengan aktivitas interaktif, kuis, dan tugas eksplorasi yang mendorong siswa aktif belajar.',
                        'Didukung oleh gambar, audio, dan video yang membantu siswa memahami materi.',
                        'Navigasi yang mudah sehingga siswa dapat memilih materi yang ingin dipelajari dengan cepat.',
                        'Konten dapat diperbarui sesuai perkembangan budaya dan kebutuhan pembelajaran.',
                    ].map((text, i) => (
                        <div key={i} className="flex gap-2 items-start p-2.5 rounded-xl bg-green-50 border border-green-100">
                            <span className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                                {i + 1}
                            </span>
                            <p className="text-[11px] text-gray-600 leading-snug">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
];

// ── Card 5: Petunjuk Penggunaan ──
const PetunjukPages: SlidePage[] = [
    {
        title: 'Petunjuk Penggunaan',
        render: () => (
            <div className="space-y-3">
                <p className="text-xs text-gray-600 leading-relaxed bg-purple-50 p-3 rounded-xl border border-purple-100">
                    E-ensiklopedia ini dapat dibaca secara berurutan atau langsung memilih produk budaya yang ingin
                    dipelajari. Siswa dianjurkan membaca setiap bagian dengan teliti, mengamati gambar, serta mencoba
                    menjawab pertanyaan dan aktivitas yang tersedia.
                </p>
                <p className="text-[11px] text-gray-500 leading-relaxed bg-gray-50 p-3 rounded-xl border border-gray-100">
                    Guru dapat membimbing siswa menggunakan e-ensiklopedia ini sebagai bahan diskusi dan tugas kelompok.
                </p>
                <div>
                    <p className="text-xs font-black text-gray-700 mb-2">Ikon Navigasi:</p>
                    <div className="grid grid-cols-4 gap-2">
                        {[
                            { icon: <Home className="w-4 h-4" />, label: 'Beranda', color: 'bg-blue-500' },
                            { icon: <BookOpen className="w-4 h-4" />, label: 'Produk', color: 'bg-orange-500' },
                            { icon: <ChevronLeft className="w-4 h-4" />, label: 'Kembali', color: 'bg-gray-400' },
                            { icon: <ChevronRight className="w-4 h-4" />, label: 'Lanjut', color: 'bg-green-500' },
                        ].map((item) => (
                            <div key={item.label} className="flex flex-col items-center gap-1">
                                <div
                                    className={`${item.color} text-white rounded-xl p-2 w-10 h-10 flex items-center justify-center shadow`}
                                >
                                    {item.icon}
                                </div>
                                <span className="text-[9px] font-bold text-gray-500">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-3 text-white text-center">
                    <p className="text-[11px] font-medium">
                        💡 <span className="font-black">Tips:</span> Baca setiap halaman dengan teliti dan aktif dalam
                        setiap aktivitas belajar!
                    </p>
                </div>
            </div>
        ),
    },
];

// ── Card 6: Pengenalan Etnosains ──
const EtnosainsPagesData: SlidePage[] = [
    {
        title: 'Pengenalan Etnosains',
        render: () => (
            <div className="space-y-3">
                <div className="flex gap-2 p-3 bg-teal-50 rounded-xl border border-teal-100 items-start">
                    <div className="bg-teal-600 text-white rounded-lg p-1.5 shrink-0">
                        <Lightbulb className="w-4 h-4" />
                    </div>
                    <p className="text-[11px] text-gray-600 leading-snug">
                        <span className="font-black text-teal-700">Etnosains</span> adalah cara mempelajari sains melalui
                        budaya dan kebiasaan masyarakat. Banyak kegiatan masyarakat mengandung konsep sains, seperti proses
                        memasak, mengolah bahan alam, dan membuat kerajinan.
                    </p>
                </div>
                <div className="flex gap-2 p-3 bg-blue-50 rounded-xl border border-blue-100 items-start">
                    <div className="bg-blue-600 text-white rounded-lg p-1.5 shrink-0">
                        <FlaskConical className="w-4 h-4" />
                    </div>
                    <p className="text-[11px] text-gray-600 leading-snug">
                        Materi mengintegrasikan <span className="font-black text-blue-700">IPA & IPS</span>: konsep
                        perubahan wujud, sumber daya alam, dan makhluk hidup sekaligus aspek sosial, budaya, dan ekonomi
                        masyarakat Madura.
                    </p>
                </div>
                <div className="flex gap-2 p-3 bg-orange-50 rounded-xl border border-orange-100 items-start">
                    <div className="bg-orange-500 text-white rounded-lg p-1.5 shrink-0">
                        <Heart className="w-4 h-4" />
                    </div>
                    <p className="text-[11px] text-gray-600 leading-snug">
                        Siswa diharapkan mampu menumbuhkan{' '}
                        <span className="font-black text-orange-700">rasa cinta dan bangga</span> terhadap budaya lokal,
                        memiliki sikap ilmiah, dan bertanggung jawab terhadap pelestarian budaya.
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    {[
                        { icon: <FlaskConical className="w-4 h-4" />, label: 'IPAS', color: 'bg-blue-500' },
                        { icon: <Globe className="w-4 h-4" />, label: 'Budaya', color: 'bg-orange-500' },
                        { icon: <Brain className="w-4 h-4" />, label: 'Saintifik', color: 'bg-teal-500' },
                    ].map((item) => (
                        <div
                            key={item.label}
                            className="flex flex-col items-center gap-1.5 p-2 bg-gray-50 rounded-xl border border-gray-100"
                        >
                            <div className={`${item.color} text-white rounded-lg p-2`}>{item.icon}</div>
                            <span className="text-[10px] font-bold text-gray-600">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
];

/* ─────────────────────────────────────────
   CARD CONFIG
───────────────────────────────────────── */
const CARDS = [
    {
        icon: <Info className="w-7 h-7" />,
        label: 'Identitas',
        sublabel: 'Judul, Penulis & Sasaran',
        grad: 'from-blue-500 to-blue-700',
        shadow: 'hover:shadow-blue-400/40',
        headerBg: 'bg-[#1e3a8a]',
        dots: ['bg-orange-400', 'bg-yellow-400', 'bg-blue-300'],
        pages: IdentitasPages,
    },
    {
        icon: <FlaskConical className="w-7 h-7" />,
        label: 'Tujuan',
        sublabel: 'Tujuan E-Ensiklopedia',
        grad: 'from-orange-500 to-red-500',
        shadow: 'hover:shadow-orange-400/40',
        headerBg: 'bg-orange-500',
        dots: ['bg-orange-200', 'bg-yellow-300', 'bg-white/60'],
        pages: TujuanPages,
    },
    {
        icon: <Users className="w-7 h-7" />,
        label: 'Target Pengguna',
        sublabel: 'Siswa, Guru & Peneliti',
        grad: 'from-yellow-400 to-amber-500',
        shadow: 'hover:shadow-yellow-400/40',
        headerBg: 'bg-yellow-500',
        dots: ['bg-yellow-200', 'bg-orange-300', 'bg-white/60'],
        pages: TargetPages,
    },
    {
        icon: <Star className="w-7 h-7" />,
        label: 'Keunggulan',
        sublabel: 'Fitur & Kelebihan',
        grad: 'from-green-500 to-teal-600',
        shadow: 'hover:shadow-green-400/40',
        headerBg: 'bg-green-600',
        dots: ['bg-green-300', 'bg-yellow-300', 'bg-white/60'],
        pages: KeunggulanPages,
    },
    {
        icon: <BookOpen className="w-7 h-7" />,
        label: 'Petunjuk',
        sublabel: 'Cara Penggunaan',
        grad: 'from-purple-500 to-pink-600',
        shadow: 'hover:shadow-purple-400/40',
        headerBg: 'bg-purple-600',
        dots: ['bg-purple-300', 'bg-pink-300', 'bg-white/60'],
        pages: PetunjukPages,
    },
    {
        icon: <Brain className="w-7 h-7" />,
        label: 'Etnosains',
        sublabel: 'Pengenalan Etnosains',
        grad: 'from-teal-500 to-cyan-600',
        shadow: 'hover:shadow-teal-400/40',
        headerBg: 'bg-teal-600',
        dots: ['bg-teal-300', 'bg-cyan-300', 'bg-white/60'],
        pages: EtnosainsPagesData,
    },
];

/* ─────────────────────────────────────────
   EXPORTED COMPONENT
───────────────────────────────────────── */
export const AboutCards = () => {
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const [pageIndex, setPageIndex] = useState(0);

    const open = (idx: number) => { setActiveCard(idx); setPageIndex(0); };
    const close = () => setActiveCard(null);

    const card = activeCard !== null ? CARDS[activeCard] : null;
    const pages = card?.pages ?? [];
    const currentPage = pages[pageIndex];
    const PageContent = currentPage?.render;

    return (
        <>
            {/* 6-card grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {CARDS.map((c, i) => (
                    <motion.button
                        key={c.label}
                        whileHover={{ y: -5, scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        onClick={() => open(i)}
                        className={`
                            relative overflow-hidden rounded-[1.5rem]
                            bg-gradient-to-br ${c.grad}
                            shadow-lg ${c.shadow} hover:shadow-2xl
                            transition-shadow duration-300
                            text-white text-left cursor-pointer w-full
                        `}
                    >
                        <div className="relative z-10 p-5 flex flex-col items-start gap-3">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl p-2.5 flex items-center justify-center shadow-inner">
                                {c.icon}
                            </div>
                            <div>
                                <p className="font-black text-base leading-tight">{c.label}</p>
                                <p className="text-[11px] font-medium text-white/75 leading-tight mt-0.5">{c.sublabel}</p>
                            </div>
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full">
                                Buka <ChevronRight className="w-3 h-3" />
                            </span>
                        </div>
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full pointer-events-none" />
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full pointer-events-none" />
                    </motion.button>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {activeCard !== null && card && PageContent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 pt-20"
                        onClick={close}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                            className="bg-white rounded-[1.5rem] shadow-2xl w-full max-w-sm overflow-hidden flex flex-col max-h-[88vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Window Header */}
                            <div className={`${card.headerBg} px-4 py-3 flex items-center justify-between shrink-0`}>
                                <h3 className="text-sm font-black text-white tracking-wide truncate pr-2">
                                    {currentPage.title}
                                </h3>
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1 bg-black/20 px-2 py-1 rounded-full">
                                        {card.dots.map((d, i) => (
                                            <div key={i} className={`w-2 h-2 rounded-full ${d}`} />
                                        ))}
                                    </div>
                                    <button
                                        onClick={close}
                                        className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                                    >
                                        <X className="w-3.5 h-3.5 text-white" />
                                    </button>
                                </div>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto p-4">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={pageIndex}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.18 }}
                                    >
                                        <PageContent />
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Footer Nav */}
                            <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t border-gray-100 shrink-0">
                                <button
                                    onClick={() => setPageIndex(Math.max(0, pageIndex - 1))}
                                    disabled={pageIndex === 0}
                                    className="flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-[#1e3a8a] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                                >
                                    <ChevronLeft className="w-4 h-4" /> Kembali
                                </button>

                                {pages.length > 1 && (
                                    <span className="text-[10px] text-gray-400 font-medium">
                                        {pageIndex + 1} / {pages.length}
                                    </span>
                                )}

                                {pageIndex < pages.length - 1 ? (
                                    <button
                                        onClick={() => setPageIndex(Math.min(pages.length - 1, pageIndex + 1))}
                                        className="flex items-center gap-1 text-xs font-bold text-[#1e3a8a] hover:text-blue-800 transition-colors"
                                    >
                                        Lanjut <ChevronRight className="w-4 h-4" />
                                    </button>
                                ) : (
                                    <button
                                        onClick={close}
                                        className="text-xs font-bold text-white bg-[#1e3a8a] hover:bg-blue-800 px-3 py-1.5 rounded-lg transition-colors"
                                    >
                                        Tutup
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
