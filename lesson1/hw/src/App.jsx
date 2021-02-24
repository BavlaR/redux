import React, { useState } from 'react';
import { userData, UserDataContext } from './context';
import Header from './Header';

const App = () => {
   const [userInfo, setUserInfo] = useState(userData);

   return (
      <div className="page">
         <UserDataContext.Provider value={userInfo}>
            <Header />
         </UserDataContext.Provider>
      </div>
   );
};
export default App;
