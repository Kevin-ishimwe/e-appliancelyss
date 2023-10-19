import abstractImg from "../assets/abstract.png";
import { useEffect } from "react";
function PaymentPage() {
  const loadTest = async () => {
    const res = await fetch("http://127.0.0.1:5172/", {
      method: "GET",
    });

    console.log(await res);
  };

  useEffect(() => {
    loadTest();
  }, []);

  return (
    <div className="flex justify-between bg-indigo-100">
      <div className="w-[50%] flex flex-col justify-center">
        <h1 className="text-4xl font-black text-secondary">
          payment made easy
        </h1>
      </div>
      <img
        src={abstractImg}
        alt=""
        className="overflow-hidden h-[100vh] w-[50%] object-cover"
      />
    </div>
  );
}

export default PaymentPage;
