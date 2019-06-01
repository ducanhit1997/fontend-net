import React, { Component } from 'react';
import ProductContainer from '../../container/ProductContainer';
class ListProduct extends Component {
    addProductToCard=(item, quanlity)=>{
        this.props.addProductToCard(item, quanlity)
    }
   
    render() {
        var {data} = this.props;
        return (
            <div>
                <ProductContainer  data={data} addProductToCard={this.addProductToCard}/>
            </div>
        );
    }
}
export default ListProduct;