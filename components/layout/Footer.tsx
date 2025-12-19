import { Linkedin, Twitter, Mail, Facebook, Instagram } from "lucide-react";
import { DeveloperSignature } from "@/components/ui/DeveloperSignature";

export function Footer() {
    return (
        <footer className="bg-slate-950 text-white py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
                    {/* ... content ... */}
                </div>

                <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Abdullah Çalargün. Tüm hakları saklıdır.</p>
                    <DeveloperSignature />
                </div>
            </div>
        </footer>
    );
}
