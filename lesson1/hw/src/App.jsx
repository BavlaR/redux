import React, { Component } from 'react';
import { user, UserDataContext } from './context';
import Header from './Header';

class App extends Component {
   state = {
      userData: user,
   };

   render() {
      return (
         <div className="page">
            <UserDataContext.Provider value={this.state.userData}>
               <Header />
            </UserDataContext.Provider>
         </div>
      );
   }
}
export default App;
