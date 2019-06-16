import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Drawer, Button, message } from 'antd';
import { act_LoadProduct_Request } from '../../../redux/product/action';
class ListProduct extends Component {
    state = {
        products: []
    }
    componentDidMount() {
        this.props.load();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.products) {
            var { products } = nextProps;
            this.setState({
                products: products
            })
            this.props.load();
        }
    }
    showNameCategory = (id) => {
        //alert(id)
        var nameCategory = '';
        if (id === 1) {
            nameCategory = 'Hải sản'
        } else if (id === 2) {
            nameCategory = 'Thập cẩm'
        }
        else if (id === 3) {
            nameCategory = 'Truyền thống'
        }
        return nameCategory;
    }
    formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Giá</th>
                            <th>Loại</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map((product, index) =>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td><img src={product.image} style={{ width: '50px', height: '20px' }}></img></td>
                                <td>{this.formatNumber(product.description)} VNĐ</td>
                                <td>{this.showNameCategory(product.pizzaCategory)}</td>
                                <td>
                                <span style={{marginLeft:'5px'}}>
                                    <Button>
                                        <Icon type="edit" />
                                    </Button>
                                    </span>
                                    <span style={{marginLeft:'5px'}}>
                                    <Button>
                                        <Icon type="delete" />
                                    </Button>
                                    </span>
                                </td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    //console.log(state.product);
    return {
        products: state.product,
        //itemCustomer: state.itemCustomer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        load: () => {
            dispatch(act_LoadProduct_Request())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);    