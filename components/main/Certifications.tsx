"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { certificates } from "@/constants";


const Certifications = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    // Body scroll lock
    useEffect(() => {
        if (selectedId !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedId]);

    return (
        <section id="certifications" className="flex flex-col items-center justify-center py-20 z-[20]">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                Certifications & Achievements
            </h1>

            <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
                {certificates.map((cert, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="cursor-pointer relative overflow-hidden rounded-2xl border border-[#2A0E61] bg-[#030014] p-4 flex flex-col items-center group"
                        onClick={() => setSelectedId(index)}
                    >
                        <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl">
                            <Image
                                src={cert.image}
                                alt={cert.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold">
                                View Full Certificate
                            </div>
                        </div>
                        <h2 className="text-xl font-bold text-white text-center mb-2">{cert.title}</h2>
                        <p className="text-purple-400 text-sm mb-1">{cert.issuer}</p>
                        <p className="text-gray-500 text-xs">{cert.date}</p>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 pt-20"
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative bg-[#030014] border border-[#7042f88b] rounded-3xl p-2 max-w-4xl w-full h-auto max-h-[75vh] flex items-center justify-center shadow-[0_0_50px_rgba(112,66,248,0.2)] overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Professional Close Button */}
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-4 right-4 z-[1010] p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all group/close"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-white group-hover/close:rotate-90 transition-transform duration-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="relative w-full h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden bg-[#0c0c1d]">
                                <Image
                                    src={certificates[selectedId].image}
                                    alt={certificates[selectedId].title}
                                    fill
                                    className="object-contain"
                                    quality={100}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certifications;
