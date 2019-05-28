import { combineReducers } from 'redux';
import product from './product/product';
import customer from './customer/customer';
const appReducers = combineReducers({
    product,
    customer
});
export default appReducers;