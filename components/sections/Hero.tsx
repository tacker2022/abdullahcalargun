"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center bg-background overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-100 to-gray-200 dark:from-background dark:via-slate-900 dark:to-slate-800 z-0" />

            {/* Abstract Shapes */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <h2 className="text-secondary font-medium tracking-widest uppercase mb-4 text-sm md:text-base">
                            Yönetici • Lider • Düşünür
                        </h2>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight mb-6">
                        Yönetim Sanatı ve <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gray-600 dark:from-white dark:to-gray-400">
                            Liderlik Vizyonu
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted mb-8 max-w-lg leading-relaxed">
                        30 yılı aşkın yöneticilik tecrübesi, hayata dair notlar ve gelecek vizyonu üzerine bir yolculuk.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="#blog"
                            className="group px-8 py-3 bg-primary text-white dark:text-slate-900 rounded-sm font-medium hover:bg-primary/90 transition-all flex items-center gap-2"
                        >
                            Yazıları Oku
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#about"
                            className="px-8 py-3 border border-primary/20 hover:border-primary text-foreground rounded-sm font-medium transition-all"
                        >
                            Hakkımda
                        </Link>
                    </div>
                </motion.div>

                {/* Image / Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative h-[400px] md:h-[600px] w-full block mt-8 md:mt-0"
                >
                    {/* Image Frame */}
                    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 rounded-sm overflow-hidden shadow-2xl">
                        <img
                            src="/abdullah-calargun.jpg"
                            alt="Abdullah Çalargün"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>

                    {/* Floating Card */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-6 shadow-xl border-l-4 border-secondary max-w-xs z-20"
                    >
                        <p className="font-serif text-lg italic text-foreground">
                            "Gerçek liderlik, başkalarının başarısına yol açmaktır."
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
