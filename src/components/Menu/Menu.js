import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './style.css';
class Menu extends Component {
    
    render() {
        const isLogin  = localStorage.getItem("ACCESSTOKEN");
        return (      
             
            <div>
                
                <div className="navbar navbar-default">
                    {/* <a className="navbar-brand" href="#"><img src={Logo} style={{width:'10px;', height:'10px;'}}></img></a> */}
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/">Trang chủ</Link>
                        </li> 
                        <li>
                            <Link to="/about">Giới thiệu</Link>
                        </li>
                        {
                            (isLogin)?
                            <li style={{display: 'none'}}></li>:
                            <li>
                                <Link to={`/login`}>Đăng nhập</Link>
                            </li>
                        }
                       
                        <li>
                            <Link to="/register">Đăng ký</Link>
                        </li>
                    </ul>
                </div>
            </div>         
        );
    }
    // showMenu = (menus) =>{
    //     var result = null;
    //     if(menus.lenght>0){
    //         result = menus.map((menu, index) =>{
    //             return(
    //             <Link key={index} to={menu.to}></Link>
    //             );
    //         });
    //     }
    //     return result;
    // }
}

export default Menu;