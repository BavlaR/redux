import { createStore } from 'redux';
import usersReducer from './users/users.reducer';

// const reducer = combineReducers({
//    users: usersReducer,
//    counter: counterReducer,
// });

const store = createStore(usersReducer);

export default store;
