"use client";

import { motion } from "framer-motion";

const keywords = [
    "YÖN VEREN LİDERLİK",
    "•",
    "VİZYONER YÖNETİM",
    "•",
    "KRİZ YÖNETİMİ UZMANLIĞI",
    "•",
    "GELECEĞİ İNŞA ETMEK",
    "•",
    "STRATEJİK PLANLAMA",
    "•",
    "İNSAN ODAKLI YAKLAŞIM",
    "•",
    "SÜRDÜRÜLEBİLİR BAŞARI",
    "•",
];

export function LeadershipTicker() {
    return (
        <section className="py-8 bg-secondary border-y border-secondary/20 overflow-hidden relative">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                    className="flex gap-8 items-center"
                >
                    {/* Repeat content enough times to fill width and loop smoothly */}
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex gap-8 items-center">
                            {keywords.map((word, index) => (
                                <span
                                    key={index}
                                    className="text-2xl md:text-3xl font-serif font-bold text-primary dark:text-slate-900 tracking-widest"
                                >
                                    {word}
                                </span>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
