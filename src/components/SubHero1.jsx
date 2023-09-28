import pic1 from "../assets/equip/1.png";
import pic2 from "../assets/equip/2.png";
import pic3 from "../assets/equip/3.png";
import pic4 from "../assets/equip/4.png";
import pic5 from "../assets/equip/5.png";
import pic6 from "../assets/equip/6.png";
import pic7 from "../assets/equip/7.png";
import pic8 from "../assets/equip/8.png";
function SubHero1() {
  const pic = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];
  return (
    <>
      <div className=" mt-5">
        <h1 className="text-3xl font-extrabold text-secondary font-['Oswald'] ">
          Same-Day Service: Your Appliance, Fixed Today!
        </h1>
        <p className="my-6 text-lg text-[#082A4F] font-['Montserrat']">
          Need a quick fix? We've got you covered with our Same-Day Service! Our
          dedicated team is ready to swing into action, ensuring your appliance
          headaches are resolved promptly. Don't wait—get your appliances back
          in working order today with our lightning-fast repair service.
        </p>
        <div className="flex flex-wrap justify-evenly md:justify-start">
          {pic.map((img) => {
            return (
              <img
                src={img}
                className="w-[25%] h-24 object-contain hover:scale-110 transition-all"
                key={img}
              ></img>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SubHero1;
