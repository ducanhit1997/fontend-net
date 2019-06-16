import React, { Component } from 'react';
import apiCall from '../../../utils/apiCall';
import { Form, Icon, Input, Button } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

class formAddCatelogy extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                this.props.addCategory(values)
            }
        });
    };
   
    render() {
        const { getFieldDecorator } = this.props.form;
        const {loading} = this.props;
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('name', {
                            rules: [
                                { required: true, message: 'Vui lòng nhập loại sản phẩm!' },
                            ],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Nhập tên loại sản phẩm"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Thêm
                                    </Button>
                    </Form.Item>
                    <FormItem>
                        <p style={{color:'red', fontWeight:'bold', marginLeft:'10px'}}>{loading}</p>
                    </FormItem>
                </Form>
            </div>
        );
    }
}
const WrappedNormalRegisterForm = Form.create({ name: 'normal_login' })(formAddCatelogy);
export default WrappedNormalRegisterForm
