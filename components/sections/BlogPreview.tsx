"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

// Mock Data
const articles = [
    {
        id: 1,
        title: "Kriz Yönetiminde Liderin Rolü",
        excerpt: "Beklenmedik durumlarla karşılaşıldığında sakinliği korumak ve takıma güven vermek neden her şeyden önemlidir?",
        date: "19 Aralık 2024",
        category: "Liderlik",
        readTime: "5 dk okuma",
    },
    {
        id: 2,
        title: "Geleceğin Şirket Kültürü",
        excerpt: "Hiyerarşik düzenin yerini alan şeffaf ve katılımcı yönetim anlayışı, şirketlerin başarısını nasıl etkiliyor?",
        date: "12 Aralık 2024",
        category: "Yönetim",
        readTime: "7 dk okuma",
    },
    {
        id: 3,
        title: "Tecrübe ve Yenilik Arasındaki Denge",
        excerpt: "Geleneksel değerleri korurken dijital dönüşüm çağına ayak uydurmak mümkün mü?",
        date: "05 Aralık 2024",
        category: "Vizyon",
        readTime: "4 dk okuma",
    },
];

export function BlogPreview() {
    return (
        <section id="blog" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 md:px-6">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-secondary font-medium tracking-widest uppercase mb-4 text-sm">
                            Köşe Yazıları & Düşünceler
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                            İş Dünyası ve Hayat Üzerine Notlar
                        </h3>
                    </div>
                    <Link
                        href="/blog"
                        className="group flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors"
                    >
                        Tüm Yazıları Gör <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white dark:bg-slate-950 p-8 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/10 group"
                        >
                            <div className="flex items-center justify-between text-xs text-muted mb-4 uppercase tracking-wider font-medium">
                                <span className="text-secondary">{article.category}</span>
                                <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                            </div>

                            <h4 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                <Link href={`/blog/${article.id}`}>
                                    {article.title}
                                </Link>
                            </h4>

                            <p className="text-muted leading-relaxed mb-6 line-clamp-3">
                                {article.excerpt}
                            </p>

                            <Link
                                href={`/blog/${article.id}`}
                                className="text-sm font-bold uppercase tracking-wide text-primary hover:text-secondary flex items-center gap-2"
                            >
                                Devamını Oku <span className="text-lg leading-3">›</span>
                            </Link>
                        </motion.article>
                    ))}
                </div>

            </div>
        </section>
    );
}
