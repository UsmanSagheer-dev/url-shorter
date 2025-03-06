"use client";
import { useState } from "react";

const CheckoutButton = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex  justify-center items-center gap-[15px]">
      <div className="flex flex-col items-center gap-6  cursor-pointer">
        <div
          className={`relative w-[80px] h-8 bg-gray-800 rounded-full cursor-pointer flex items-center px-1 shadow-lg transition-all duration-300 ${
            isActive ? "bg-gray-700" : ""
          }`}
          onClick={() => setIsActive(!isActive)}
        >
          <div
            className={`absolute w-6 h-6 bg-blue-500 rounded-full shadow-md transition-transform duration-300 ${
              isActive ? "translate-x-[45px]" : "translate-x-0"
            }`}
          />
        </div>

        <div
          className={`absolute w-24 h-24 rounded-full transition-opacity duration-500 ${
            isActive ? "bg-blue-500/20 blur-3xl" : "opacity-0"
          }`}
        />
      </div>
      <div>
        {" "}
        <h1 className="text-white">Auto Paste to Clipboard </h1>
      </div>
    </div>
  );
};

export default CheckoutButton;
