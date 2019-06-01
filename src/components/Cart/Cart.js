import React, { Component } from 'react';
class Cart extends Component {
    state ={
        count: 0
    }
    render() {
        var { data } = this.props;

        console.log(data)
        const count =data.length
        const sum = 0;
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8" style={{ backgroundColor: '#e5e5e5' }}>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Tên sản phẩm</th>
                                    <th scope="col">Số lượng</th>
                                    <th scope="col">Hình ảnh</th>
                                    <th scope="col">Giá</th>
                                    <th scope="col">Xóa</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    
                                    data.map(item =>
                                        <tr>   
                                            {/* //<th>{item.item.description} * {item.item.quanlity}</th> */}
                                            <th scope="row">{item.item.name}</th>
                                            <th scope="row">{item.quanlity}</th>
                                            <th scope="row"><img src={item.item.image} style={{ width: '50px', height: '50px' }}></img></th>
                                            <th scope="row">{item.item.description} VND</th>
                                        </tr>
                                         //<p>{item.item.description} * {item.item.quanlity}</p>
                                    )

                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-sm-4">
                        <p>Số lượng: {count}</p>
                        <p>Tổng giá</p>
                </div>
                </div>
            </div>
        );
    }
}
export default Cart;