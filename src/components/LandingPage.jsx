import Header from "./Header";
import img from "../assets/images/img.png";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import Image from "next/image";

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="pt-[37px] relative bg-[#f6f6f6]">
        <div className="max-w-[1440px] mx-auto px-[120px] flex flex-col items-center">
          <div className="relative">
            <p className="font-bold uppercase text-[50px] text-center leading-[75px]">
              Skyrocket Your Hotel Bookings with Our Proven Marketing SYSTEMS -
              Get 50+ Direct Bookings in 90 Days!
            </p>
            <Image
              src={img1}
              className="absolute bottom-[62px] right-[191px]"
            />
            <Image src={img2} className="absolute right-[100px]" />
            <Image
              src={img3}
              className="absolute left-[123px] bottom-[-40px] "
            />
          </div>
          <button className="bg-[#00308F] py-[16px] px-[30px] text-white font-semibold rounded-[10px] mt-[43px] text-[18px]">
            Unlock my booking boost now{" "}
          </button>
          <div className="mt-[27px] relative z-[11]">
            <Image src={img} />
          </div>
        </div>
        <div className="bg-[#00308F] h-[264px] absolute w-full bottom-[-120px]"></div>
      </div>
    </>
  );
};

export default LandingPage;
