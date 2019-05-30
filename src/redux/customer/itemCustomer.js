import * as Types from './actionType';
var CUSTOMER = {};
const item = (state = CUSTOMER, action) => {
    switch (action.type) {
        case Types.FIND_CUSTOMER:
        return action.data;             
        default: return state;
    }
}
export default item;