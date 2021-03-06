import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from './users.actions';

class Users extends Component {
   handleUserCreate = () => {
      const id = Math.round(Math.random() * 1000000);
      const newUser = {
         id,
         name: `User # ${id}`,
      };
      this.props.createUser(newUser);
   };
   render() {
      return (
         <div className="users">
            <button className="users__create-btn" onClick={this.handleUserCreate}>
               Create user
            </button>
            <ul className="users__list">
               {this.props.users.map(user => (
                  <li className="users__list-item" key={user.id}>
                     <span>{user.name}</span>
                     <button
                        className="users__delete-btn"
                        onClick={() => this.props.deleteUser(user.id)}
                     >
                        +
                     </button>
                  </li>
               ))}
            </ul>
         </div>
      );
   }
}

const mapState = state => ({
   users: state.usersList,
});
const mapDispatch = {
   createUser: userActions.addUser,
   deleteUser: userActions.deleteUser,
};

const connector = connect(mapState, mapDispatch);
const ConnectedUsers = connector(Users);

export default ConnectedUsers;
