import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Radio } from 'antd';
import Cart from './../components/Cart/Cart';
import { act_addToCart } from '../redux/cart/action';

class CartContainer extends Component {

    render() {
        var { cart, addToCart } = this.props;
        return (
            <div>
                <Cart cart={cart} addToCart ={addToCart}>
                    
                </Cart>
                {/* /<Product products={products} addToCart={addToCart}></Product> */}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    //console.log(state.cart);
    return {
        cart: state.cart,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        addToCart: (product) => {
            dispatch(act_addToCart(product, 1))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);