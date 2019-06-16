import React, { Component } from 'react';
import apiCall from '../../../utils/apiCall';
import { Form, Icon, Input, Button } from 'antd';

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
                </Form>
            </div>
        );
    }
}
const WrappedNormalRegisterForm = Form.create({ name: 'normal_login' })(formAddCatelogy);
export default WrappedNormalRegisterForm
