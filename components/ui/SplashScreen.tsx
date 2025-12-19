"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function SplashScreen() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Show for 2.5 seconds then fade out
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="splash-screen"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950 text-white"
                >
                    <div className="text-center relative px-6">
                        {/* Top Line Decor */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="w-24 h-[2px] bg-secondary mx-auto mb-8"
                        />

                        {/* Animating Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-4xl md:text-7xl font-serif font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400"
                        >
                            Abdullah Çalargün
                        </motion.h1>

                        {/* Animating Subtitle with staggered letters could be nice but let's keep it elegant simple */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.0, duration: 1 }}
                            className="text-secondary/80 text-sm md:text-lg uppercase tracking-[0.3em] font-medium"
                        >
                            Yönetim Sanatı & Vizyon
                        </motion.p>

                        {/* Bottom Line Decor */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                            className="w-24 h-[2px] bg-secondary mx-auto mt-8"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
