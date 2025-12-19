"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-20 md:py-32 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-secondary font-medium tracking-widest uppercase mb-4 text-sm">
                            İletişim
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                            Tanışmak ve İşbirliği İçin
                        </h3>
                        <p className="text-muted text-lg leading-relaxed mb-8">
                            Projeleriniz, danışmanlık talepleriniz veya sadece bir kahve eşliğinde sohbet etmek için benimle iletişime geçebilirsiniz.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-primary">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted uppercase tracking-wider font-bold">E-Posta</p>
                                    <a href="mailto:abdullah.calargun@gmail.com" className="text-lg font-medium hover:text-secondary transition-colors">
                                        abdullah.calargun@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-primary">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted uppercase tracking-wider font-bold">Telefon / WhatsApp</p>
                                    <a
                                        href="https://wa.me/905336142151"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg font-medium hover:text-secondary transition-colors"
                                    >
                                        +90 (533) 614 21 51
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-primary">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted uppercase tracking-wider font-bold">Konum</p>
                                    <p className="text-lg font-medium">
                                        İstanbul, Türkiye
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-10 rounded-sm border border-slate-200 dark:border-slate-800">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Adınız Soyadınız</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-sm focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Ad Soyad"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">E-Posta Adresiniz</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-sm focus:outline-none focus:border-primary transition-colors"
                                        placeholder="ornek@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Konu</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-sm focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Mesajınızın konusu"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Mesajınız</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-sm focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="Size nasıl yardımcı olabilirim?"
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-primary text-white dark:text-slate-900 font-bold py-4 rounded-sm hover:bg-primary/90 transition-all uppercase tracking-widest text-sm"
                            >
                                Gönder
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
