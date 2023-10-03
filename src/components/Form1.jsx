import { useState, useEffect } from "react";
import serviceImg from "../assets/service.png";

function Form1() {
  const [track, settrack] = useState(0);
  const [location, setlocation] = useState("");
  const getLocation = async () => {
   
      const ip_address = await fetch("https://api.ipify.org/?format=json")
        .then((res) => res.json())
        .then((data) => {
          return data.ip;
        });

      const location = await fetch(
        `https://geolocation-db.com/json/${ip_address}`
      )
        .then((res) => (res.status == 200 ? res.json() : "failed"))
        .then((data) => {
          if (data != "failed") {
            return data;
          } else {
            console.log("failed");
            settrack((prev) => prev++);
          }
        });
      await fetch(
        `https://geocode.maps.co/reverse?lat=${location.latitude}&lon=${location.longitude}`
      )
        .then((res) => res.json())
        .then((data) => {
          const address = data.display_name.split(",");
          address.pop();
          setlocation(address.join(","));
        });
 
  };
  useEffect(() => {
    try{
      getLocation();
      console.log("location", location);
       } catch (error) {
      settrack((prev) => prev++);
    }
  }, [track]);

  return (
    <div className="mx-4 my-[9em] md:w-[70%] md:mx-auto md:flex bg-[#003980] rounded-xl shadow-[1px_0px_40px_#00000032]">
      <div className="px-5 md:w-[50%] flex justify-center flex-col pt-5">
        <h1 className="text-2xl md:text-3xl text-white font-bold">
          E-appliance repair at your service
        </h1>

        <p className="text-lg  font-['Montserrat'] font-normal leading-2 text-white">
          {location ? location : ""}
        </p>
        <img
          src={serviceImg}
          className=" rounded-md object-contain w-full md:grid"
        ></img>
      </div>
      <form className=" py-4 bg-white md:w-[50%] flex justify-center  flex-col px-3 md:rounded-l-none rounded-md">
        <input
          className=" focus:invalid:border-red-300  focus:valid:border-green-300 focus:outline-none  w-full py-1.5 border-[1px] border-primaryDark bg-inherit my-1 px-3 rounded-md"
          type="text"
          required
          placeholder="name"
        />
        <input
          className=" focus:invalid:border-red-300  focus:valid:border-green-300 focus:outline-none   w-full py-1.5 border-[1px] border-primaryDark bg-inherit my-1 px-3 rounded-md"
          type="email"
          placeholder="email"
        />
        <input
          className=" focus:invalid:border-red-300  focus:valid:border-green-300 focus:outline-none   w-full py-1.5 border-[1px] border-primaryDark bg-inherit my-1 px-3 rounded-md"
          type="text"
          required
          placeholder="phone number"
        />
        <input
          className=" focus:invalid:border-red-300  focus:valid:border-green-300 focus:outline-none   w-full py-1.5 border-[1px] border-primaryDark bg-inherit my-1 px-3 rounded-md"
          type="text"
          required
          placeholder="address"
        />
        <label
          htmlFor="photos_repair"
          className="font-['Montserrat'] italic text-sm"
        >
          pictures(optional)
        </label>
        <input
          className="block w-full text-sm text-primaryDark
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-primary
      hover:file:bg-violet-100
      my-2
    "
          name="photos_repair"
          type="file"
          placeholder="images(optional)"
        />
        <textarea
          required
          name=""
          id=""
          cols="30"
          rows="5"
          className="bg-inherit focus:invalid:border-red-300  focus:valid:border-green-300 focus:outline-none   w-full py-1.5 border-[1px] border-primaryDark my-1 px-3 rounded-md"
          placeholder="please describe the issues you have with your appliance and the product brand,model..."
        ></textarea>
        <button
          className="bg-[#003980] w-full py-1.5 text-white rounded-md"
          type="submit"
        >
          BOOK A REPAIR
        </button>
      </form>
    </div>
  );
}

export default Form1;
