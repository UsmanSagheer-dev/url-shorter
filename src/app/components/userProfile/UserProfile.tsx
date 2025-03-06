import React from 'react';
import UserWelcome from '../userWelcome/UserWelcome';
import UserAvatar from '../userAvatar/UserAvatar';

const UserProfile = () => {
  return (
    <div className="flex items-center justify-between gap-[20px]">
      <UserWelcome />
      <UserAvatar />
    </div>
  );
};

export default UserProfile;