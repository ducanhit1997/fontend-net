import React, { Component } from 'react';
import apiCall from '../../utils/apiCall';
class CustomerItem extends Component {
    state = {
        products: []
    }
    componentDidMount() {
        apiCall('products', 'GET', null).then(res => {
            const products = res.data;
            this.setState({ products });
          })
      }
    render() {
        
        return (
                this.state.products.map(product=>
                 <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.createdAt}</td>
                    <td>
                        <span class="label label-warning">CÒn hàng</span>
                    </td>
                    <td>
                        <button type="button" className="btn btn-default">Sửa</button>
                        <button type="button" className="btn btn-danger">Xóa</button>
                    </td>
                </tr>
                )
        );
    }
}

export default CustomerItem;