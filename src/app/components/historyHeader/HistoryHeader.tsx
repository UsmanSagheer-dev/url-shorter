import React from 'react';
import { CiFilter } from "react-icons/ci";
interface HistoryHeaderProps {
  count: number;
}

const HistoryHeader: React.FC<HistoryHeaderProps> = ({ count }) => {
  return (
    <header className="bg-transparent text-white  flex justify-between items-center w-full max-w-full overflow-x-auto lg:max-w-[85%] lg:mx-auto">
      <h1 className="text-lg font-semibold">History ({count})</h1>
      <button className="bg-[#181E29] hover:bg-gray-600 text-white px-4 py-2 rounded-[48px] flex items-center justify-center gap-2 w-[113px] h-[44px] border border-[#353C4A]">
      <CiFilter />
        Filter
      </button>
    </header>
  );
};

export default HistoryHeader;