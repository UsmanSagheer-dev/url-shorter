import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const UserWelcome = () => {
  return (
    <div className="flex items-center space-x-2 bg-gray-900 px-3 sm:px-4 py-2 rounded-full border border-gray-700">
      <div className="text-left">
        <div className="text-[10px] sm:text-xs text-gray-400">Welcome</div>
        <div className="text-sm sm:text-base text-white font-semibold truncate max-w-[80px] sm:max-w-none">
          Mohammed
        </div>
      </div>
      <RiArrowDropDownLine className="text-gray-400" size={24}  />
    </div>
  );
};

export default UserWelcome;
