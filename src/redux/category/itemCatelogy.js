import * as Types from './actionTypes';
var CATELOGY = {};
const item = (state = CATELOGY, action) => {
    switch (action.type) {
        case Types.FIND_CATEGORY:
        return action.data;             
        default: return state;
    }
}
export default item;