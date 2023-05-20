import About from "./about";
import Projects from "./projects";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl snap-y snap-mandatory">
      <About />
      <Projects />
    </main>
  )
}
