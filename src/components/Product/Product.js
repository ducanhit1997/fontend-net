import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Card, Button } from 'antd';
import Cart from './../../components/Cart/Cart';
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
    
    render() {
        return (
            <div>
                {this.props.products.map(product =>
                    <div>
                        <div className="col-sm-6 col-md-3 col-xs-12" style={{ borderColor: '1px solid red', marginTop: '20px' }}>
                            <span style={{ backgroundColor: 'red' }}>{product.pizzaCategory}</span>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src={product.image} style={{ width: '200px', height: '136px', margin: '5px 18px 0px 18px' }} />}
                            >
                                <Meta title={product.name} description={product.description} />
                                <div style={{ textAlign: 'center', marginTop: '10px' }}><Button type="primary" onClick={() => this.addToCart(product)}>Add to cart</Button></div>
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
        this.props.addToCart(product)
    }
}
export default Product;    