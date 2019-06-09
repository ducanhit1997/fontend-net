import React, { Component } from 'react'
import "./login.style.css"
import apiCall from '../../utils/apiCall';
import bg_form_login from './images/bg_form_login.png'
import { Row, Col, Form, Icon, Input, Button } from 'antd';

class RegisterForm extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                this.props.onSubmitRegister(values.username, values.password, values.firstname, values.lastname, values.email)
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
    render() {
        const { loading } = this.props
        const { getFieldDecorator } = this.props.form;
        return (
            // <div className="login__form--wrapper" style={{
            //     backgroundImage: `url(${bg_form_login})`
            // }}>
            <Row>
                <Col md={6}> </Col>
                <Col md={12} className="form_login--wrapper">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                <div className="title-login">
                                    Đăng ký tài khoản
                                </div>
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Vui lòng nhập username!' }
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
                                {getFieldDecorator('firstname', {
                                    rules: [{ required: true, message: 'Vui lòng nhập firstname!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Firstname"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('lastname', {
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
                                    Đăng ký
                                    </Button>
                                <a onClick={this.props.showFormLogin}>
                                    Đã có tài khoản? Đăng nhập ngay
                                    </a>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>

                <Col md={6}> </Col>
            </Row>
            //</div>
        )
    }
}

const WrappedNormalRegisterForm = Form.create({ name: 'normal_login' })(RegisterForm);
export default WrappedNormalRegisterForm