"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { BsStars } from "react-icons/bs";
import Image from "next/image";
import { InView } from "react-intersection-observer";

const HeroContent = () => {
  return (
    <InView triggerOnce={false}>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex md:flex-row flex-col-reverse items-center justify-center gap-10 md:gap-0 md:px-20 px-5 mt-40 w-full z-20"
        >
          {/* LEFT CONTENT */}
          <div className="h-full w-full md:w-3/6 flex flex-col gap-5 justify-center text-start">
            
            {/* TOP BADGES */}
            <div className="hidden md:flex flex-row items-center gap-3 flex-wrap">
              {["Fullstack Developer", "Tech Innovator", "Team Lead"].map(
                (title, index) => (
                  <InView key={index} triggerOnce={false}>
                    {({ inView, ref }) => (
                      <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={slideInFromTop}
                        className="Welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9] flex items-center"
                      >
                        <BsStars className="text-[#b49bff] mr-2 h-4 w-4" />
                        <h1 className="Welcome-text text-[13px]">
                          {title}
                        </h1>
                      </motion.div>
                    )}
                  </InView>
                )
              )}
            </div>

            {/* MAIN TITLE */}
            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={slideInFromLeft(0.5)}
                  className="flex flex-col gap-6 mt-6 md:text-5xl text-4xl font-bold text-white max-w-[600px] z-20"
                >
                  <span>
                    Coding
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                      {" "}Dreams{" "}
                    </span>
                    into
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                      {" "}Reality{" "}
                    </span>
                    one line at a time
                  </span>
                </motion.div>
              )}
            </InView>

            {/* CERTIFICATIONS & ACHIEVEMENTS */}
            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={slideInFromLeft(0.8)}
                  className="text-sm md:text-md text-gray-400 my-5 max-w-[650px] z-30"
                >
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Microsoft Certified: Azure Fundamentals (AZ-900)
                    </li>
                    <li>
                      Best Paper Award – ICICC&apos;2025 International
                      Conference for AI/ML Research
                    </li>
                  </ul>
                </motion.div>
              )}
            </InView>

            {/* BUTTON */}
            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <motion.a
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  href="#about"
                  variants={slideInFromLeft(1)}
                  className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] z-40"
                >
                  Learn More
                </motion.a>
              )}
            </InView>
          </div>

          {/* RIGHT IMAGE */}
          <InView triggerOnce={false}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={slideInFromRight(0.8)}
                className="w-full md:w-3/6 flex justify-center items-center z-40"
              >
                <Image
                  src="/mainIconsdark.svg"
                  alt="Work icons illustration"
                  height={650}
                  width={650}
                  priority
                />
              </motion.div>
            )}
          </InView>
        </motion.div>
      )}
    </InView>
  );
};

export default HeroContent;
