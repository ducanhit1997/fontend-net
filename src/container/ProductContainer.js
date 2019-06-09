import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Radio,Pagination } from 'antd';
import Product from './../components/Product/Product';
import { act_LoadProduct_Request, act_LoadProductByCategory_Request, act_LoadPage_Request } from '../redux/product/action';
import { act_addToCart } from '../redux/cart/action';

class ProductContainer extends Component {
    state = {
        current: 1,
    };
    selectPage = page => {
        //alert(page);
        this.setState({
            current: page,
        });
        this.props.loadPage(page)
    };
    selectOption = (e) => {
        if (e.target.value === 'all') {
            this.props.loadPage(1)
        }
        if (e.target.value === 'mixed') {
            this.props.loadProductByCategory(2);
        }
        if (e.target.value === 'seafood') {
            this.props.loadProductByCategory(1);
        }
        if (e.target.value === 'traditional') {
            this.props.loadProductByCategory(3);
        }
    }
    componentWillMount() {
        this.props.loadPage(1);
    }
    addProductToCard = (item, quanlity) => {
        this.props.addProductToCard(item, quanlity)
    }
    render() {
        var { products, data, addToCart } = this.props;
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
                <Product addProductToCard={this.addProductToCard} data={data} addToCart={addToCart} products={products}></Product>
                <div style={{ float: 'right' }}>
                    <Pagination current={this.state.current} onChange={this.selectPage} total={50}/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state.cart);
    return {
        products: state.product,
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        loadProduct: () => {
            dispatch(act_LoadProduct_Request())
        },
        loadProductByCategory: (idCategory) => {
            dispatch(act_LoadProductByCategory_Request(idCategory))
        },
        addToCart: (product) => {
            dispatch(act_addToCart(product, 1))
        },
        loadPage: (page) =>{
            dispatch(act_LoadPage_Request(page))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);    