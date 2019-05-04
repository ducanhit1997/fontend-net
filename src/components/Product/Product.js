import React, { Component } from 'react';
import apiCall from '../../utils/apiCall';
import {listAll} from './../../actions/index';
import {connect} from 'react-redux';
class Product extends Component {
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
            this.state.products.map(product => 
                <div>
                    <div className="col-sm-6 col-md-3 col-xs-12">
                        <a href="#" className="thumbnail">
                            <p>{product.name}</p>
                            <img src={product.avatar} alt="Generic placeholder thumbnail" />
                        </a>
                    </div>
                </div>
            )
        );
    }
}
const mapStateToProps = state => {
    return{
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return{
        listAll: (products) =>{
            dispatch(listAll(products))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Product);    