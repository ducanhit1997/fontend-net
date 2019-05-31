import React, { Component } from 'react';
import CartItem from '../CartItem/CartItem';
class Cart extends Component {
    render() {
       var {cart} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8" style={{ backgroundColor: '#e5e5e5' }}>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Tên sản phẩm</th>
                                    <th scope="col">Số lượng</th>
                                    <th scope="col">Đơn giá</th>
                                    <th scope="col">Xóa</th>
                                </tr>
                            </thead>
                            <tbody>
                                <CartItem cart={cart}/>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-sm-4">
                        Thanh toán
                </div>
                </div>
            </div>
        );
    }
}
export default Cart;