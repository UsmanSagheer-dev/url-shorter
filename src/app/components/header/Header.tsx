import React from 'react';
import Logo from '../logo/Logo';
import SearchBar from '../searchBar/SearchBar';
import UserProfile from '../userProfile/UserProfile';

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between w-full px-5 py-4 bg-gray-900">
      {/* Top row with Logo and UserProfile */}
      <div className="flex items-center justify-between w-full">
        <Logo />
        
        {/* Original SearchBar - Visible on large screens only */}
        <div className="hidden md:block w-full max-w-[1000px]">
          <SearchBar />
        </div>
        
        <div className="flex items-center">
          <UserProfile />
        </div>
      </div>
      
      {/* New SearchBar - Visible on tablet and below, appears below */}
      <div className="w-full mt-4 md:hidden flex items-center">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;