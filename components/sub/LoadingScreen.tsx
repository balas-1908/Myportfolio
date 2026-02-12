"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 2,
                        filter: "blur(20px)",
                        transition: { duration: 1, ease: "circIn" }
                    }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030014] overflow-hidden"
                >
                    {/* Cinematic Galaxy Backdrop */}
                    <div className="absolute inset-0 z-0">
                        {/* Central Pulsing Singularity */}
                        <motion.div
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#7042f8]/40 to-[#00c7ff]/40 rounded-full blur-[180px]"
                        />

                        {/* Spiral Arms */}
                        {[0, 120, 240].map((rot, i) => (
                            <motion.div
                                key={i}
                                initial={{ rotate: rot }}
                                animate={{ rotate: rot + 360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[200px] bg-gradient-to-r from-transparent via-[#7042f8]/10 to-transparent blur-[100px]"
                            />
                        ))}
                    </div>

                    <div className="relative flex flex-col items-center z-10 scale-110 md:scale-150">
                        {/* Modern Kinetic Galaxy Spinner */}
                        <div className="relative w-40 h-40 mb-16 flex items-center justify-center">
                            {/* Fast Inner Rings */}
                            <motion.div
                                className="absolute w-24 h-24 border-t-2 border-l-2 border-[#00c7ff] rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div
                                className="absolute w-20 h-20 border-b-2 border-r-2 border-[#7042f8] rounded-full"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Center Star */}
                            <motion.div
                                className="w-4 h-4 bg-white rounded-full shadow-[0_0_20px_2px_#fff] z-10"
                                animate={{ scale: [1, 1.5, 1], boxSizing: ["border-box", "content-box", "border-box"] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            />

                            {/* Rotating Particles */}
                            {[...Array(12)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    style={{
                                        position: "absolute",
                                        width: "2px",
                                        height: "2px",
                                        backgroundColor: "white",
                                        borderRadius: "50%",
                                        transformOrigin: `${80 + Math.random() * 20}px center`,
                                    }}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, ease: "linear" }}
                                />
                            ))}
                        </div>

                        {/* Minimalist Professional Typography */}
                        <div className="flex flex-col items-center mt-4">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="flex flex-col items-center"
                            >
                                <h2 className="text-4xl font-black bg-gradient-to-r from-[#7042f8] via-[#c084fc] to-[#00c7ff] bg-clip-text text-transparent uppercase tracking-[0.8em]">
                                    BALAJI
                                </h2>
                                <div className="flex items-center gap-4 mt-4">
                                    <div className="h-[1px] w-12 bg-gray-800" />
                                    <span className="text-[10px] font-medium text-gray-500 tracking-[0.3em] uppercase">Initializing Portals</span>
                                    <div className="h-[1px] w-12 bg-gray-800" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
