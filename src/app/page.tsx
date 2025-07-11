import Blogs from "./components/Blogs";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Courses from "./components/Courses";

export default function Home() {
  return (
    <main>
      <Hero />
      <Achievements />
      <Projects />
      <Courses />
      <Newsletter />
    </main>
  );
}
