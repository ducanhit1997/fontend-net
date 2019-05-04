import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            user_id: '',
            role: '',
            isLogin: false,
        };
    }
    Login = (e) => {
        e.preventDefault();
        axios('http://localhost:57136/api/auth/login', {
            method: 'POST',
            data: {
                username: this.state.username,
                password: this.state.password
            }
        }).then(e => {
            let acc = e.data;
            this.setState({isLogin: true})
            console.log(this.state.isLogin);
            localStorage.setItem("ACCESSTOKEN", true);
            window.location.reload();
            // console.log(acc);
            alert("Login successfull")
        }).catch(e => 
            console.log(this.state.isLogin)
            );
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    }
    render() {
        if(this.state.isLogin){
          return( <Redirect to="/"/>) 
        }
        return (
            <div>
                
                <form className="form-horizontal" onSubmit={this.Login}>
                    <div className="form-group">
                        <label className="control-label col-sm-4" htmlFor="email">Username:</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="email" name="username" value={this.state.username} onChange={this.onChange} placeholder="Enter email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-4" htmlFor="pwd">Password:</label>
                        <div className="col-sm-4">
                            <input type="password" className="form-control" id="pwd" name="password" value={this.state.password} onChange={this.onChange} placeholder="Enter password" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-4 col-sm-8">
                            <button type="submit" className="btn btn-default">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;