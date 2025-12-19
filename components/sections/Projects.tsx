"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Real Project Slides
const slides = [
    {
        id: 1,
        image: "/slides/slide1.jpg",
        title: "Proje Sunumu - Sayfa 1",
    },
    {
        id: 2,
        image: "/slides/slide2.jpg",
        title: "Proje Sunumu - Sayfa 2",
    },
    {
        id: 3,
        image: "/slides/slide3.jpg",
        title: "Proje Sunumu - Sayfa 3",
    },
    {
        id: 4,
        image: "/slides/slide4.jpg",
        title: "Proje Sunumu - Sayfa 4",
    },
    {
        id: 5,
        image: "/slides/slide5.jpg",
        title: "Proje Sunumu - Sayfa 5",
    },
];

export function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <section id="projects" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center mb-16">
                    <h2 className="text-secondary font-medium tracking-widest uppercase mb-4 text-sm">
                        Projeler & Çalışmalar
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                        Öne Çıkan Sunumlar
                    </h3>
                </div>

                <div className="relative max-w-5xl mx-auto aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden group">
                    {/* Main Slide Image */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex items-center justify-center bg-black"
                        >
                            <img
                                src={slides[currentIndex].image}
                                alt={slides[currentIndex].title}
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
                    >
                        <ChevronRight size={32} />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-white scale-110" : "bg-white/40 hover:bg-white/60"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                <p className="text-center mt-8 text-muted italic">
                    Sunum sayfaları arasında geçiş yapmak için sağ/sol okları kullanabilirsiniz.
                </p>

            </div>
        </section>
    );
}
