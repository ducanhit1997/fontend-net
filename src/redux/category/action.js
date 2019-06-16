import * as Types from './actionTypes';
import apiCall from './../../utils/apiCall';

export const act_LoadCategory_Request = () =>{
    return(dispatch) =>{
        return apiCall('catalogies','GET',null).then(res =>{
            //console.log(res.data);
            dispatch(act_LoadCategory(res.data));
        })
    }
}
export const act_LoadCategory = (data) =>{
    return{
        type: Types.LOAD_CATEGORY,
        data
    }
}
export const act_LoadCategoryById_Request = (id) =>{
    return(dispatch) =>{
        return apiCall(`catalogy/get/${id}`,'GET',null).then(res =>{
            //console.log(res.data);
            dispatch(act_LoadCategoryById(res.data));
        })
    }
}
export const act_LoadCategoryById = (data) =>{
    return{
        type: Types.FIND_CATEGORY,
        data
    }
}

// export const act_FindCustomer_Request = (idCustomer) =>{
//     return(dispatch) =>{
//         return apiCall(`users/get/${idCustomer}`,'GET',null).then(res =>{
//             //console.log(res.data);
//             dispatch(act_FindCustomer(res.data));
//         })
//     }
// }
// export const act_FindCustomer = (data) =>{
//     return{
//         type: Types.FIND_CUSTOMER,
//         data
//     }
// }
