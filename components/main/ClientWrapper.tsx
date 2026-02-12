"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Navbar from "@/components/main/Navbar";
import LoadingScreen from "@/components/sub/LoadingScreen";
import { Toaster } from "react-hot-toast";

const StarsCanvas = dynamic(() => import("@/components/main/StarBackground"), {
    ssr: false,
});

export default function ClientWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Toaster position="bottom-right" reverseOrder={false} />
            <LoadingScreen />
            <AnimatePresence>
                {!isLoading && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.5,
                            ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for a high-end feel
                            delay: 0.2 // Slight delay to let the galaxy exit finish
                        }}
                        className="relative"
                    >
                        <StarsCanvas />
                        <Navbar />
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
