import React from 'react';
import { connect } from 'react-redux';
import filterUsers from './filter.actions';
import User from './User';
import Filter from '../Filter';

const UsersList = p => {
   const { usersList, filterText } = p;
   const filteredUsers = usersList.filter(user =>
      user.name.toUpperCase().includes(filterText.toUpperCase()),
   );

   return (
      <div>
         <Filter
            onChange={e => p.filterUsersList(e.target.value)}
            count={filterText ? filteredUsers.length : ''}
            filterText={filterText}
         />
         <ul className="users">
            {(filterText ? filteredUsers : usersList).map(user => (
               <User name={user.name} age={user.age} key={user.id} />
            ))}
         </ul>
      </div>
   );
};

const mapState = state => ({
   usersList: state.usersList,
   filterText: state.filterText,
});
const mapDispatch = {
   filterUsersList: filterUsers,
};

export default connect(mapState, mapDispatch)(UsersList);
