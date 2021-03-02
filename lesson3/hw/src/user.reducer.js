export const userReducer = (state = null, action) => {
   switch (action.type) {
      default:
         return state;
      case 'USER_ADD':
         return action.payload;
      case 'USER_REMOVE':
         return null;
   }
};
