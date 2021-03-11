import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './users/users.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = store => next => action => {
   console.group(action.type);
   console.info('dispatching', action);
   const result = next(action);
   console.log('next state', store.getState());
   console.groupEnd();
   return result;
};

export default createStore(usersReducer, composeEnhancers(applyMiddleware(thunk, logger)));
