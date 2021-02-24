import React, { Component } from 'react';
import { UserDataContext } from './context';

class UserMenu extends Component {
   render() {
      return (
         <div className="menu">
            <span className="menu__greeting">Hello, Nikola Tesla</span>
            <img alt={this.context.alt} src={this.context.src} className={this.context.className} />
         </div>
      );
   }
}

UserMenu.contextType = UserDataContext;

export default UserMenu;
