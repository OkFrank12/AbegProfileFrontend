import React from "react";
import { FaCamera } from "react-icons/fa";
import imgs from "../../assets/react.svg";

const Uploader = () => {
  return (
    <>
      <div>
        <div className="relative">
          <img
            className="w-[350px] rounded h-[400px] border object-cover"
            src={imgs}
          />
          <div className="absolute top-5 left-5 text-[30px] text-[silver]">
            <FaCamera />
          </div>
        </div>
        <div>
          <button></button>
        </div>
      </div>
    </>
  );
};

export default Uploader;
