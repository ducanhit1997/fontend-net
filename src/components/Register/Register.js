import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div>
                <form className="form-horizontal" action="/action_page.php">
                    <div className="form-group">
                        <label className="control-label col-sm-4" htmlFor="email">Tên:</label>
                        <div className="col-sm-4">
                            <input type="email" className="form-control" id="email" placeholder="Enter name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-4" htmlFor="email">Email:</label>
                        <div className="col-sm-4">
                            <input type="email" className="form-control" id="email" placeholder="Enter email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-4" htmlFor="pwd">Password:</label>
                        <div className="col-sm-4">
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" />
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

export default Register;