import { createStore, combineReducers } from 'redux';
import { langReducer } from './language.reducer';
import { prodReducer } from './cart.reducer';
import { userReducer } from './user.reducer';

const appReducer = combineReducers({
   language: langReducer,
   user: userReducer,
   cart: prodReducer,
});

const store = createStore(
   appReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
