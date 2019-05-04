import * as type from './../constants/ActionTypes';
import callApi from './../utils/apiCall';
export const actListAll = () =>{
    return (dispatch) =>{
        return callApi('products', 'GET',null).then(res=>{
            dispatch(listAll(res.data)); 
        });
    };
}
export const listAll = (products) => {
    return{
        type: type.LIST_ALL,
        products
    }
};