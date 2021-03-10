import React from 'react';
import { connect } from 'react-redux';
import * as counterActions from './counter.actions';

const Counter = p => {
   return (
      <div className="counter">
         <button className="counter__button" onClick={p.decrement}>
            -
         </button>
         <span className="counter__value" onClick={p.reset}>
            {p.counter}
         </span>
         <button className="counter__button" onClick={p.increment}>
            +
         </button>
      </div>
   );
};

const mapState = state => ({ counter: state });
const mapDispatch = {
   increment: counterActions.increment,
   decrement: counterActions.decrement,
   reset: counterActions.reset,
};

const connector = connect(mapState, mapDispatch);

export default connector(Counter);
