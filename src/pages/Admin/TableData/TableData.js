import React, { Component } from 'react';
import { Icon, Drawer, Button, message } from 'antd';
import apiCall from '../../../utils/apiCall';

import { connect } from 'react-redux';
import { act_LoadCustomer_Request, act_FindCustomer_Request } from '../../../redux/customer/action';


class TableData extends Component {
    state = {
        openFormUpdate: false,
        openFormAddUser: false,
        username_register: '',
        password_register: '',
        repassword_register: '',
        firstname_register: '',
        lastname_register: '',
        email: '',
        isRegister: false,
        loading: '',
        // firstname_update: '',
        // lastname_update: '',
        // email_update: '',
        isUpdate: false,
    };

    showFormAddUser = () => {
        this.setState({
            openFormAddUser: true,
        });
    };

    onClose = () => {
        this.setState({
            openFormAddUser: false,
            openFormUpdate: false,
            err_firstname_update: '',
            err_lastname_update: '',
            err_email_update: '',
            err_username: '',
            err_firstname: '',
            err_lastname: '',
            err_password: '',
            err_repassword: '',
            err_email: '',
            loading: ''
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
    Update = (e) => {
        e.preventDefault();
        //console.log(this.state);
        var { firstname_update, lastname_update, email_update, id_update } = this.state;
        var error = true;
        if (firstname_update === '') {
            this.setState({ err_firstname_update: " Firstname can't be empty!" })
            error = false;
        } else {
            this.setState({ err_firstname_update: '' })
        }
        if (lastname_update === '') {
            this.setState({ err_lastname_update: "Lastname can't be empty!" })
            error = false;
        } else {
            this.setState({ err_lastname_update: '' })
        }
        if (email_update === '') {
            this.setState({ err_email_update: "Email can't be empty!" })
            error = false;
        } else {
            this.setState({ err_email_update: '' })
        }
        // apiCall('users/checkemail', 'POST', {
        //     email: email
        // }).then(res => {
        //     //console.log(res.data);
        //     if (res.data === 'Email already') {
        //         this.setState({ err_email: 'Email is exist!' })
        //         error = false;
        //     } else {
        if (error) {
            // console.log(this.state)
            var token = 'Bearer ' + localStorage.getItem('token');
            console.log(token);
            this.setState({ loading: 'Please wait.......' });
            apiCall('users/edit', 'POST', token,  {
                id: id_update,
                firstName: firstname_update,
                lastName: lastname_update,
                email: email_update
            }).then(res2 => {
                console.log(res2);
                this.setState({ isUpdate: true });
                if (this.state.isUpdate) {
                    message.success('Update user suscessfully!', 1);
                    // this.setState({ visible: false })
                    // window.location.reload();
                }
            })
        }
        //     }
        // })
    }

    componentDidMount() {
        this.props.loadCustomer();
    }
    showFormEdit = (text) => {
        //alert(text);
        this.props.findCustomer(text)
        this.setState({
            openFormUpdate: true,
        });
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemCustomer) {
            var { itemCustomer } = nextProps;
            this.setState({
                id_update: itemCustomer.user_id,
                firstname_update: itemCustomer.firstName,
                lastname_update: itemCustomer.lastName,
                email_update: itemCustomer.email
            })
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        //console.log(this.state);
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
                                        <Button onClick={() => { this.showFormEdit(customer.user_id) }}>
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
                    visible={this.state.openFormAddUser}
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
                <Drawer
                    title="Update user"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.openFormUpdate}
                    width={300}
                >
                    <form className="form-horizontal" onSubmit={this.Update}>
                        <div className="form-group">
                            <label className="control-label" htmlFor="email">ID:</label>
                            <div>
                                <input type="text" className="form-control" id="email" readOnly name="id_update" value={this.state.id_update} onChange={this.onChange} placeholder="Enter email" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label" htmlFor="email">Firstname:</label>
                            <div>
                                <input type="text" className="form-control" id="email" name="firstname_update" value={this.state.firstname_update} onChange={this.onChange} placeholder="Enter email" />
                                <div style={{ color: 'red' }}>{this.state.err_firstname_update}</div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label" htmlFor="email">Lastname:</label>
                            <div>
                                <input type="text" className="form-control" id="email" name="lastname_update" value={this.state.lastname_update} onChange={this.onChange} placeholder="Enter email" />
                                <div style={{ color: 'red' }}>{this.state.err_lastname_update}</div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label" htmlFor="email">Email:</label>
                            <div>
                                <input type="text" className="form-control" id="email" name="email_update" value={this.state.email_update} onChange={this.onChange} placeholder="Enter email" />
                                <div style={{ color: 'red' }}>{this.state.err_email_update}</div>
                            </div>
                        </div>
                        <div className="form-group1">
                            <div className="">
                                <button type="submit" loading={this.state.iconLoading} className="btn btn-default" ><Icon type="edit" />Update</button>
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
    //console.log(state.itemCustomer);
    return {
        customers: state.customer,
        itemCustomer: state.itemCustomer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        findCustomer: (idCustomer) => {
            dispatch(act_FindCustomer_Request(idCustomer))
        },
        loadCustomer: () => {
            dispatch(act_LoadCustomer_Request())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TableData);