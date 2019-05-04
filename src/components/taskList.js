import React, { Component } from 'react';
// kết  nối với store để lấy dữ liệu
import {  connect } from 'react-redux';
class taskList extends Component {
    createListItem(){
        return this.props.tasks.map((task)=>{
            return(
                <li key={task.id}>{task.name}</li>
            );
        });
    }
    render() {
        
        return (
            <div>
                <ul>
                    {this.createListItem()}
                </ul>
            </div>
        );
    }
}
// chuyển các state của store thành các props của component
const mapStateToProps = (state) =>{
    return {
        // lấy key và value từ reducer trong store key :value
        tasks: state.tasks
    }
}
export default connect(mapStateToProps)(taskList);