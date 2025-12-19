import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

// Mock Data (Shared source ideally)
const articles = [
    {
        id: 1,
        title: "Kriz Yönetiminde Liderin Rolü",
        excerpt: "Beklenmedik durumlarla karşılaşıldığında sakinliği korumak ve takıma güven vermek neden her şeyden önemlidir? Kriz anları liderlerin gerçek sınavıdır.",
        date: "19 Aralık 2024",
        category: "Liderlik",
        readTime: "5 dk okuma",
    },
    {
        id: 2,
        title: "Geleceğin Şirket Kültürü",
        excerpt: "Hiyerarşik düzenin yerini alan şeffaf ve katılımcı yönetim anlayışı, şirketlerin başarısını nasıl etkiliyor? Modern ofislerde güven ortamı.",
        date: "12 Aralık 2024",
        category: "Yönetim",
        readTime: "7 dk okuma",
    },
    {
        id: 3,
        title: "Tecrübe ve Yenilik Arasındaki Denge",
        excerpt: "Geleneksel değerleri korurken dijital dönüşüm çağına ayak uydurmak mümkün mü? İnovasyonu köklü tecrübelerle harmanlamak.",
        date: "05 Aralık 2024",
        category: "Vizyon",
        readTime: "4 dk okuma",
    },
    {
        id: 4,
        title: "Etkili İletişim Sanatı",
        excerpt: "Bir yönetici için dinlemek, konuşmaktan neden daha önemlidir? Takım içi iletişimi güçlendirmenin yolları.",
        date: "01 Aralık 2024",
        category: "İletişim",
        readTime: "6 dk okuma",
    },
];

export default function BlogPage() {
    return (
        <main className="py-32 bg-slate-50 dark:bg-slate-900 min-h-screen">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                        Tüm Yazılar
                    </h1>
                    <p className="text-muted text-lg">
                        İş dünyası, liderlik ve vizyon üzerine kaleme aldığım düşüncelerim.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {articles.map((article) => (
                        <article
                            key={article.id}
                            className="bg-white dark:bg-slate-950 p-8 rounded-sm shadow-sm hover:shadow-lg transition-all border border-transparent hover:border-primary/10 flex flex-col items-start"
                        >
                            <div className="flex items-center gap-3 text-xs text-muted mb-4 uppercase tracking-wider font-medium">
                                <span className="text-secondary bg-secondary/10 px-2 py-1 rounded-sm">{article.category}</span>
                                <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                            </div>

                            <h2 className="text-2xl font-serif font-bold text-foreground mb-4 hover:text-primary transition-colors">
                                <Link href={`/blog/${article.id}`}>
                                    {article.title}
                                </Link>
                            </h2>

                            <p className="text-muted leading-relaxed mb-6 line-clamp-3">
                                {article.excerpt}
                            </p>

                            <Link
                                href={`/blog/${article.id}`}
                                className="mt-auto text-sm font-bold uppercase tracking-wide text-primary hover:text-secondary flex items-center gap-2 group"
                            >
                                Devamını Oku <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
