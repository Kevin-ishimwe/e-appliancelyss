import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import logonav from "../assets/logo.png";

class link {
  constructor(path, name) {
    this.path = path;
    this.name = name;
  }
}
function Navbar() {
  const [style, setstyle] = useState({
    deg: "90deg",
    counter: false,
    clip: "",
  });
  const location = useLocation();
  const links = [
    new link("/", "Home"),
    new link("/services", "Services"),
    new link("/raq", "Request a quote"),
    new link("/contact", "Contact us"),
  ];
  //   const handleButtonClick = () => {
  //     console.log("Button clicked!");
  //   };
  const menuHandler = () => {
    console.log(style.counter);
    if (style.counter == false) {
      return setstyle({
        deg: "90deg",
        counter: !style.counter,
        clip: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      });
    }
    return setstyle({
      deg: "0deg",
      counter: !style.counter,
      clip: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    });
  };

  return (
    <div className="fixed bg-white z-20  flex w-full   h-[7em] items-center justify-between px-0.5 md:px-[6%]">
      <div className="md:flex items-center  md:h-[50%] ">
        <img src={logonav} alt="logo" className=" max-h-[5em]" />
        <a
          href="tel:(978)733-0701"
          className="text-xl bg-white sm:text-2xl text-primary font-semibold ml-2"
        >
          (978)733-0701
        </a>
      </div>
      <div
        className="ulcontroller flex-col  justify-start top-[7em] backdrop-blur-md md:backdrop-blur-none md:bg-inherit w-full h-[100vh] md:h-fit md:top-0 bg-[#00000003] left-0 fixed md:relative flex md:flex-row md:w-fit md:justify-evenly "
        style={{ clipPath: style.clip }}
      >
        {links.map(({ name, path }) => {
          return (
            <NavLink
              key={name}
              to={path}
              className={`hover:bg-[#d484c54b] md:hover:bg-inherit hover:text-primary py-5 px-5 md:px-2 lg:px-4 text-lg text-darkBlue ${
                location.pathname == path ? "font-bold" : "font-normal"
              } `}
            >
              {name}
            </NavLink>
          );
        })}
      </div>
      <div className="">
        <button className="scale-[0.7] sm:scale-100 px-7 py-3 bg-primary text-white font-semibold rounded-md shadow-md transition-all text-lg hover:scale-[1.02] ">
          Schedule Now
        </button>
        <HiMenu
          className={`inline text-4xl md:hidden ml-0 text-primary rotate-[${style.deg}] transition-all`}
          onClick={menuHandler}
        />
      </div>
    </div>
  );
}

export default Navbar;
