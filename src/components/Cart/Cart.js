import React, { Component } from 'react';
import { Icon, InputNumber } from 'antd';

class Cart extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       price : ''          
    //     };
    // }
    
    // onChange = (value) => {
        
    //     this.setState({price: value})
    // }
    render() {
        var { data } = this.props;
        //console.log(data.length)
        const count = data.length
        var price = 0;
        //var countProduct =1;
        data.map(item => {
            price = parseInt(item.item.description) * 2
            console.log(price)
        })
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
                                    <th scope="col">Đơn giá</th>
                                    <th scope="col">Thành tiền</th>
                                    <th scope="col">Xóa</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    data.map(item =>
                                        <tr>
                                            {/* //<th>{item.item.description} * {item.item.quanlity}</th> */}
                                            <th scope="row">{item.item.name}</th>
                                            <th scope="row"><InputNumber min={1} max={10} defaultValue={1}  onChange={this.onChange} /></th>
                                            <th scope="row"><img src={item.item.image} style={{ width: '50px', height: '50px' }}></img></th>
                                            <th scope="row">{Number(item.item.description)} VND</th>
                                            <th scope="row">{parseInt(item.item.description)*2}</th>
                                            <th><Icon type="delete" /></th>
                                        </tr>
                                        //<p>{item.item.description} * {item.item.quanlity}</p>
                                    )

                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-sm-4">
                        <p>Số lượng: {count}</p>
                        <p>Tổng giá{price}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cart;