import * as Types from './actionTypes';
var list_CATEGORY = [];
const CATEGORY = (state = list_CATEGORY, action) => {
    switch (action.type) {
        case Types.LOAD_CATEGORY:
            return action.data;
        case Types.DELETE_CATEGORY:
            return action.data;
        case Types.UPDATE_CATEGORY:
            return action.data;
        case Types.UPDATE_CATEGORY:
            return action.data;            
        default: return state;
    }
}
export default CATEGORY;