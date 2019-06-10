import React, { Component } from 'react';
import { Icon, Drawer, Button, message } from 'antd';
import apiCall from '../../../utils/apiCall';
import FormAddCustomer from './formAddCustomer';
import { connect } from 'react-redux';
import { act_LoadCustomer_Request, act_FindCustomer_Request } from '../../../redux/customer/action';


class TableData extends Component {
    state = {
        openFormUpdate: false,
        openFormAddUser: false,
        isUpdate: false,
        customers: []
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

    Register = (values) => {
        apiCall('users/register', 'POST', {
            username: values.username,
            password: values.password,
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
        }).then(res => {
            var { customers } = this.state;
            console.log(customers)
            customers.push(values)
            this.setState({ isRegister: true });
            if (this.state.isRegister) {
                message.success('Add user suscessfully!', 1);
                this.setState({ visible: false })
            }
        })
    }
    Update = (e) => {
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
        if (error) {
            var token = 'Bearer ' + localStorage.getItem('token');
            console.log(token);
            this.setState({ loading: 'Please wait.......' });
            apiCall('users/edit', 'POST', token, {
                id: id_update,
                firstName: firstname_update,
                lastName: lastname_update,
                email: email_update
            }).then(res2 => {
                console.log(res2);
                this.setState({ isUpdate: true });
                if (this.state.isUpdate) {
                    message.success('Update user suscessfully!', 1);
                }
            })
        }
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
                username_update: itemCustomer.username,
                firstname_update: itemCustomer.firstName,
                lastname_update: itemCustomer.lastName,
                email_update: itemCustomer.email
            })
        }
        if(nextProps && nextProps.customers) {
            var { customers } = nextProps;
            this.setState({
                customers: customers
            })
            this.props.loadCustomer();
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
                                <th>STT</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Email</th>
                                <th>Username</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.customers.map((customer, index) => 
                                <tr>
                                    <td>{index + 1}</td>
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
                            )
                            }
                        </tbody>
                    </table>

                </div>
                <Drawer
                    title="Add new user"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.openFormAddUser}
                    width={350}
                >
                    <FormAddCustomer Register={this.Register} />
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
                            <label className="control-label" htmlFor="email">Username:</label>
                            <div>
                                <input type="text" className="form-control" id="username" name="username_update" value={this.state.username_update} onChange={this.onChange} placeholder="Enter email" />
                                <div style={{ color: 'red' }}>{this.state.err_username_update}</div>
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