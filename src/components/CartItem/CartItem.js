import React, { Component } from 'react';
class CartItem extends Component {
    render() {
        var { cart } = this.props;
        //console.log(cart)
        return (
            <div>
                {this.props.cart.map(item =>
                    <tr>
                        <th scope="row">{item.name}</th>
                        <th scope="row"><img src={item.image}></img></th>
                    </tr>
                )}
            </div>
        );
    }
}
export default CartItem;