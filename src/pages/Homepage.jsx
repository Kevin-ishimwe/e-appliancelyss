import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="pt-[10em]">
        <Hero />
      </div>
    </div>
  );
}

export default Homepage;
