import * as Types from './actionTypes';
// export const act_addToCart_Request = (idProduct) =>{
//     return(dispatch) =>{
//         return apiCall(`products/get/${idProduct}`,'GET',null).then(res =>{
//             console.log(res.data);
//             dispatch(act_addToCart(res.data));
//         })
//     }
// }
export const act_addToCart = (product, quanlity) =>{
    return{
        type: Types.ADD_TO_CART,
        product,
        quanlity
    }
}