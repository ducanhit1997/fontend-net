import React, { Component } from 'react';
import { Icon, InputNumber, Button } from 'antd';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            sum: 0
        };
    }
    componentDidMount() {
        let update = this.props.data
        let dataAfterUpdate = []
        var total = 0;
        update.map((val) => {
            let objetTmp = { ...val, money: parseInt(val.item.description + "") }
            objetTmp.item.money = parseInt(val.item.description)
            total += objetTmp.item.money;
            dataAfterUpdate.push(objetTmp)
            //localStorage.setItem('CART', JSON.stringify(dataAfterUpdate));
        })
        this.setState({ data: dataAfterUpdate, sum: total })
    }

    onChange = (value, id) => {
        let update = this.state.data
        // console.log("data none update", this.state.data)
        let dataAfterUpdate = []
        var total = 0;
        update.map((val) => {
            let objetTmp = { ...val, money: parseInt(val.item.description + "") }
            if (objetTmp.item.id === id) {
                objetTmp.item.money = parseInt(value) * parseInt(val.item.description)
            }
            total += objetTmp.item.money;
            dataAfterUpdate.push(objetTmp)
            //localStorage.setItem('CART', JSON.stringify(dataAfterUpdate));
        })
        this.setState({ data: dataAfterUpdate, sum: total })

        //console.log("date update", dataAfterUpdate)
    }
    showMessDelete = (ind) => {
        alert(ind)
        // let update = this.state.data
        // let dataAfterUpdate = []
        // var total = 0;
        // update.map((val) => {
        //     let objetTmp = {...val, money: parseInt(val.item.description + "") }
        //     if (objetTmp.item.id === id) {
        //         update.splice(id+1);
        //     }
        //     total += objetTmp.item.money;
        //     dataAfterUpdate.push(objetTmp)
        //     //localStorage.setItem('CART', JSON.stringify(dataAfterUpdate));
        // })
        // this.setState({ data: dataAfterUpdate, sum: total })
    }
    formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    render() {
        var { data } = this.state;
        console.log(data)
        //const count = data.length
        var price = 0;
        //var countProduct =1;
        data.map(item => {
            price = parseInt(item.item.description) * 2
            console.log(price)
        })
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8" style={{ backgroundColor: '#e5e5e5' }}>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Tên sản phẩm</th>
                                    <th scope="col">Số lượng</th>
                                    <th scope="col">Hình ảnh</th>
                                    <th scope="col">Đơn giá</th>
                                    <th scope="col">Thành tiền</th>
                                    <th scope="col">Xóa</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    (data != null) && data.map((item, ind) =>
                                        <tr>
                                            {/* //<th>{item.item.description} * {item.item.quanlity}</th> */}
                                            <th scope="row">{item.item.name}</th>
                                            <th scope="row"><InputNumber min={1} max={10} defaultValue={1} onChange={(val) => this.onChange(val, item.item.id)} /></th>
                                            <th scope="row"><img src={item.item.image} style={{ width: '50px', height: '50px' }}></img></th>
                                            <th scope="row">{this.formatNumber(item.item.description)} VND</th>
                                            <th scope="row">{this.formatNumber(item.item.money)} VND</th>
                                            <th>
                                                <Button onClick={(event) => { event.stopPropagation(); this.showMessDelete(ind) }}>
                                                    <Icon type="delete" title="Update customer" />
                                                </Button>
                                            </th>
                                        </tr>
                                        //<p>{item.item.description} * {item.item.quanlity}</p>
                                    )
                                }
                            </tbody>
                        </table>
                        <div>
                            <p style={{float:'right', fontWeight:'bold'}}>Tổng: {this.formatNumber(this.state.sum)} VND</p>
                        </div>
                    </div>
                    {/* <div className="col-sm-4">
                        
                        <p>Tổng giá: {this.formatNumber(this.state.sum)} VND</p>
                    </div> */}
                </div>
            </div>
        );
    }
}
export default Cart;