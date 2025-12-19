"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Instagram, Linkedin, Phone, Code } from "lucide-react";
import Link from "next/link";

export function DeveloperSignature() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-center mt-8 pb-4">
            <div
                className="text-xs text-gray-500 font-medium cursor-pointer hover:text-primary transition-colors flex items-center justify-center gap-1.5 opacity-60 hover:opacity-100"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                onClick={() => setIsOpen(!isOpen)}
            >
                <Code size={12} />
                <span>Developed by</span>
                <span className="text-gray-300 font-bold">Talha Çalargün</span>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-72 bg-[#1a1f2e] border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden z-50"
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        {/* Header / Banner */}
                        <div className="h-20 bg-gradient-to-r from-primary/20 to-secondary/20 relative">
                            <div className="absolute inset-0 bg-black/20" />
                        </div>

                        {/* Profile Content */}
                        <div className="px-6 pb-6 -mt-10 relative">
                            <div className="w-20 h-20 mx-auto rounded-full border-4 border-[#1a1f2e] bg-gray-800 shadow-lg overflow-hidden flex items-center justify-center">
                                <img src="/talha.jpg" alt="Talha Çalargün" className="w-full h-full object-cover" />
                            </div>

                            <div className="text-center mt-3">
                                <h3 className="text-white font-bold text-lg">Talha Çalargün</h3>
                                <p className="text-[10px] uppercase tracking-widest text-secondary font-semibold mt-1">
                                    Digital Systems & Technology Developer
                                </p>
                            </div>

                            {/* Links */}
                            <div className="flex items-center justify-center gap-4 mt-6">
                                <SocialLink href="https://www.linkedin.com/in/talhaemrecalargun/" icon={<Linkedin size={18} />} label="LinkedIn" />
                                <SocialLink href="https://www.instagram.com/talhacalargun/" icon={<Instagram size={18} />} label="Instagram" />
                                <SocialLink href="https://api.whatsapp.com/send/?phone=905372939874&text&type=phone_number&app_absent=0" icon={<Phone size={18} />} label="WhatsApp" />
                                <SocialLink href="https://talhacalargun.com/" icon={<Globe size={18} />} label="Website" />
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1a1f2e] rotate-45 border-r border-b border-gray-700/50" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-secondary hover:scale-110 transition-all duration-200"
            aria-label={label}
        >
            {icon}
        </Link>
    );
}
