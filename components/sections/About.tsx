"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const expertise = [
    "Stratejik Yönetim & Planlama",
    "Kriz Yönetimi & Liderlik",
    "Kurumsal İletişim",
    "Takım Koçluğu & Mentörlük",
];

export function About() {
    return (
        <section id="about" className="py-20 md:py-32 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-secondary font-medium tracking-widest uppercase mb-4 text-sm">
                            Hakkımda
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                            Tecrübe ile Şekillenmiş Öngörü
                        </h3>

                        <div className="space-y-4 text-muted text-lg leading-relaxed">
                            <p>
                                İş dünyasında geçen 30 yılın ardından öğrendiğim en önemli ders; başarının varış noktası değil, yolculuğun kendisi olduğudur.
                                Her krizin içinde bir fırsat, her zorluğun arkasında bir bilgelik saklıdır.
                            </p>
                            <p>
                                Yöneticilik kariyerim boyunca, sadece rakamlara değil, insanlara ve değerlere odaklandım.
                                Gerçek liderliğin, ünvanlardan değil, sorumluluk alma cesaretinden geldiğine inanıyorum.
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {expertise.map((item, index) => (
                                <div key={index} className="flex items-center gap-3 text-foreground font-medium">
                                    <CheckCircle2 className="text-secondary w-5 h-5 flex-shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Abstract Visual or Quote */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="bg-slate-50 dark:bg-slate-900 p-10 md:p-14 rounded-sm border-l-4 border-primary relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                            <div className="absolute top-0 right-0 p-8 opacity-10 font-serif text-9xl text-primary select-none">
                                "
                            </div>

                            <blockquote className="relative z-10 text-2xl md:text-3xl font-serif text-foreground leading-normal italic">
                                "Bir liderin en büyük mirası, yetiştirdiği diğer liderlerdir. Geleceği inşa etmek, bugünün insanına yatırım yapmaktan geçer."
                            </blockquote>

                            <div className="mt-8 flex items-center gap-4">
                                <div className="w-12 h-1px bg-secondary"></div>
                                <span className="text-sm font-bold uppercase tracking-wider text-primary">Abdullah Çalargün</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
