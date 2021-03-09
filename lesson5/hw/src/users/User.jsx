import React from 'react';

const User = p => {
   return (
      <li className="user">
         <span className="user__name">{p.name}</span>
         <span className="user__age">{p.age}</span>
      </li>
   );
};

export default User;
