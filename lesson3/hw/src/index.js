import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';
import store from './store';

store.subscribe(() => console.log(store.getState()));

store.dispatch(setLanguage('jp'));
store.dispatch(addProduct({ id: 1, type: 'laptop', name: 'ASUS' }));
store.dispatch(addProduct({ id: 2, type: 'phone', name: 'LG' }));
store.dispatch(addProduct({ id: 3, type: 'copier', name: 'Canon' }));
store.dispatch(setUser({ name: 'Xena the warrior princess' }));
store.dispatch(removeProduct(3));
store.dispatch(removeUser());
