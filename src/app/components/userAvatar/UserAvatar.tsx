import React from 'react';
import { IoMdNotificationsOutline } from "react-icons/io";
const UserAvatar = () => {
  return (
    <div className="relative">
      <button className="flex items-center justify-center bg-blue-700 text-white w-10 h-10 rounded-full">
        <span className="text-xl"><IoMdNotificationsOutline /></span>
      </button>
      <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center bg-blue-500 text-white text-xs rounded-full">
        2
      </span>
    </div>
  );
};

export default UserAvatar;