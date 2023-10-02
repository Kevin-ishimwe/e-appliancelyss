import Navbar from "../components/NavBar";
import SubHero1 from "../components/SubHero1";
function Services() {
  return (
    <div>
      <Navbar />
      <div className=" pt-[8em] min-h-screen w-[70%] mx-auto">
        <SubHero1 header={"our services"} />
      </div>
    </div>
  );
}

export default Services;
