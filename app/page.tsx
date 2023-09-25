import About from "./about";
import Projects from "./projects";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl snap-y snap-mandatory">
      <About />
      <Projects />
      <p className="text-right text-zinc-500 mt-4 mr-2">
        Created using Next.JS and Tailwind CSS
      </p>
    </main>
  );
}
