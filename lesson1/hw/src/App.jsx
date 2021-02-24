import React, { Component } from 'react';
import { userData, UserDataContext } from './context';
import Header from './Header';

class App extends Component {
   state = {
      userInfo: userData,
   };

   render() {
      return (
         <div className="page">
            <UserDataContext.Provider value={this.state.userInfo}>
               <Header />
            </UserDataContext.Provider>
         </div>
      );
   }
}
export default App;
