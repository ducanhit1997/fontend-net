import { combineReducers } from 'redux';
import product from './product/product';
const appReducers = combineReducers({
    product,
});
export default appReducers;