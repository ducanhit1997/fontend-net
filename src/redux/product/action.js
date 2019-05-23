import * as Types from './ActionTypes';
import apiCall from './../../utils/apiCall';

export const act_LoadProduct_Request = () =>{
    return(dispatch) =>{
        return apiCall('products','GET',null).then(res =>{
            console.log(res.data);
            dispatch(act_LoadProduct(res.data));
        })
    }
}

export const act_LoadProduct = (data) =>{
    return{
        type: Types.LOAD_PRODUCT,
        data
    }
}