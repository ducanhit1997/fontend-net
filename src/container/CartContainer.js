import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Radio } from 'antd';
import Cart from './../components/Cart/Cart';
import CartItem from './../components/CartItem/CartItem';
import * as Message from './../constants/Message';
import { act_addToCart } from '../redux/cart/action';

class CartContainer extends Component {

    render() {
        var { cart } = this.props;
        return (
            <div>
                <Cart cart={cart}>
                    
                </Cart>
                {/* /<Product products={products} addToCart={addToCart}></Product> */}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state.cart);
    return {
        cart: state.cart,
    }
}


export default connect(mapStateToProps, null)(CartContainer);