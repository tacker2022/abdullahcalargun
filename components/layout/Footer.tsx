import Link from "next/link";
import { Linkedin, Twitter, Mail, Facebook, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-950 text-white py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
                    <div className="md:col-span-2">
                        <Link href="/" className="text-3xl font-serif font-bold tracking-tight mb-6 block">
                            Abdullah Çalargün
                        </Link>
                        <p className="text-gray-400 max-w-sm leading-relaxed">
                            Yöneticilik, liderlik ve hayat üzerine tecrübelerimi, vizyonumu ve düşüncelerimi paylaştığım dijital köşe.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-serif font-semibold mb-6 flex items-center gap-2">
                            <span className="w-8 h-[1px] bg-secondary"></span> Hızlı Erişim
                        </h4>
                        <ul className="space-y-4">
                            <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors">Hakkımda</Link></li>
                            <li><Link href="#blog" className="text-gray-400 hover:text-white transition-colors">Yazılar</Link></li>
                            <li><Link href="#vision" className="text-gray-400 hover:text-white transition-colors">Vizyon</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-serif font-semibold mb-6 flex items-center gap-2">
                            <span className="w-8 h-[1px] bg-secondary"></span> İletişim
                        </h4>
                        <ul className="space-y-4">
                            <li className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                                <Mail size={16} /> abdullah.calargun@gmail.com
                            </li>
                            <li className="flex gap-4 mt-6">
                                <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                                    <Linkedin size={20} />
                                </Link>
                                <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                                    <Twitter size={20} />
                                </Link>
                                <Link href="https://www.instagram.com/abdullahcalargun/" target="_blank" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                                    <Instagram size={20} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Abdullah Çalargün. Tüm hakları saklıdır.</p>
                    <p className="mt-2 md:mt-0">Talha Çalargün tarafından tasarlanmıştır.</p>
                </div>
            </div>
        </footer>
    );
}
