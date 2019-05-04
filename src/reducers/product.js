import * as types from '../constants/ActionTypes';
var initialState = [];

const products = (state =initialState, action) =>{
    switch(action.type){
        case types.LIST_ALL:
        state =action.products;
        return [...state];
        default: return [...state];
    }
};

export default products;