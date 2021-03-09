export default (state = '', action) => {
   switch (action.type) {
      case 'USERS/FILTER_USERS':
         return action.payload;
      default:
         return state;
   }
};
