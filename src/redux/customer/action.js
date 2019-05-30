import * as Types from './actionType';
import apiCall from './../../utils/apiCall';

export const act_LoadCustomer_Request = () =>{
    return(dispatch) =>{
        return apiCall('users/all','GET',null).then(res =>{
            //console.log(res.data);
            dispatch(act_LoadCustomer(res.data));
        })
    }
}
export const act_LoadCustomer = (data) =>{
    return{
        type: Types.LOAD_CUSTOMER,
        data
    }
}

export const act_FindCustomer_Request = (idCustomer) =>{
    return(dispatch) =>{
        return apiCall(`users/get/${idCustomer}`,'GET',null).then(res =>{
            //console.log(res.data);
            dispatch(act_FindCustomer(res.data));
        })
    }
}
export const act_FindCustomer = (data) =>{
    return{
        type: Types.FIND_CUSTOMER,
        data
    }
}
