import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
    src: string;
    title: string;
    description: string;
    link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
    return (
        <div className="group/project relative overflow-hidden rounded-2xl shadow-2xl border border-[#2A0E61]/30 transition-all duration-200 ease-in-out hover:!scale-105 hover:!z-50 hover:shadow-[0_0_50px_rgba(112,66,248,0.5)] group-hover:scale-95 group-hover:opacity-40 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-none bg-gradient-to-br from-[#030014] to-[#0a041f] flex flex-col h-full w-full">

            {/* Animated galaxy background pulse */}
            <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none group-hover/project:opacity-[0.05] transition-opacity duration-300 bg-[#7042f8]/10"></div>

            {/* Animated gradient border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7042f8] via-[#c084fc] to-[#00c7ff] rounded-2xl opacity-0 group-hover/project:opacity-100 blur-md transition-all duration-700 group-hover/project:duration-500 animate-gradient-x"></div>

            <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                className="block w-full h-full relative rounded-2xl overflow-hidden bg-[#030014]"
            >
                {/* Image container with perspective effect */}
                <div className="relative w-full h-64 overflow-hidden group/image">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent z-10 opacity-60"></div>

                    {/* Animated overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#7042f8]/30 to-[#00c7ff]/30 opacity-0 group-hover/project:opacity-100 transition-opacity duration-300 z-20 mix-blend-overlay"></div>

                    <Image
                        src={src}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full h-full object-cover transition-all duration-700 group-hover/image:scale-125 group-hover/image:rotate-1"
                    />

                    {/* Animated corner accents */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#7042f8] opacity-0 group-hover/project:opacity-100 transition-all duration-300 -translate-x-2 -translate-y-2 group-hover/project:translate-x-0 group-hover/project:translate-y-0 z-30"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#00c7ff] opacity-0 group-hover/project:opacity-100 transition-all duration-300 translate-x-2 translate-y-2 group-hover/project:translate-x-0 group-hover/project:translate-y-0 z-30"></div>
                </div>

                {/* Content section with glassmorphism */}
                <div className="relative p-7 backdrop-blur-xl bg-[#030014cc] border-t border-[#7042f8]/30 flex flex-col h-[280px]">

                    {/* Animated background particles */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#7042f8]/20 rounded-full blur-3xl animate-pulse-slow"></div>
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#00c7ff]/20 rounded-full blur-3xl animate-pulse-slow delay-700"></div>
                    </div>

                    {/* Content wrapper */}
                    <div className="relative z-10 flex flex-col h-full">
                        {/* Title with unique animated gradient */}
                        <div className="overflow-hidden">
                            <h1 className="text-2xl font-black bg-gradient-to-r from-[#c084fc] via-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent mb-3 tracking-tight leading-tight animate-gradient-x bg-[length:200%_auto]">
                                {title}
                            </h1>
                        </div>

                        {/* Description with custom scrollbar */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar pr-1">
                            <p className="text-gray-200 text-sm leading-relaxed font-light tracking-wide">
                                {description}
                            </p>
                        </div>

                        {/* Spectacular Live Link Button */}
                        <div className="mt-6 flex items-center">
                            <div className="relative group/button">
                                {/* Multiple shadow layers for depth */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#7042f8] via-[#a855f7] to-[#00c7ff] rounded-2xl blur-lg opacity-50 group-hover/button:opacity-100 group-hover/button:blur-xl transition-all duration-500"></div>
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7042f8] via-[#a855f7] to-[#00c7ff] rounded-2xl blur opacity-0 group-hover/button:opacity-75 group-hover/button:blur-md transition-all duration-500 animate-gradient-x"></div>

                                {/* Button main content */}
                                <div className="relative flex items-center justify-center gap-3 px-8 py-3.5 bg-[#030014] rounded-2xl border border-[#7042f8]/50 group-hover/button:border-transparent transition-all duration-500 overflow-hidden">

                                    {/* Animated background on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#7042f8] via-[#a855f7] to-[#00c7ff] opacity-0 group-hover/button:opacity-100 transition-opacity duration-500"></div>

                                    {/* Shimmer effect */}
                                    <div className="absolute inset-0 -translate-x-full group-hover/button:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>

                                    {/* Button text with glow effect */}
                                    <span className="relative font-bold text-sm uppercase tracking-[0.2em] bg-gradient-to-r from-[#7042f8] to-[#00c7ff] bg-clip-text text-transparent group-hover/button:text-white transition-all duration-500">
                                        Launch Project
                                    </span>

                                    {/* Animated arrow */}
                                    <div className="relative flex items-center justify-center w-5 h-5">
                                        <svg
                                            className="absolute w-5 h-5 text-[#7042f8] group-hover/button:text-white transform group-hover/button:translate-x-1 group-hover/button:-translate-y-1 transition-all duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                        <svg
                                            className="absolute w-5 h-5 text-transparent group-hover/button:text-white/50 transform group-hover/button:translate-x-2 group-hover/button:-translate-y-2 transition-all duration-300 delay-75"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProjectCard;