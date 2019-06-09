import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Card, Button, notification, Popover } from 'antd';

import './style.css';
const { Meta } = Card;

const content = (product) => {
    return (
        <div>
            {product.name}
        </div>

    )
}
class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            allCategory: true,
            traditional: false,
            mixed: false,
            seafood: false,
            idCategory: '',
        }
    }
    addProductToCard = (item, quanlity) => {
        this.props.addProductToCard(item, quanlity)
    }
    formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    render() {
        const isLogin = localStorage.getItem("ACCESSTOKEN");
        console.log(isLogin);
        var { data } = this.props;
        //console.log(data);
        return (
            <div>
                <div>
                    {this.props.products.map(product =>
                        <div>
                            <div className="col-sm-6 col-md-3 col-xs-12" style={{ borderColor: '1px solid red', marginTop: '7px' }}>
                                <Popover content={content(product)}
                                    title="Title">
                                    <Card
                                        hoverable
                                        style={{ width: 278 }}
                                        cover={<img alt="example" src={product.image} style={{ width: '200px', height: '136px', margin: '10px 18px 0px 35px' }} />}
                                    >
                                        <Meta title={product.name} description={this.formatNumber(product.description) + " VNĐ"} />

                                        <div style={{ textAlign: 'center', marginTop: '10px' }}><Button type="primary" onClick={() => this.addToCart(product)}>Thêm vào giỏ hàng</Button></div>
                                    </Card>
                                </Popover>
                            </div>
                        </div>
                    )}
                    <div>
                    </div>
                </div>
            </div>
        );
    }
    addToCart = (product) => {
        //this.props.addToCart(product,1)
        const isLogin = localStorage.getItem("ACCESSTOKEN");
        //console.log(isLogin);
        if (isLogin) {
            this.props.addProductToCard(product, 1)
            notification.success({
                message: 'Thêm vào giỏ hàng thành công'
            })
        }
        if (isLogin === null) {
            notification.error({
                message: 'Vui lòng đăng nhập hệ thống'
            })
        }

    }
}
export default Product;    