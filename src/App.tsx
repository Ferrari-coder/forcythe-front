import { Blogs } from "./components/Blogs";
import { Cards } from "./components/Cards";
import { Cta } from "./components/Cta";
import { Discover } from "./components/Discover";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/Navbar";
import { Spark } from "./components/Spark";
import { Stats } from "./components/Stats";

function App() {
  return (
    <main className="bg-[#030516]">
      <NavBar />
      <Hero />
      <Discover />
      <Spark />
      <Cards />
      <Stats />
      <Blogs />
      <Cta />
      <Footer />
    </main>
  );
}

export default App;
