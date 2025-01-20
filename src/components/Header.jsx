import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContent } from "../context/AppContext";

const Header = () => {
  const { userData } = useContext(AppContent);

  return (
    <div className="flex flex-col items-center mt-24 px-4 text-gray-800 gap-4">
      <h1 className="text-4xl flex ">
        Hey {userData ? userData.name : "Developer"}
        <img src={assets.hand_wave} alt="" className="w-8 aspect-square" />
      </h1>
    </div>
  );
};

export default Header;
