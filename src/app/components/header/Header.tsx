import React from 'react';
import Logo from '../logo/Logo';
import SearchBar from '../searchBar/SearchBar';
import UserProfile from '../userProfile/UserProfile';

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between w-full px-5 py-4 bg-[#0b101b]">
      <div className="flex items-center justify-between w-full">
        <Logo />
        
        <div className="hidden md:block w-full max-w-[1000px]">
          <SearchBar />
        </div>
        
        <div className="flex items-center">
          <UserProfile />
        </div>
      </div>
      
      <div className="w-full mt-4 md:hidden flex items-center">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;