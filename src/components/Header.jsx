import Image from "next/image";
import logo from "../assets/images/logo.png";
const Header = () => {
  return (
    <div className="bg-[#f6f6f6] border-b-[2px] border-b-[#000000] py-[3px]">
      <div className="max-w-[1440px] mx-auto px-[120px]">
        <div className="flex gap-x-[131px] items-center">
          <Image src={logo} className="w-[110px] h-[82px] cursor-pointer" />
          <div>
            <ul className="flex items-center gap-x-[68px] text-[18px] font-medium   ">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Our Services</li>
              <li className="cursor-pointer">Case Studies</li>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Contact</li>
              <button className="bg-[#00308F] py-[10px] px-[40px] text-white font-semibold rounded-[10px] text-[18px]">
                Schedule a call
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
