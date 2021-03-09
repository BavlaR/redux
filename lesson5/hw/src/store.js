import { createStore, combineReducers } from 'redux';
import usersReducer from './users/users.reducer';
import filterReducer from './users/filter.reducer';

const reducer = combineReducers({
   usersList: usersReducer,
   filterText: filterReducer,
});

export default createStore(reducer);
