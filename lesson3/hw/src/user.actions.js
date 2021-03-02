export const setUser = user => ({
   type: 'USER_ADD',
   payload: user,
});
export const removeUser = () => ({
   type: 'USER_REMOVE',
});
