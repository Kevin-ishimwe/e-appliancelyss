import hero1 from "../assets/hero1.jpg";
import warranty from "../assets/waranty.png";
import hero2 from "../assets/hero2.jpg";
import SubHero1 from "./SubHero1";
import SubHero2 from "../assets/subhero2.jpg";
import { TestimonialsHead, TestimonialsBody } from "./Testimonials";
import { NavLink } from "react-router-dom";
function Hero() {
  const features = [
    "✓ Warranty 	Included",
    "✓ Quick Service",
    "✓ All Major Brands",
    "✓ Quality Repair 	",
    "✓ Service Fee 	Waived with Repairs",
    "✓ Repair Low Cost",
    "✓ Experience",
  ];

  const features2 = [
    "https://www.capitalappliancerepairboston.com/wp-content/uploads/2022/05/capital-appliance-repair-google-reviews.png",
    "https://www.capitalappliancerepairboston.com/wp-content/uploads/2022/05/appliance-repair-satisfaction-guaranteed.png",
    "https://www.capitalappliancerepairboston.com/wp-content/uploads/2022/05/capital-appliance-repair-trust-pilot.png",
    "https://www.capitalappliancerepairboston.com/wp-content/uploads/2022/05/capital-appliance-repair-trustedpros.png",
  ];

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
              <NavLink
                to={"request-quote"}
                className="py-2.5 border-2 border-primary px-8 bg-primary text-white rounded-md hover:scale-105 transition-all md:text-xl hover:bg-primaryDark  "
              >
                BOOK A REPAIR
              </NavLink>
              <a
                href="tel:(978)733-0701"
                className="md:text-xl py-2.5 px-12 ml-2 bg-none text-primary rounded-md border-primary border-2 hover:scale-150 transition-all hover:bg-primary hover:text-white"
              >
                CALL US
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <img
                src={hero2}
                alt=""
                className="mt-10 h-[25em] w-[100%] md:w-[80%] rounded-2xl shadow-sm rounded-r-none"
              />
              <img
                src={SubHero2}
                alt=""
                className=" hidden md:grid mt-10 mr-4 h-[25em] w-[80%] rounded-xl shadow-sm rounded-l-none"
              />
            </div>
            <div className="hidden lg:grid">
              <TestimonialsHead />
            </div>
          </div>
        </div>

        <div className="md:flex flex-col md:ml-12 md:w-[50%]">
          <div className="hidden md:flex">
            <img
              src={hero1}
              alt=""
              className="h-[70vh] mt-3 rounded-lg object-contain"
            />

            <div className="flex flex-col ml-4  justify-center">
              {/* <img src={warranty} alt="" /> */}
              {features2.map((feature) => {
                return (
                  <img
                    src={feature}
                    className="mt-3 font-semibold text-primaryDark"
                    key={feature}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <SubHero1
              header={"Same-Day Service: Your Appliance, Fixed Today!"}
            />
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

// <div className="flex flex-col ml-4  justify-center">
//   {/* <img src={warranty} alt="" /> */}
//   {features.map((feature) => {
//     return (
//       <h1 className="mt-3 font-semibold text-primaryDark" key={feature}>
//         {feature}
//       </h1>
//     );
//   })}
// </div>
