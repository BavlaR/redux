export const langReducer = (state = 'en', action) => {
   switch (action.type) {
      default:
         return state;
      case 'LANG':
         return action.payload;
   }
};
