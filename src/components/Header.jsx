import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col items-center mt-24 px-4 text-gray-800 gap-4">
      <img src={assets.header_img} alt="" className="w-32 h-32" />

      <h1 className="text-4xl flex ">
        Hey Developer João{" "}
        <img src={assets.hand_wave} alt="" className="w-8 aspect-square" />
      </h1>

      <button className="border border-gray-500 rounded-full px-8 py-2.5  hover:bg-gray-100 transition-all">
        Get Started
      </button>
    </div>
  );
};

export default Header;
