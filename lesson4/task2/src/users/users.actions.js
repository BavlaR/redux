export const addUser = userData => ({
   type: 'USERS/ADD_USER',
   payload: userData,
});
export const deleteUser = userId => ({
   type: 'USERS/DELETE_USER',
   payload: userId,
});
