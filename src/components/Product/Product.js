import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Radio } from 'antd';
import { act_LoadProduct_Request, act_LoadProductById_Request } from '.././../redux/product/action';
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
    selectOption =(e) =>{
       // var idCategory;
        if(e.target.value === 'all'){
            this.props.loadProduct();
            //this.setState({idCategory: '1'});
        }
        if(e.target.value === 'mixed'){
            //alert("Thap cam")
            this.props.loadProductById(2);
           // this.setState({idCategory: '2'});
        }
        if(e.target.value === 'seafood'){
            //alert("Thap cam")
            this.props.loadProductById(1);
           // this.setState({idCategory: '2'});
        }
         if(e.target.value === 'traditional'){
            //alert("Thap cam")
            this.props.loadProductById(3);
           // this.setState({idCategory: '2'});
        }
        
    }
    componentWillMount() {
        this.props.loadProduct();
    }
    render() {
        return (
            <div>
                <div className="category-product" style={{ paddingTop: '15px' }}>
                    <div class="btn-group" style={{ justifyContent: 'center', display: 'flex' }}>
                        <Radio.Group defaultValue="all" buttonStyle="solid" onChange={this.selectOption}>
                            <Radio.Button value="all">Tất cả</Radio.Button>
                            <Radio.Button value="traditional">Truyền thống</Radio.Button>
                            <Radio.Button value="mixed">Thập cẩm</Radio.Button>
                            <Radio.Button value="seafood">Hải sản</Radio.Button>
                        </Radio.Group>
                    </div>
                </div>
                {this.props.products.map(product =>
                    <div>
                        <div className="col-sm-6 col-md-3 col-xs-12" style={{ borderColor: '1px solid red', marginTop: '20px' }}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src={product.image} style={{ width: '238px', height: '136px' }} />}
                            >
                                <Meta title={product.name} description={product.description} />
                            </Card>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    //console.log(state.product);
    return {
        products: state.product
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        loadProduct: () => {
            dispatch(act_LoadProduct_Request())
        },
        loadProductById: (idCategory) =>{
            dispatch(act_LoadProductById_Request(idCategory))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);    