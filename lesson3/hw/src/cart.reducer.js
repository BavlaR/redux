const initState = {
   products: [],
};

export const prodReducer = (state = initState, action) => {
   switch (action.type) {
      default:
         return state;
      case 'PRODUCT_ADD':
         return {
            ...state,
            products: state.products.concat(action.payload),
         };
      case 'PRODUCT_REMOVE':
         return {
            ...state,
            products: state.products.filter(prod => prod.id !== action.payload),
         };
   }
};
