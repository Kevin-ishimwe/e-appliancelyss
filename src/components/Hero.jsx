import hero1 from "../assets/hero1.png";
import warranty from "../assets/waranty.png";
import hero2 from "../assets/hero2.png";
import SubHero1 from "./SubHero1";
import { TestimonialsHead, TestimonialsBody } from "./Testimonials";
function Hero() {
  return (
    <div className="mx-2 md:mx-[7%] ">
      <div className=" flex flex-wrap md:flex-nowrap">
        <div className="md:w-[50%]">
          <div>
            <h1 className="text-4xl md:text-[3.5em] font-extrabold text-secondary font-['Oswald'] md:leading-[1.2em] ">
              Bringing Your Appliances <br />
              Back to Life
            </h1>
            <p className="mr-6 my-4 text-lg text-[#082A4F] font-['Montserrat']">
              Secure your repair slot now and enjoy peace of mind knowing that
              your appliances will be in the hands of skilled professionals.
            </p>
            <a
              href=""
              className="mt-5 font-regular text-2xl text-primary font-[Oswald] "
            >
              Schedule appliance repair services
            </a>
            <div className="mt-5">
              <button className="py-2 px-8 bg-primary text-white rounded-md hover:scale-105 transition-all">
                BOOK A REPAIR
              </button>
              <a
                href="tel:(978)733-0701"
                className="py-1.5 px-8 ml-2 bg-none text-primary rounded-md border-primary border-2 hover:scale-105 transition-all"
              >
                CALL US
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={hero2} alt="" className="mt-10 mr-4" />
            <div className="hidden lg:grid">
              <TestimonialsHead />
            </div>
          </div>
        </div>

        <div className="md:flex flex-col md:ml-12 md:w-[50%]">
          <div className="hidden md:flex">
            <img src={hero1} alt="" className="h-[70vh] mt-3" />
            <div className="flex flex-col">
              <img src={warranty} alt="" />
              {/* <div>
            <h1>
              50%
              <span>OFF</span>

            </h1>
          </div> */}
            </div>
          </div>
          <div>
            <SubHero1 />
          </div>
        </div>
      </div>
      <div className="grid lg:hidden">
        <TestimonialsHead />
      </div>
      <TestimonialsBody />
    </div>
  );
}

export default Hero;
