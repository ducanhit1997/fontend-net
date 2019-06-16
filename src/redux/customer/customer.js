import * as Types from './actionType';
var list_CUSTOMER = [];
const CUSTOMER = (state = list_CUSTOMER, action) => {
    switch (action.type) {
        case Types.LOAD_CUSTOMER:
            return action.data;
        case Types.DELETE_CUSTOMER:
            return action.data;
        case Types.UPDATE_CUSTOMER:
            return action.data;            
        default: return state;
    }
}
export default CUSTOMER;