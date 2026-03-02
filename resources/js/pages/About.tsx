import { AboutCards } from '../components/AboutCards';

const About = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-[#1e3a8a] pb-20 relative overflow-hidden">

            {/* Header Section */}
            <div className="hero pt-20 pb-24 mb-10 relative overflow-hidden">
                <div className="hero-content flex-col lg:flex-row justify-between w-full px-6 lg:px-20 gap-12 relative z-10">
                    <div className="max-w-3xl text-left">
                        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight text-[#1e3a8a] drop-shadow-sm">
                            Ensiklopedia <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                Etnosains Madura
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-800/80 leading-relaxed max-w-2xl font-medium">
                            Pembelajaran IPAS Berbasis Budaya Lokal<br />untuk Siswa Sekolah Dasar.
                        </p>
                    </div>

                    <div className="relative flex justify-center lg:justify-end w-full lg:w-auto">
                        <div className="absolute w-72 h-72 bg-yellow-200/50 rounded-full blur-3xl animate-pulse" />
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <div className="absolute -inset-3 border-[6px] border-yellow-400 rounded-[3rem] -rotate-3" />
                            <div className="w-full h-full rounded-[2.5rem] overflow-hidden rotate-3 shadow-xl border-4 border-white">
                                <img
                                    src="/images/characters/cewe.png"
                                    alt="Teacher Karakter"
                                    className="object-cover scale-110"
                                    style={{ transformOrigin: 'top center' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Wave */}
                <div className="absolute bottom-0 left-0 w-full leading-none">
                    <svg className="w-full h-16 md:h-24" preserveAspectRatio="none" viewBox="0 0 1440 320">
                        <path fill="#fff7ed" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
                    </svg>
                </div>
            </div>

            {/* 6 Cards */}
            <div className="container mx-auto px-6 max-w-5xl relative z-20">
                <AboutCards />
            </div>
        </div>
    );
};

export default About;
