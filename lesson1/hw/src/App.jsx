import React, { Component } from 'react';
import { UserDataContext } from './context';
import Header from './Header';

class App extends Component {
   state = {
      userData: {
         alt: 'User Avatar',
         src: 'https://avatars3.githubusercontent.com/u10001',
         className: 'menu__avatar',
      },
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
