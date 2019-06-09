import React, { Component } from 'react'
import "./login.style.css"
import banner_left_bg from './images/banner-left.png'
import banner_right_bg from './images/banner-right.png'
import bg_form_login from './images/bg_form_login.png'
import { Row, Col , Form, Icon, Input, Button, Checkbox} from 'antd';

class LoginForm extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.onSubmitLogin(values.username, values.password)
            }
        });
    };

    render() {
      const {loading} = this.props
      const { getFieldDecorator } = this.props.form;
    return (
        <div className="login__form--wrapper" style={{
            backgroundImage: `url(${bg_form_login})`
        }}>
            
            
            <Row>
                <Col md={6}> </Col>

                <Col md={12} className="form_login--wrapper">
                    <div style={{
                           display: 'flex',
                           justifyContent: 'center',
                        }}>
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                    {
                                        (loading!='') &&
                                        <div className="block_error">
                                            <div className="error_message">{loading}</div>
                                        </div>
                                    }
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('username', {
                                        rules: [{ required: true, message: 'Please input your username!' }],
                                    })(
                                        <Input
                                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder="Username"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: 'Please input your Password!' }],
                                    })(
                                        <Input
                                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            type="password"
                                            placeholder="Password"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('remember', {
                                        valuePropName: 'checked',
                                        initialValue: true,
                                    })(<Checkbox>Remember me</Checkbox>)}
                                    <a className="login-form-forgot" href="">
                                        Forgot password
                                    </a>

                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                    </Button>
                                    Or <a href="">Login</a>
                                </Form.Item>
                            </Form>
                    </div>
                </Col>

                <Col md={6}> </Col>
            </Row>
           
        </div>
    )
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LoginForm);
export default  WrappedNormalLoginForm