import { Head, Link } from '@inertiajs/react';
import { BookOpen, ArrowRight } from 'lucide-react';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome to E-Ensiklopedia" />
            <div className="min-h-screen bg-base-200 flex items-center justify-center font-sans text-base-content">
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <div className="flex justify-center mb-6">
                                <div className="p-4 bg-primary/10 rounded-full">
                                    <BookOpen className="w-16 h-16 text-primary" />
                                </div>
                            </div>
                            <h1 className="text-5xl font-bold font-serif text-primary">E-Ensiklopedia</h1>
                            <h2 className="text-2xl font-semibold mt-2 text-secondary">Etnosains Madura</h2>
                            <p className="py-6 text-lg opacity-80">
                                Selamat datang di aplikasi pembelajaran sains berbasis budaya Madura.
                                Temukan keunikan tradisi lokal dan sains di baliknya.
                            </p>
                            <div className="flex flex-col gap-4 items-center">
                                <Link
                                    href="/"
                                    className="btn btn-primary btn-lg rounded-full shadow-lg gap-2 w-full sm:w-auto"
                                >
                                    Masuk ke Aplikasi <ArrowRight className="w-5 h-5" />
                                </Link>
                                <p className="text-xs text-base-content/50 mt-4">
                                    Dikembangkan untuk Pendidikan Dasar (SD/MI)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
