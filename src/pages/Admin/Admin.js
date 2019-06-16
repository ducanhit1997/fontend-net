import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import TableData from './TableData/TableData';
import ListProduct from './TableData/ListProduct'
import ListCategory from './TableData/ListCategory'
import './style.css';
const { Header, Sider, Content } = Layout;
class Admin extends Component {
    state = {
        collapsed: false,
        showCustomer: true,
        showProduct: false,
        showCategory: false
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
        if (e.key === 'product') {
            this.setState({
                showCustomer: false,
                showProduct: true,
                showCategory: false
            })
        }
        if (e.key === 'user') {
            this.setState({
                showCustomer: true,
                showProduct: false,
                showCategory: false
            })
        }
        if (e.key === 'category') {
            this.setState({
                showCustomer: false,
                showProduct: false,
                showCategory: true
            })
        }
    }
    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu mode="inline" defaultSelectedKeys={['1']} onClick={this.handleClick}>
                        <Menu.Item key="user">
                            <Icon type="user" />
                            <span>Quản lý khách hàng</span>
                        </Menu.Item>
                        <Menu.Item key="category">
                            <Icon type="upload" />
                            <span>Quản lý loại sản phẩm</span>
                        </Menu.Item>
                        <Menu.Item key="product">
                            <Icon type="video-camera" />
                            <span>Quản lý sản phẩm</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <div>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                            {
                                (this.state.showCustomer) ?
                                    <Breadcrumb style={{ margin: '0px 0px 0px 15px' }}>
                                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                                        <Breadcrumb.Item>Quản lý khách hàng</Breadcrumb.Item>
                                    </Breadcrumb> : <div></div>
                            }
                            {
                                (this.state.showCategory) ?
                                    <Breadcrumb style={{ margin: '0px 0px 0px 15px' }}>
                                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                                        <Breadcrumb.Item>Quản lý loại sản phẩm</Breadcrumb.Item>
                                    </Breadcrumb> : <div></div>
                            }
                            {
                                (this.state.showProduct) ?
                                    <Breadcrumb style={{ margin: '0px 0px 0px 15px' }}>
                                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                                        <Breadcrumb.Item>Quản lý sản phẩm</Breadcrumb.Item>
                                    </Breadcrumb> : <div></div>
                            }
                        </div>
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                        }}
                    >   {
                            (this.state.showCustomer) ?
                                <TableData /> : <div></div>
                        }
                        {
                            (this.state.showCategory) ?
                                <ListCategory /> : <div></div>
                        }
                        {
                            (this.state.showProduct) ?
                                <ListProduct /> : <div></div>
                        }
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
export default Admin;