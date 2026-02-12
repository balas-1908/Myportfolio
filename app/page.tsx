import About from "@/components/main/About";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Certifications from "@/components/main/Certifications";
import Contact from "@/components/main/Contact";
import Footer from "@/components/main/Footer";

export default function Home() {
	return (
		<main className="h-full w-full">
			<div className="flex flex-col gap-20">
				<Hero />
				<About />
				<Skills />
				<Certifications />
				<Projects />
				<Contact />
				<Footer />
			</div>
		</main>
	);
}  