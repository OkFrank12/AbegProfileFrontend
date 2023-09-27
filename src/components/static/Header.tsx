import { useState } from "react";
import svg from "../../assets/react.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="w-full z-[58784564785] h-[70px] bg-white flex justify-between fixed px-10 items-center">
        <span className="text-[dodgerblue] text-[30px] font-bold">
          AbegFundMe
        </span>
        <div className="flex items-center">
          {/* <img className="rounded-full border object-cover mr-2" src={svg} /> */}
          {!toggle ? (
            <span className="text-blue-300 text-[30px] mr-2">*******</span>
          ) : (
            <span className="text-slate-300 text-[25px] font-bold mr-2 capitalize">
              ₦5,000.00
            </span>
          )}
          <div
            onClick={onToggle}
            className="w-[40px] h-[40px] flex justify-center items-center border rounded cursor-pointer border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-white transition-all duration-300"
          >
            {!toggle ? <FaEye /> : <FaEyeSlash />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
