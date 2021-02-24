import React, { useContext } from 'react';
import { UserDataContext } from './context';

const UserMenu = () => {
   const userData = useContext(UserDataContext);

   return (
      <div className="menu">
         <span className="menu__greeting">Hello, {userData.name}</span>
         <img alt="User Avatar" src={userData.avatar_url} className="menu_avatar" />
      </div>
   );
};

export default UserMenu;
