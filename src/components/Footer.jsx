class link {
  constructor(path, name) {
    this.path = path;
    this.name = name;
  }
}
function Footer() {
  const links = [
    new link("/", "Home"),
    new link("/services", "Services"),
    new link("/raq", "Request a quote"),
    new link("/contact", "Contact us"),
  ];
  const links2 = [
    new link("/services", "Appliance repair"),
    new link("/services", "Dishwasher"),
    new link("/services", "Refrigerator"),
    new link("/services", "Washer"),
    new link("/services", "Dryer"),
  ];
  const links3 = [
    new link("/services", "Annapolis, MD"),
    new link("/services", "Washington, D.C."),
    new link("/services", "Columbia, MD"),
    new link("/services", "Silver Spring, MD"),
    new link("/services", "Towson, MD"),
    new link("/services", "Rockville, MD"),
    new link("/services", "Frederick, MD"),
    new link("/services", "Gaithersburg, MD"),
    new link("/services", "Ellicott City, MD"),
    new link("/services", "Bowie, MD"),
  ];
  const links4 = [
    "Privacy Policy",
    "CA Privacy Policy",
    "Do Not Sell or Share My Personal Information",
    "Terms of Use",
    "Mobile Terms",
    "License Info",
    "Site Map",
    "Reparación (ES)",
  ];
  return (
    <>
      <div className="bg-[#DDE1E4] min-h-[20em]  py-12 px-5 md:px-[5em] ">
        <div className=" mt-5 flex flex-wrap md:flex-nowrap justify-between">
          <div className="">
            <h1 className="text-xl font-semibold text-primaryDark">
              VEX APPLIANCE
            </h1>
            <div className="grid">
              {links.map(({ name, path }) => {
                return (
                  <a
                    key={name}
                    href={path}
                    className={` md:hover:bg-inherit hover:text-primaryDark text-[#082A4F] font-['Montserrat'] `}
                  >
                    {name}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="my-1 md:my-0">
            <h1 className="text-xl font-semibold text-primaryDark">
              Our Services
            </h1>
            <div className="grid">
              {links2.map(({ name, path }) => {
                return (
                  <a
                    key={name}
                    href={path}
                    className={` md:hover:bg-inherit hover:text-primaryDark text-[#082A4F] font-['Montserrat'] `}
                  >
                    {name}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="my-1 md:my-0">
            <h1 className="text-xl font-semibold text-primaryDark">
              Stay Connected
            </h1>
            <p className="text-primaryDark grid">
              get in touch with us at{" "}
              <a
                href="mailto:vexappliance@gmail.com"
                className="font-semibold italic"
              >
                vexappliance@gmail.com
              </a>
            </p>
            <div className="grid md:w-[25em]">
              <div className="flex my-2">
                <input
                  className="bg-inherit border-[1px] px-3 py-1 rounded-md border-gray-700 active:outline-green-500"
                  type="text"
                  placeholder="Your email address"
                />
                <button className="bg-primary py-1 px-4 ml-2 rounded-md text-white ">
                  Sign Up
                </button>
              </div>
              <p
                className={` md:hover:bg-inherit hover:text-primaryDark text-[#082A4F] font-['Montserrat'] `}
              >
                Sign up for deals and tips about all that Sears Home Services
                offers, including appliance repair, home improvement, DIY repair
                parts, home warranties and more.
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex justify-between">
          <div>
            <h1 className="text-xl font-semibold text-primaryDark">
              VEX APPLIANCE Available In These Cities
            </h1>
            <div className="flex flex-col md:grid grid-cols-2">
              {links3.map(({ name, path }) => {
                return (
                  <a
                    key={name}
                    href={path}
                    className={` md:hover:bg-inherit hover:text-primaryDark text-[#082A4F] font-['Montserrat'] `}
                  >
                    {name}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="md:w-[25em] my-1">
            <h1 className="text-xl font-semibold text-primaryDark">
              VEX APPLIANCE payment made easy
            </h1>
            <img
              src="https://www.bambooblisssheets.com/product_images/uploaded_images/all-credit-cards-paypal-applepay-amazonpay-accepted.png"
              alt=""
              className="object-contain w-[80%]"
            />
          </div>
        </div>
      </div>
      <div className="bg-white w-full h-12 px-5 md:px-[5em]">
        <div className="flex flex-wrap md:flex-nowrap md:justify-between">
          {links4.map((linkText, index) => (
            <span key={index}>
              <a href="#" className="text-primaryDark hover:underline text-sm">
                {linkText} |
              </a>
            </span>
          ))}
        </div>
        <p className="text-gray-600">
          &copy;2023 VEX APPLIANCE LLC. All Rights Reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
