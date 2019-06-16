import React, { Component } from 'react'
import { notification, Select, Form, Icon, Input, Button, Checkbox } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import apiCall from '../../utils/apiCall';
const { Option } = Select;
const { TextArea } = Input;

const names = localStorage.getItem("name");
const id = localStorage.getItem("id");
const sum = localStorage.getItem("SUM");
class FormCart extends Component {
    state = {
        name: names,
        address: '',
        method: "1",
        id: id,
        sum: sum
    }
    
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    handleChange =(value) =>{
        this.setState({
            method: value
        })
    }
    datHang = () =>{
       
        const {data} = this.props;
        console.log(data)
        const arr = [];
        var sl=0;
        data.forEach((v, i) =>{
            sl += v.quanlity
            arr.push(v.item.id)
        })
        var listId = arr.join(',')
        console.log(sl)
        console.log(listId)
        var{id,name, address, method} = this.state;
        console.log(this.state)
        apiCall('order/add', 'POST', {
            id: id,
            name: name,
            address: address,
            method: method,
            productid: listId,
            sum: sum,
            quanlity: sl
        }).then(res2 => {
            notification.success({
                message: 'Bạn đã đặt hàng thành công'
            });
            localStorage.removeItem("CART")
            window.location.reload();
        })
    }
   
    render() {
        const names = localStorage.getItem("name");
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    <div className="title-login">
                        Đặt hàng
                                </div>
                </Form.Item>
                <Form.Item label="Tên khách hàng">
                    <Input defaultValue={names} name="name" value={names} readOnly onChange={this.onChange}/>
                </Form.Item>
                <FormItem label="Địa chỉ">
                    <TextArea rows={4} placeholder="Vui lòng nhập địa chỉ nhận hàng" name="address" value={this.state.address} onChange={this.onChange}/>
                </FormItem>
                <Form.Item label="Phương thức thanh toán">
                    <Select defaultValue="1" onChange={this.handleChange}>
                        <Option value="1">Thanh toán khi nhận hàng</Option>
                        <Option value="2">Chuyển khoản</Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={this.datHang} className="login-form-button">
                        Xác nhận đặt hàng
                    </Button>
                </Form.Item>
            </Form>

        )
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(FormCart);
export default WrappedNormalLoginForm