import React, { Component } from 'react';
import CustomerList from './../../components/CustomerList/CustomerList';
import {connect} from 'react-redux';
class ProductListPage extends Component {   
    render() {       
        return (           
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" class="btn btn-default">Them san pham</button>
                <CustomerList/>
            </div>            
        );
    }
}
const mapStateToProps = state =>{
    return{
        products : state.products
    };
};
export default connect(mapStateToProps)(ProductListPage);