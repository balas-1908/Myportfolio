"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "sending">("idle");

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setStatus("sending");
        const toastId = toast.loading("Sending signal to Balaji's Galaxy...", {
            style: {
                borderRadius: '10px',
                background: '#030014',
                color: '#fff',
                border: '1px solid #7042f8',
            },
        });

        emailjs
            .sendForm(
                "service_te1iwz8",
                "template_dpr3vaf",
                formRef.current,
                "Q7BcSHIKb4jaK5pUJ"
            )
            .then(
                () => {
                    setStatus("idle");
                    toast.success("Signal Received! I'll get back to you soon.", {
                        id: toastId,
                        duration: 5000,
                    });
                    formRef.current?.reset();
                },
                (error) => {
                    console.error("EmailJS Error:", error);
                    setStatus("idle");
                    toast.error("Warp interference! Signal failed to send.", {
                        id: toastId,
                    });
                }
            );
    };

    return (
        <section id="contact" className="flex flex-col items-center justify-center py-20 z-[20]">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                Get In Touch
            </h1>

            <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-10 px-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-8"
                >
                    <div className="bg-[#030014] border border-[#2A0E61] p-8 rounded-3xl shadow-[0_0_20px_rgba(42,14,97,0.3)]">
                        <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">Contact info</h2>
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-[#7042f8]/10 border border-[#7042f8]/30 rounded-2xl flex items-center justify-center group-hover:bg-[#7042f8]/30 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#b49bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs uppercase tracking-widest">Email Me</p>
                                    <p className="text-white font-bold group-hover:text-[#b49bff] transition-colors">balaji@example.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-[#7042f8]/10 border border-[#7042f8]/30 rounded-2xl flex items-center justify-center group-hover:bg-[#7042f8]/30 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#b49bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs uppercase tracking-widest">Location</p>
                                    <p className="text-white font-bold group-hover:text-[#b49bff] transition-colors">Tamil Nadu, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.form
                    ref={formRef}
                    onSubmit={sendEmail}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-4 bg-[#030014] border border-[#2A0E61] p-8 rounded-3xl"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-gray-400 text-xs ml-2">Name</label>
                            <input
                                type="text"
                                name="from_name"
                                required
                                placeholder="Your Name"
                                className="bg-[#0b0424] border border-[#2A0E61] focus:border-[#7042f8] outline-none text-white px-4 py-3 rounded-xl transition-all"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-gray-400 text-xs ml-2">Email</label>
                            <input
                                type="email"
                                name="from_email"
                                required
                                placeholder="Your Email"
                                className="bg-[#0b0424] border border-[#2A0E61] focus:border-[#7042f8] outline-none text-white px-4 py-3 rounded-xl transition-all"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-400 text-xs ml-2">Message</label>
                        <textarea
                            name="message"
                            required
                            placeholder="Your Message"
                            rows={6}
                            className="bg-[#0b0424] border border-[#2A0E61] focus:border-[#7042f8] outline-none text-white px-4 py-3 rounded-xl transition-all resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="mt-4 relative group overflow-hidden px-8 py-4 bg-[#7042f8] rounded-2xl font-bold text-white transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_#7042f8] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            {status === "idle" && "Send Message"}
                            {status === "sending" && "Sending Pulse..."}
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${status === "sending" ? "animate-pulse" : "group-hover:translate-x-1"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
