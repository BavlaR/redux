import React, { useContext } from 'react';
import { UserDataContext } from './context';

const UserMenu = () => {
   const user = useContext(UserDataContext);
   const { alt, src, className } = user;

   return (
      <div className="menu">
         <span className="menu__greeting">Hello, Nikola Tesla</span>
         <img alt={alt} src={src} className={className} />
      </div>
   );
};

export default UserMenu;
