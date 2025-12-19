"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Music } from "lucide-react";

export function BackgroundMusic() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Erik Satie - Gymnopédie No.1 (Classical/Calm/Public Domain style placeholder)
    // Source: A common classical piece suitable for leadership/thoughtful atmosphere
    const musicSrc = "https://ia800504.us.archive.org/11/items/ErikSatieGymnopdieNo.1/Erik%20Satie%20-%20Gymnop%C3%A9die%20No.%201.mp3";

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch((err) => console.log("Audio play failed:", err));
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            <audio ref={audioRef} src={musicSrc} loop />

            <motion.button
                onClick={togglePlay}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-foreground dark:text-white px-5 py-3 rounded-full shadow-lg transition-all group overflow-hidden"
            >
                <div className="relative">
                    {isPlaying ? (
                        <Volume2 size={24} className="text-secondary animate-pulse" />
                    ) : (
                        <VolumeX size={24} className="text-muted" />
                    )}

                    {/* Visualizer bars animation when playing */}
                    {isPlaying && (
                        <div className="absolute -top-1 -right-1 flex gap-0.5 items-end h-3">
                            <motion.div animate={{ height: [2, 8, 2] }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-0.5 bg-secondary rounded-full" />
                            <motion.div animate={{ height: [2, 10, 2] }} transition={{ repeat: Infinity, duration: 0.7 }} className="w-0.5 bg-secondary rounded-full" />
                            <motion.div animate={{ height: [2, 6, 2] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-0.5 bg-secondary rounded-full" />
                        </div>
                    )}
                </div>

                <div className="text-left leading-tight">
                    <span className="block text-xs font-bold uppercase tracking-wider text-secondary">
                        {isPlaying ? "Çalıyor" : "Sesli Gez"}
                    </span>
                    <span className="text-xs opacity-70 font-serif italic">
                        Gymnopédie No.1
                    </span>
                </div>
            </motion.button>
        </>
    );
}
