import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';

const SearchField = p => {
   const [userName, setUserName] = useState('');
   const handleUserSearch = () => {
      p.showSpinner();
      p.fetchUserData(userName);
   };

   return (
      <div className="name-form">
         <input
            className="name-form__input"
            value={userName}
            type="text"
            onChange={e => setUserName(e.target.value)}
         />
         <button className="name-form__btn btn" onClick={handleUserSearch}>
            Show
         </button>
      </div>
   );
};

const mapDispatch = {
   showSpinner: usersActions.showSpinner,
   userDataRecieved: usersActions.userDataRecieved,
   fetchUserData: usersActions.fetchUserData,
};

export default connect(null, mapDispatch)(SearchField);
