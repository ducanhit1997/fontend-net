import React, { Component } from 'react';
import './style.css';
class CategoryProduct extends Component {
    render() {
        return (
            <div className="category-product">
                <div class="btn-group">
                    <button type="button" class="btn btn-default">Thập cẩm</button>
                    <button type="button" class="btn btn-default">Hải sản</button>
                    <button type="button" class="btn btn-default">Truyền thống</button>
                </div>
            </div>
        );
    }
}

export default CategoryProduct;