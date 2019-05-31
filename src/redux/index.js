import { combineReducers } from 'redux';
import product from './product/product';
import customer from './customer/customer';
import itemCustomer from './customer/itemCustomer';
import cart from './cart/cart';
const appReducers = combineReducers({
    product,
    customer,
    itemCustomer,
    cart
});
export default appReducers;