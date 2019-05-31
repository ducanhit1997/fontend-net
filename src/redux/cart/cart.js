import * as Types from './actionTypes';
//var data =  JSON.parse(localStorage.getItem('CART'));
var initialState = [];

const CART = (state = initialState, action) => {
    var {product, quanlity} = action;
    switch (action.type) {
        case Types.ADD_TO_CART:
        state.push({
            product,
            quanlity
        })
        //console.log(state)
        return [...state];  
       
        default: return [...state];

    }
}
export default CART;