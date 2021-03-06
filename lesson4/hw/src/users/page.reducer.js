const pageReducer = (state = 1, action) => {
   switch (action.type) {
      case 'page/NEXT':
         return state + 1;
      case 'page/PREV':
         return state - 1;
      default:
         return state;
   }
};

export default pageReducer;
