const initState = {
   usersList: [],
};

export const usersReducer = (state = initState, action) => {
   switch (action.type) {
      case 'USERS/ADD':
         return {
            usersList: state.usersList.concat(action.user),
         };
      case 'USERS/DELETE':
         return {
            usersList: state.usersList.filter(user => user.id !== action.id),
         };
      default:
         return state;
   }
};
