import React, { Component } from 'react';
import { Icon, Drawer, Button, message } from 'antd';
import apiCall from '../../../utils/apiCall';

import { connect } from 'react-redux';
import { act_LoadCustomer_Request } from '../../../redux/customer/action';


class TableData extends Component {
    state = {
        visible: false,
        username_register: '',
        password_register: '',
        repassword_register: '',
        firstname_register: '',
        lastname_register: '',
        email: '',
        isRegister: false,
        loading: ''
    };

    showFormAddUser = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    Register = (e) => {
        e.preventDefault();
        //console.log(this.state);
        var { username_register, password_register, repassword_register, firstname_register, lastname_register, email } = this.state;
        var error = true;
        if (username_register === '') {
            this.setState({ err_username: " Username can't be empty!" })
            error = false;
        } else {
            this.setState({ err_username: '' })
        }
        if (password_register === '') {
            this.setState({ err_password: "Password can't be empty!" })
            error = false;
        } else {
            this.setState({ err_password: '' })
        }
        if (repassword_register !== password_register) {
            this.setState({ err_repassword: 'Password is valid!' })
            error = false;
        } else {
            this.setState({ err_repassword: '' })
        }
        if (firstname_register === '') {
            this.setState({ err_firstname: "Firstname can't be empty!" })
            error = false;
        } else {
            this.setState({ err_firstname: '' })
        }
        if (lastname_register === '') {
            this.setState({ err_lastname: "Last name can't be empty!" })
            error = false;
        } else {
            this.setState({ err_lastname: '' })
        }
        if (email === '') {
            this.setState({ err_email: "Email can't be empty!" })
            error = false;
        } else {
            this.setState({ err_email: '' })
        }
        apiCall('users/checkemail', 'POST', {
            email: email
        }).then(res => {
            //console.log(res.data);
            if (res.data === 'Email already') {
                this.setState({ err_email: 'Email is exist!' })
                error = false;
            } else {
                if (error) {
                    this.setState({ loading: 'Please wait.......' });
                    apiCall('users/register', 'POST', {
                        username: username_register,
                        password: password_register,
                        firstName: firstname_register,
                        lastName: lastname_register,
                        email: email
                    }).then(res2 => {
                        console.log(res2);
                        this.setState({ isRegister: true });
                        if (this.state.isRegister) {
                            message.success('Add user suscessfully!', 1);

                            this.setState({ visible: false })
                            window.location.reload();
                        }
                    })
                }
            }
        })
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        //console.log(this.state);
    }
    selectCustomerId = () =>{
        //alert("ok")
    }
    componentDidMount() {
        this.props.loadCustomer();  
    }
    render() {
        return (
            <div>
                <div className="col-sm-12 col-md-12 col-xs-12" style={{ borderColor: '1px solid red', marginTop: '0px' }}>
                    <Button onClick={this.showFormAddUser} type="primary" style={{ margin: '0px 0px 5px 0px' }}><Icon type="plus" />Add new user</Button>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>User id</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Email</th>
                                <th>Username</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.customers.map(customer =>
                                <tr>
                                    <td>{customer.user_id}</td>
                                    <td>{customer.firstName}</td>
                                    <td>{customer.lastName}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.username}</td>
                                    <td>
                                        <Button onClick={this.selectCustomerId}>
                                            <Icon type="edit" title="Update customer" />
                                        </Button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div>
                <Drawer
                    title="Add new user"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    width={300}
                >
                    <form className="form-horizontal" onSubmit={this.Register}>
                        <div className="form-group">
                            <label className="control-label" htmlFor="email">Username:</label>
                            <div>
                                <input type="text" className="form-control" id="email" name="username_register" value={this.state.username_register} onChange={this.onChange} placeholder="Enter email" />
                                <div style={{ color: 'red' }}>{this.state.err_username}</div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label" htmlFor="pwd">Password:</label>
                            <div>
                                <input type="password" className="form-control" id="pwd" name="password_register" value={this.state.password_register} onChange={this.onChange} placeholder="Enter password" />
                                <div style={{ color: 'red' }}>{this.state.err_password}</div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label" htmlFor="pwd">Re-password:</label>
                            <div>
                                <input type="password" className="form-control" id="pwd" name="repassword_register" value={this.state.repassword_register} onChange={this.onChange} placeholder="Enter password" />
                                <div style={{ color: 'red' }}>{this.state.err_repassword}</div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label" htmlFor="email">Firstname:</label>
                            <div>
                                <input type="text" className="form-control" id="email" name="firstname_register" value={this.state.firstname_register} onChange={this.onChange} placeholder="Enter email" />
                                <div style={{ color: 'red' }}>{this.state.err_firstname}</div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label" htmlFor="email">Lastname:</label>
                            <div>
                                <input type="text" className="form-control" id="email" name="lastname_register" value={this.state.lastname_register} onChange={this.onChange} placeholder="Enter email" />
                                <div style={{ color: 'red' }}>{this.state.err_lastname}</div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label" htmlFor="email">Email:</label>
                            <div>
                                <input type="text" className="form-control" id="email" name="email" value={this.state.email} onChange={this.onChange} placeholder="Enter email" />
                                <div style={{ color: 'red' }}>{this.state.err_email}</div>
                            </div>
                        </div>
                        <div className="form-group1">
                            <div className="">
                                <button type="submit" loading={this.state.iconLoading} className="btn btn-default" >Submit</button>
                            </div>
                        </div>
                        <p style={{ color: 'red' }}>{this.state.loading}</p>
                    </form>
                </Drawer>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        customers: state.customer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        loadCustomer: () => {
            dispatch(act_LoadCustomer_Request())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TableData);