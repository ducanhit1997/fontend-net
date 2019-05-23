import * as Types from './ActionTypes';
var list_Product = [
    {
        id: 1,
        name: 'Phan ĐỨc anh'
    }
];
const PRODUCT = (state = list_Product, action) => {
    switch (action.type) {
        case Types.LOAD_PRODUCT:
            return action.data;
        case Types.DELETE_PRODUCT:
            return action.data;
        case Types.UPDATE_PRODUCT:
            return action.data;
        case Types.UPDATE_PRODUCT:
            return action.data;
        default: return state;

    }
}
export default PRODUCT;