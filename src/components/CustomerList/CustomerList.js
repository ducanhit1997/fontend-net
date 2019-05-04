import React, { Component } from 'react';
import CustomerItem from '../CustomerItem/CustomerItem';

class CustomerList extends Component {
    render() {
        return (
            <div>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Danh sách sản phẩm</h3>
                    </div>
                    <div className="panel-body">

                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên</th>
                                    <th>Email</th>
                                    <th>Trạng thái</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                              <CustomerItem></CustomerItem>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        );
    }
}

export default CustomerList;