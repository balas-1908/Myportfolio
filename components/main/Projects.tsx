"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10 group/project overflow-visible">
                <ProjectCard
                    src="/JourneyHive.png"
                    title="Journey Hive"
                    description="Developed a world tour ticket booking frontend application featuring a clean UI and smooth animation effects. The project allows users to explore international destinations, view ticket options, and experience an interactive booking flow, with a strong focus on UI design, animations, and user experience."
                    link="https://tourism-qxq4.onrender.com/#place1"
                />
                <ProjectCard
                    src="/pickbazaar.png"
                    title="PickBazaar"
                    description="A React.js-based e-commerce frontend that allows users to log in, browse fruit products, and experience a smooth shopping interface with a clean and responsive UI"
                    link="https://ecommerce--balaji57671.replit.app/"
                />
                <ProjectCard
                    src="/quiz.png"
                    title="Technical quiz Q&A"
                    description="Developed a timed Q&A skill assessment application where users answer questions within a fixed time limit"
                    link="https://quiz-ten-ruddy-89.vercel.app/"
                />
                <ProjectCard
                    src="/placement.png"
                    title="Placement prediction"
                    description="Developed a timed Q&A skill assessment application where users answer questions within a fixed time limit"
                    link="https://balapredict.streamlit.app"
                />
                <ProjectCard
                    src="/resume.png"
                    title="AI Resume Builder"
                    description="AI-powered Streamlit application showcasing generative AI capabilities and interactive machine learning features"
                    link="https://balagenai.streamlit.app/"
                />
            </div>
        </div>
    );
};

export default Projects;
