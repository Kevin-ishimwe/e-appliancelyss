import abstractImg from "../assets/abstract.png";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BiLoader } from "react-icons/bi";
function PaymentPage() {
  const [previewImg, setpreviewImg] = useState([]);
  const [loading, setloading] = useState(false);
  const [stage, setstage] = useState(0);
  const loadTest = async () => {
    const res = await fetch("http://127.0.0.1:5172/", {
      method: "GET",
      mode: "cors",
    });

    console.log(await res);
  };

  useEffect(() => {
    loadTest();
  }, []);

  const register_job = () => {
    setloading(true);
    setTimeout(() => {
      setstage(3);
      setloading(false);
    }, 3000);
  };
  const paymentPage2 = () => {
    return (
      <div className="h-screen flex justify-center mx-4 flex-col w-[100%] md:w-[50vw]">
        <h1 className="text-4xl font-black text-secondary">
          payment made easy
        </h1>
        <p className="text-secondary">
          we accept credit and debit card payments
        </p>
        <img
          src="https://www.bambooblisssheets.com/product_images/uploaded_images/all-credit-cards-paypal-applepay-amazonpay-accepted.png"
          alt=""
          className="object-contain w-[13em]"
        />

        <div className="my-2 grid">
          <label htmlFor="card_number" className="text-[#626262]">
            Card number
          </label>

          <input
            name="card_number"
            type="text"
            placeholder="0000 0000 0000 0000 0000"
            className="py-2 px-4 w-[100%] bg-inherit border-b-2 border-primaryDark"
          />
        </div>
        <div className="flex justify-between  ">
          <div className="flex ">
            <div className="grid  w-[4em]">
              <label htmlFor="" className="text-sm">
                month
              </label>
              <input
                type="text"
                inputMode="numeric"
                maxLength={2}
                min="1"
                max="12"
                step="1"
                placeholder="XX"
                className="bg-inherit border-b-2 border-primaryDark w-[90%]"
              />
            </div>
            <h1 className=" text-[2em] font-extralight mx-2 text-secondary">
              /
            </h1>
            <div className="grid  w-[4em]">
              <label htmlFor="" className="text-sm">
                year
              </label>
              <input
                type="text"
                inputMode="numeric"
                maxLength={2}
                min="23"
                max="99"
                step="1"
                placeholder="XX"
                className=" ml-2 bg-inherit border-b-2 border-primaryDark w-[90%]"
              />
            </div>
          </div>

          <div className=" grid justify-between w-[4em]">
            <label htmlFor="" className="text-sm">
              CVV
            </label>
            <input
              type="password"
              placeholder="XXX"
              maxLength={3}
              className="bg-inherit border-b-2 w-[90%] border-primaryDark"
            />
          </div>
        </div>
        <button
          className=" mt-4 bg-primary text-white py-3 rounded-md justify-center flex"
          onClick={register_job}
        >
          {loading ? (
            <div className="flex">
              <BiLoader className="text-2xl animate-spin" />
              <h1 className="animate-pulse">LOADING....</h1>
            </div>
          ) : (
            "pay"
          )}
        </button>
      </div>
    );
  };

  return (
    <div className="flex justify-between bg-indigo-100">
      <NavLink
        to={"/"}
        className="fixed text-md text-primaryDark mt-5 ml-2 flex font-semibold"
      >
        <BsFillArrowLeftCircleFill className="text-2xl mr-2" />
        home/client payment
      </NavLink>
      {stage > 0 ? (
        paymentPage2()
      ) : (
        <div className="w-full mt-[4em] md:mt-0 md:w-[50%] mx-3 flex flex-col justify-center">
          <h1 className="text-4xl font-black text-secondary">
            {/* payment made easy */}
            job tracking made easy
          </h1>
          <div>
            <input
              className=" focus:invalid:border-red-300  focus:valid:border-green-300 focus:outline-none  w-full py-1.5 border-[1px] border-primaryDark bg-inherit my-1 px-3 rounded-md"
              type="text"
              required
              placeholder="name"
            />
            <input
              className=" focus:invalid:border-red-300  focus:valid:border-green-300 focus:outline-none  w-full py-1.5 border-[1px] border-primaryDark bg-inherit my-1 px-3 rounded-md"
              type="text"
              required
              placeholder="workerID"
            />
            <input
              className=" focus:invalid:border-red-300  focus:valid:border-green-300 focus:outline-none  w-full py-1.5 border-[1px] border-primaryDark bg-inherit my-1 px-3 rounded-md"
              type="text"
              required
              placeholder="job site (full address)"
            />

            <input
              className="block w-[50vw] text-sm text-primaryDark
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                      file:bg-violet-50 file:text-primary
                      hover:file:bg-violet-100
                        my-2
    "
              name="photos_repair"
              type="file"
              multiple
              onChange={(e) => {
                const files = e.target.files;
                console.log(files.item(1));
                for (let i = 0; i < 5; i++) {
                  if (files.item(i)) {
                    const blob = URL.createObjectURL(e.target.files[i]);
                    setpreviewImg((prev) => [...prev, blob]);
                  }
                }
              }}
              placeholder="appliance/photos"
            />
            <div className="flex">
              {previewImg.map((src) => {
                return (
                  <img key={src} className="h-[10em] ml-2" src={src} alt="" />
                );
              })}
            </div>
            <textarea
              className=" focus:invalid:border-red-300  focus:valid:border-green-300 focus:outline-none  w-full py-1.5 border-[1px] border-primaryDark bg-inherit my-1 px-3 rounded-md"
              type="text"
              minLength={10}
              required
              placeholder="job description in details"
            />
          </div>

          <button
            className="bg-primary text-white py-3 rounded-md justify-center flex"
            onClick={register_job}
          >
            {loading ? (
              <div className="flex">
                <BiLoader className="text-2xl animate-spin" />
                <h1 className="animate-pulse">LOADING....</h1>
              </div>
            ) : (
              "continue"
            )}
          </button>
        </div>
      )}
      <img
        src={abstractImg}
        alt=""
        className="hidden md:flex   overflow-hidden h-[100vh] w-[50%] object-cover"
      />
    </div>
  );
}

export default PaymentPage;
