import { applyMiddleware, createStore } from 'redux';
import counterReducer from './counter.reducer';

const logger = store => next => action => {
   console.group(action.type);
   console.info(action);
   const result = next(action);
   console.log('new state', store.getState());
   console.groupEnd();
   return result;
};

const store = createStore(counterReducer, applyMiddleware(logger));

export default store;
