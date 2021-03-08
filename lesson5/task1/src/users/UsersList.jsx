import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as pageActions from './page.actions';
import { usersListSelector, currentPageSelector } from './users.selectors';
import Pagination from './Pagination';
import User from './User';

const UsersList = p => {
   const { users, page } = p;
   const [usersPerPage, setUsersPerPage] = useState(3);

   const start = (page - 1) * usersPerPage;
   const usersToDisplay = users.slice(start, start + usersPerPage);

   return (
      <div>
         <Pagination
            goPrev={p.prevPage}
            goNext={p.nextPage}
            currentPage={page}
            totalItems={users.length}
            itemsPerPage={usersPerPage}
         />

         <ul className="users">
            {usersToDisplay.map(user => (
               <User name={user.name} age={user.age} key={user.id} />
            ))}
         </ul>
      </div>
   );
};

const mapState = state => ({
   users: usersListSelector(state),
   page: currentPageSelector(state),
});
const mapDispatch = {
   nextPage: pageActions.nextPage,
   prevPage: pageActions.prevPage,
};

const ConnectedUsers = connect(mapState, mapDispatch)(UsersList);

export default ConnectedUsers;
