const counterReducer = (state = 0, action) => {
   switch (action.type) {
      default:
         return state;
      case 'COUNTER/INCREMENT':
         return state + 1;
      case 'COUNTER/DECREMENT':
         return state - 1;
      case 'COUNTER/RESET':
         return 0;
   }
};

export default counterReducer;
