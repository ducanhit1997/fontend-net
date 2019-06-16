import { combineReducers } from 'redux';
import product from './product/product';
import customer from './customer/customer';
import itemCustomer from './customer/itemCustomer';
import cart from './cart/cart';
import category from './category/category'
import itemCatelogy from './category/itemCatelogy'
const appReducers = combineReducers({
    product,
    customer,
    itemCustomer,
    cart,
    category,
    itemCatelogy
});
export default appReducers;