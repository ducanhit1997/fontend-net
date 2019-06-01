import React, { Component } from 'react';
import ProductContainer from '../../container/ProductContainer';
class ListProduct extends Component {
    addProductToCard=(item, quanlity)=>{
        this.props.addProductToCard(item, quanlity)
    }
    render() {
        return (
            <div>
                <ProductContainer  addProductToCard={this.addProductToCard}/>
            </div>
        );
    }
}
export default ListProduct;