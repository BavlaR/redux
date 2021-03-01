import { addUser, deleteUser } from './users.actions';
import store from './store';

store.dispatch(addUser({ id: 2, name: 'John' }));
store.dispatch(addUser({ id: 3, name: 'Bob' }));
store.dispatch(deleteUser(2));

store.subscribe(() => {
   console.log(store.getState());
});

store.dispatch(deleteUser(3));
