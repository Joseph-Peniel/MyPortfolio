import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Technologies from "./components/Technologies";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      setScrolling(true);

      // Hide scrollbar after 1 second of no scrolling
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setScrolling(false);
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div className={`h-screen overflow-y-scroll ${scrolling ? "show-scrollbar" : "hide-scrollbar"}`}>
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10 w-full h-full bg-black bg-fixed">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
      </div>
        <Navbar />
      <div className="container mx-auto px-8">
        <Hero />
        <Technologies />
        <Project />
        <Experience />
        <Contact />
      </div>
    </div>
    </div>
  );
};

export default App;
