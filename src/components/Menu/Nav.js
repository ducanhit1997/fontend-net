import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import apiCall from '../../utils/apiCall';
import { Menu, notification, Icon, Badge, Modal, Button } from 'antd';
import LoginForm from './login'
import RegisterForm from './register'
const SubMenu = Menu.SubMenu;

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            loading: '',
            showFormLogin: false,
            showFormRegister: false,
            username_register: '',
            password_register: '',
            repassword_register: '',
            firstname_register: '',
            lastname_register: '',
            email: '',
            firstName_update: '',
            roleAdmin: false,
            isRegister: false

        };
    }
    Login = (username, password) => {
        // e.preventDefault();
        //Ưconsole.log(this.state);
        this.setState({ loading: 'Vui lòng đợi....' });
        // var { username, password } = this.state;
        apiCall('login', 'POST', {
            username: username,
            password: password
        }).then(res => {
            const acc = res.data;
            console.log(acc)
            //this.setState({profile: acc});
            const token = acc.token;
            const firstName = acc.firstName;
            const lastName = acc.lastName;
            const email = acc.email;
            const role = acc.role;
            //
            //console.log(role);

            const name = lastName + " " + firstName;
            localStorage.setItem("name", name);
            localStorage.setItem("firstName", firstName);
            localStorage.setItem("lastName", lastName);
            localStorage.setItem("email", email);
            localStorage.setItem("token", token);
            localStorage.setItem("role", role)

            this.setState({ isLogin: true })
            //this.setState({username: '',password:'', loading:''});

            localStorage.setItem("ACCESSTOKEN", true);
            if (this.state.isLogin) {
                notification.success({
                    message: 'Bạn đã đăng nhập thành công'
                });
                if (role === 'admin') {
                    this.setState({ roleAdmin: true })
                    if (this.state.roleAdmin === true) {
                        const roleAdmin = true;
                        localStorage.setItem("roleAdmin", roleAdmin);
                    }
                }
                this.setState({ showFormLogin: false })
                window.location.reload();
            }
        }).catch(e => {
            this.setState({ loading: 'Sai thông tin đăng nhập!!' });
        })
    }
    Register = (username, password, firstname, lastname, email) => {
        apiCall('users/register', 'POST', {
            username: username,
            password: password,
            firstName: firstname,
            lastName: lastname,
            email: email
        }).then(res2 => {
            console.log(res2);
            this.setState({ isRegister: true });
            if (this.state.isRegister) {
                notification.success({
                    message: 'Bạn đã đăng ký thành công'
                });

                this.setState({ showFormRegister: false })
            }
        })
    }
    showFormRegister = () => {
        console.log('registeer')
        this.setState({
            showFormRegister: !this.state.showFormRegister,
            // showFormLogin: false
        })
    }
  
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
        if (e.key === 'login') {
            this.setState({
                showFormLogin: true,
            });
        }
        if (e.key === 'logout') {
            this.setState({ user_id: '', roleAdmin: false, data: [] });
            localStorage.clear();
            notification.success({
                message: 'Bạn đã đăng xuất thành công'
            });
            window.location.reload();
        }
        if (e.key === 'profile') {
            this.setState({
                showProfile: true,
            });
        }
    }
    handleOk = e => {
        console.log(e);
        this.setState({
            showFormLogin: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            showFormLogin: false,
        });
    };
    onCloseProfile = () => {
        this.setState({
            showProfile: false,
        });
    };

    render() {
        const isLogin = localStorage.getItem("ACCESSTOKEN");
        const name = localStorage.getItem("name");
        const firstName = localStorage.getItem("firstName");
        const lastName = localStorage.getItem("lastName");
        const email = localStorage.getItem("email");
        const roleAdmin = localStorage.getItem("roleAdmin");
        //console.log(firstName);
        //console.log("dta amenu", this.props.data)
        var { data } = this.props;
        const count = data.length
        console.log(count);
        return (
            <div className="as">
                <Menu
                    onClick={this.handleClick}
                    mode="horizontal"
                >
                    <Menu.Item key="mail">
                        <Link to="/">Trang chủ</Link>
                    </Menu.Item>
                    <Menu.Item key="app">
                        <Link to="/about">Giới thiệu</Link>
                    </Menu.Item>
                    {
                        (roleAdmin) ?
                            <Menu.Item key="admin">
                                <Link to="/admin">Truy cập trang admin</Link>
                            </Menu.Item> :
                            <Menu.Item key="admsin" style={{ listStyle: 'none' }}>
                            </Menu.Item>
                    }
                    {
                        (isLogin) ?
                            <SubMenu title={<span className="submenu-title-wrapper" style={{ color: 'red' }}> Xin chào:  {(name)}<Icon type="caret-down" /></span>}>
                            <Menu.Item title="Item 1" key="logout">
                                    Đăng xuất
                                </Menu.Item>
                            </SubMenu> :
                            <Menu.Item key="login">
                                <Button>Đăng nhập</Button>
                            </Menu.Item>
                    }
                    <Menu.Item key="appcart">
                        {/* <Link to="/cart" >Gio hang ({this.props.data.length})</Link> */}
                        {
                            (isLogin) ?
                                <Link to={{
                                    pathname: '/cart',
                                    state: {
                                        data: this.props.data,
                                    }
                                }}>Giỏ hàng  <Badge count={this.props.data.length}>
                                        <Icon type="shopping-cart" />
                                    </Badge></Link>
                                :
                                <Link style={{}}></Link>
                        }
                    </Menu.Item>

                </Menu>
                <Modal
                    // title="LOGIN"
                    centered={true}
                    style={{ top: 60 }}
                    // visible={true}
                    visible={this.state.showFormLogin}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={'50%'}
                    height={'100%'}
                    footer={null}
                >
                    {this.state.showFormRegister ?
                        <RegisterForm onSubmitRegister={this.Register} showFormLogin={this.showFormRegister} /> :
                        <LoginForm loading={this.state.loading} onSubmitLogin={this.Login} showFormRegister={this.showFormRegister} />
                    }

                </Modal>
                {/* <Drawer
                    title="Đăng ký"
                    placement="right"
                    closable={true}
                    onClose={this.onCloseFormRegister}
                    visible={this.state.showFormRegister}
                    width={350}
                >
                    <form className="form-horizontal" onSubmit={this.Register}>
                        <div className="form-group">
                            <label className="control-label" htmlFor="email">Tên đăng nhập:</label>
                            <div>
                                <input type="text" className="form-control" id="email" name="username_register" value={this.state.username_register} onChange={this.onChange} placeholder="Enter email" />
                                <div style={{ color: 'red' }}>{this.state.err_username}</div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label" htmlFor="pwd">Mật khẩu:</label>
                            <div>
                                <input type="password" className="form-control" id="pwd" name="password_register" value={this.state.password_register} onChange={this.onChange} placeholder="Enter password" />
                                <div style={{ color: 'red' }}>{this.state.err_password}</div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label" htmlFor="pwd">Nhập lại mật khẩu:</label>
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
                </Drawer> */}
            </div>
        );
    }
}

export default Nav;