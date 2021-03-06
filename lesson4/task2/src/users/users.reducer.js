const initialState = {
   usersList: [],
};

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      default:
         return state;
      case 'USERS/ADD_USER':
         return {
            ...state,
            usersList: state.usersList.concat(action.payload),
         };
      case 'USERS/DELETE_USER':
         return {
            ...state,
            usersList: state.usersList.filter(user => user.id !== action.payload),
         };
   }
};

export default usersReducer;
