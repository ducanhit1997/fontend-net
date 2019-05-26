import React, { Component } from 'react';   
import { connect } from 'react-redux';
import { Card } from 'antd';
import {act_LoadProduct_Request} from '.././../redux/product/action';
const { Meta } = Card;
class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
            products: []
        }
    }
    componentWillMount() {
        this.props.loadProduct()
    }
    render() {
        console.log(this.props.products,"okokok");
        return (
            this.props.products.map(product =>
                <div>
                    <div className="col-sm-6 col-md-3 col-xs-12" style={{borderColor:'1px solid red'}}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={product.image} />}
                        >
                            <Meta title={product.name} description={product.description} />
                        </Card>
                    </div>
                </div>
            )
        );
    }
}
const mapStateToProps = (state) => {
    //console.log(state.product);
    return {
        products: state.product
    }
}
// 1
const mapDispatchToProps = (dispatch, props) =>{
    return{
        loadProduct: () =>{
            dispatch(act_LoadProduct_Request())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Product);    