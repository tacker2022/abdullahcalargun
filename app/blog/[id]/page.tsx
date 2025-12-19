import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { notFound } from "next/navigation";

// Mock Data Source (In real app, fetch from DB/CMS)
const articles = [
    {
        id: 1,
        title: "Kriz Yönetiminde Liderin Rolü",
        content: `
      <p>Kriz anları, bir liderin gerçek karakterinin ortaya çıktığı en kritik zamanlardır. Beklenmedik durumlarla karşılaşıldığında sakinliği korumak, sadece liderin kendi psikolojisi için değil, tüm takımın motivasyonu için hayati önem taşır.</p>
      <h3>Sakinlik Güçtür</h3>
      <p>Panik, bulaşıcıdır. Ancak sükunet de öyle. Bir lider kriz anında paniğe kapılırsa, bu dalga dalga tüm organizasyona yayılır. Aksine, olaylara rasyonel ve soğukkanlı yaklaşan bir lider, ekibine "kontrol altında" mesajı verir.</p>
      <h3>Şeffaflık ve Güven</h3>
      <p>Kriz dönemlerinde bilgi akışı hayati önem taşır. Liderler, durumu takımlarıyla açıkça paylaşmalı, neyin bilindiğini ve neyin bilinmediğini dürüstçe ifade etmelidir. Belirsizlik korku yaratır, şeffaflık ise güven.</p>
      <p>Sonuç olarak, kriz yönetimi teknik bir beceri olduğu kadar, psikolojik bir süreçtir. Liderin duruşu, krizin sonucunu belirleyen en önemli faktördür.</p>
    `,
        date: "19 Aralık 2024",
        category: "Liderlik",
        readTime: "5 dk okuma",
    },
    {
        id: 2,
        title: "Geleceğin Şirket Kültürü",
        content: "<p>İçerik hazırlanıyor...</p>",
        date: "12 Aralık 2024",
        category: "Yönetim",
        readTime: "7 dk okuma",
    },
    // ... add more if needed or handle generic
];

export default function BlogPost({ params }: { params: { id: string } }) {
    const article = articles.find((a) => a.id === Number(params.id));

    // Fallback for demo purposes if ID not found in mock list, show generic content
    const displayArticle = article || {
        id: 0,
        title: "Örnek Yazı Başlığı",
        content: "<p>Bu yazı henüz eklenmemiştir veya yapım aşamasındadır. Lütfen daha sonra tekrar ziyaret ediniz.</p>",
        date: "Tarih Yok",
        category: "Genel",
        readTime: "1 dk okuma",
    };

    return (
        <main className="py-32 bg-white dark:bg-slate-950 min-h-screen">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">

                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-8"
                >
                    <ArrowLeft size={16} /> Tüm Yazılara Dön
                </Link>

                <header className="mb-10 text-center">
                    <div className="flex items-center justify-center gap-4 text-sm text-secondary font-bold uppercase tracking-widest mb-4">
                        <span>{displayArticle.category}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
                        {displayArticle.title}
                    </h1>
                    <div className="flex items-center justify-center gap-6 text-muted border-y border-slate-100 dark:border-slate-900 py-4">
                        <span className="flex items-center gap-2"><User size={16} /> Abdullah Çalargün</span>
                        <span className="flex items-center gap-2"><Calendar size={16} /> {displayArticle.date}</span>
                        <span className="flex items-center gap-2"><Clock size={16} /> {displayArticle.readTime}</span>
                    </div>
                </header>

                <article className="prose prose-lg prose-slate dark:prose-invert mx-auto font-serif">
                    {/* Dangerous HTML just for demo simplicity */}
                    <div dangerouslySetInnerHTML={{ __html: displayArticle.content }} />
                </article>
            </div>
        </main>
    );
}
