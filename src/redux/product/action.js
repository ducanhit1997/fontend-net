import * as Types from './actionTypes';
import apiCall from './../../utils/apiCall';

export const act_LoadProduct_Request = () =>{
    return(dispatch) =>{
        return apiCall('products','GET',null).then(res =>{
           // console.log(res.data);
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

export const act_LoadProductByCategory_Request = (idCategory) =>{
    return(dispatch) =>{
        // return apiCall('products/catalogy/1','GET',null).then(res =>{
        //     console.log(res.data);
        //     dispatch(act_LoadProductById(res.data));
        // })
        return apiCall(`products/catalogy/${idCategory}`,'GET',null).then(res =>{
            //console.log(res.data);
            dispatch(act_LoadProductByCategory(res.data));
        })
    }
}
export const act_LoadProductByCategory = (data) =>{
    return{
        type: Types.LOAD_PRODUCT_BYID,
        data
    }
}

export const act_LoadPage_Request = (page) =>{
    return(dispatch) =>{
        return apiCall(`products/page/${page}`,'GET',null).then(res =>{
            console.log(res.data);
            dispatch(act_LoadPage(res.data));
        })
    }
}
export const act_LoadPage = (data) =>{
    return{
        type: Types.LOAD_PAGE,
        data
    }
}