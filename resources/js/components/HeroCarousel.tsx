import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroCarouselProps {
    images: string[];
}

export const HeroCarousel = ({ images }: HeroCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full max-w-sm aspect-square mx-auto">
            {/* Outer Frame (Border outside) - Tilted Left */}
            <div className="absolute -inset-4 z-20 pointer-events-none border-4 border-orange-400 rounded-[2.5rem] shadow-sm -rotate-3"></div>

            {/* Inner Content - Image - Tilted Right Counter-balance or Parallel? User said "miring seperti about" */}
            {/* About uses: Border -rotate-3, Image Container rotate-3. Let's try that to create the 'messy' vibe */}
            <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-white shadow-xl rotate-2 border-4 border-white">
                <AnimatePresence mode="popLayout">
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt={`Explore Budaya Madura ${currentIndex + 1}`}
                    />
                </AnimatePresence>

                {/* Optional: Playful abstract shapes overlay */}
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
            </div>

            {/* Decorative Elements outside the border */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-blue-400 rounded-full opacity-50 z-0 blur-md"
            ></motion.div>
            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full opacity-50 z-0 blur-md"
            ></motion.div>
        </div>
    );
};
