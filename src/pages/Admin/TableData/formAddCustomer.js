import React, { Component } from 'react';
import apiCall from '../../../utils/apiCall';
import {Form, Icon, Input, Button } from 'antd';

class formAddCustomer extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                this.props.Register(values)
            }
        });
    };
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Mật khẩu không trùng nhau!');
        } else {
            callback();
        }
    };
    checkMailExist = (rule, value, callback) => {
        //alert(value)
        const form = this.props.form;
        apiCall('users/checkemail', 'POST', {
            email: value
        }).then(res => {
            console.log(res.data)
            if (value && res.data === 'Email already') {
                callback('Email đã được đăng ký!');
            } else {
                callback();
            }
        })
    }
    checkUsernameExist = (rule, value, callback) => {
        //alert(value)
        const form = this.props.form;
        apiCall('users/check-username', 'POST', {
            username: value
        }).then(res => {
            console.log(res.data)
            if (value && res.data === 'Username already') {
                callback('Username đã tồn tại trong hệ thôngs');
            } else {
                callback();
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [
                                { required: true, message: 'Vui lòng nhập username!' },
                                { validator: this.checkUsernameExist }
                            ],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Vui lòng nhập mật khẩu!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Nhập mật khẩu"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('confirm', {
                            rules: [
                                {
                                    required: true, message: 'Vui lòng nhập mật khẩu!'
                                },
                                {
                                    validator: this.compareToFirstPassword,
                                }
                            ],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Nhập lại mật khẩu"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('email', {
                            rules: [
                                { required: true, message: 'Vui lòng nhập email!' },
                                { validator: this.checkMailExist },
                                {
                                    type: 'email',
                                    message: 'E-mail không đúng định dạng!',
                                },

                            ],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="email"
                                placeholder="Email"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('firstName', {
                            rules: [{ required: true, message: 'Vui lòng nhập firstname!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Firstname"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('lastName', {
                            rules: [{ required: true, message: 'Vui lòng nhập lastname!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Lastname"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Thêm khách hàng
                                    </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
const WrappedNormalRegisterForm = Form.create({ name: 'normal_login' })(formAddCustomer);
export default WrappedNormalRegisterForm
