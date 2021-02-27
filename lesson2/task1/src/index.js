import { createStore } from 'redux';

const increment = () => ({ type: 'COUNTER/INCREMENT' });

const decrement = () => ({ type: 'COUNTER/DECREMENT' });

const counterReducer = (state = 0, action) => {
   switch (action.type) {
      case 'COUNTER/INCREMENT':
         return state + 1;
      case 'COUNTER/DECREMENT':
         return state - 1;
   }
};

const store = createStore(counterReducer);
