import { createStore } from 'redux';
import { combineReducers } from 'redux';
import usersReducer from './users/users.reducer';
import pageReducer from './users/page.reducer';

const reducer = combineReducers({
   usersList: usersReducer,
   currentPage: pageReducer,
});
const store = createStore(reducer);

export default store;
