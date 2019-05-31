import React, { Component } from 'react';
class CartItem extends Component {
    render() {
        var {cart} = this.props;
        console.log(cart)
        return (
            <tr>
                <th scope="row"></th>
            </tr>
        );
    }
}
export default CartItem;