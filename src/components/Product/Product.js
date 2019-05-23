import React, { Component } from 'react';
import apiCall from './../../utils/apiCall';
import { connect } from 'react-redux';
import { Card } from 'antd';
const { Meta } = Card;
//import {act_LoadProduct_Request} from './../../redux/product/action';
class Product extends Component {
    state = {
        products: []
    }
    componentDidMount() {
        apiCall('products', 'GET', null).then(res => {
            console.log(res.data);
            const products = res.data;
            this.setState({ products: products });
        })
    }
    render() {
        return (
            this.state.products.map(product =>
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
                    <div className="col-sm-6 col-md-3 col-xs-12" style={{borderColor:'1px solid red'}}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={product.image} />}
                        >
                            <Meta title={product.name} description={product.description} />
                        </Card>
                    </div>
                    <div className="col-sm-6 col-md-3 col-xs-12" style={{borderColor:'1px solid red'}}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={product.image} />}
                        >
                            <Meta title={product.name} description={product.description} />
                        </Card>
                    </div>
                    <div className="col-sm-6 col-md-3 col-xs-12" style={{borderColor:'1px solid red'}}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={product.image} />}
                        >
                            <Meta title={product.name} description={product.description} />
                        </Card>
                    </div>
                    <div className="col-sm-6 col-md-3 col-xs-12" style={{borderColor:'1px solid red'}}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={product.image} />}
                        >
                            <Meta title={product.name} description={product.description} />
                        </Card>
                    </div>
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
    return {
        products: state.product
    }
}
// const mapDispatchToProps = (dispatch, props) =>{
//     return{
//         loadProduct: () =>{
//             dispatch(act_LoadProduct_Request())
//         }
//     }
// }
export default connect(mapStateToProps)(Product);    