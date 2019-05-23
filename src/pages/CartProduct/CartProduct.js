import React, { Component } from 'react';
import { InputNumber, Icon } from 'antd';

function onChange(value) {
  console.log('changed', value);
}
class CartProduct extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8" style={{backgroundColor:'#e5e5e5'}}>
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
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>
                                        <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                                    </td>
                                    <td>5000000</td>
                                    <td><Icon type="delete" /></td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>
                                        <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                                    </td>
                                    <td>5000000</td>
                                    <td><Icon type="delete" /></td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>
                                        <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                                    </td>
                                    <td>5000000</td>
                                    <td><Icon type="delete" /></td>
                                </tr>
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

export default CartProduct;