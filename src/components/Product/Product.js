import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Card, Button, message } from 'antd';
import './style.css';
const { Meta } = Card;
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
    getCart =()=>{
        this.props.data();
    }
    render() {
        // const isLogin = localStorage.getItem("ACCESSTOKEN");
        // console.log(isLogin);
        var { data } = this.props;
        console.log(data);
        return (
            <div>
                {this.props.products.map(product =>
                    <div>
                        <div className="col-sm-6 col-md-3 col-xs-12" style={{ borderColor: '1px solid red', marginTop: '20px' }}>
                           
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src={product.image} style={{ width: '200px', height: '136px', margin: '5px 18px 0px 18px' }} />}
                            >
                                <Meta title={product.name} description={product.description} />

                                <div style={{ textAlign: 'center', marginTop: '10px' }}><Button type="primary" onClick={() => this.addToCart(product)}>Thêm vào giỏ hàng</Button></div>
                            </Card>
                        </div>
                    </div>
                )}
                <div>
                </div>
            </div>
        );
    }
    
    addToCart = (product) => {
        //this.props.addToCart(product,1)
        const isLogin = localStorage.getItem("ACCESSTOKEN");
        //console.log(isLogin);
        if(isLogin){
            this.props.addProductToCard(product, 1)
            message.success('Bạn đã thêm một sản phẩm vào giỏ hàng', 2)
        }
        if(isLogin===null){
            message.error('Vui lòng đăng nhập trước khi mua hàng', 2)

        }

    }
}
export default Product;    