"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/905336142151"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, type: "spring" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors group"
            aria-label="WhatsApp ile iletişime geç"
        >
            <MessageCircle size={28} fill="white" className="text-white" />
            <span className="absolute right-full mr-3 bg-white dark:bg-slate-800 text-foreground px-3 py-1 rounded text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                WhatsApp'tan Yazın
            </span>
        </motion.a>
    );
}
