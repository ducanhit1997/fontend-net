import { combineReducers } from 'redux';
import product from './product/product';
import customer from './customer/customer';
import itemCustomer from './customer/itemCustomer';
const appReducers = combineReducers({
    product,
    customer,
    itemCustomer
});
export default appReducers;