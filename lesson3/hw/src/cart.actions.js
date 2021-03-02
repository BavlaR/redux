export const addProduct = prod => ({
   type: 'PRODUCT_ADD',
   payload: prod,
});
export const removeProduct = prodId => ({
   type: 'PRODUCT_REMOVE',
   payload: prodId,
});
