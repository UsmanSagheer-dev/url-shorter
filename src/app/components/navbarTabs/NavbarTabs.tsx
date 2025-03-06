"use client";
import { TbHistoryToggle } from "react-icons/tb";
import { FcStatistics } from "react-icons/fc";
import { IoSettingsOutline } from "react-icons/io5";

const NavbarTabs = () => {
  const navItems = [
    { name: "History", icon: <TbHistoryToggle /> },
    { name: "Statistics", icon: <FcStatistics /> },
    { name: "Settings", icon: <IoSettingsOutline /> },
  ];


  const activeTab = "History";

  return (
    <nav
      className="bg-dark-900 h-16 flex items-center justify-center px-4 shadow-md bg-[#181E29]"
      aria-label="Main navigation"
    >
      {navItems.map((item) => (
        <button
          key={item.name}
          className={`px-6 py-3 text-white font-medium rounded-t-lg flex items-center space-x-2 transition-colors duration-200 ${
            activeTab === item.name
              ? "border-b-4 border-blue-500"
              : "hover:bg-dark-800"
          }`}
          aria-current={activeTab === item.name ? "page" : undefined}
        >
          <span className="text-xl" aria-hidden="true">
            {item.icon}
          </span>
          <span>{item.name}</span>
        </button>
      ))}
    </nav>
  );
};

export default NavbarTabs;