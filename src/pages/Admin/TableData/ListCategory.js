import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Drawer, Button, Modal, notification } from 'antd';
import { act_LoadCategory_Request, act_LoadCategoryById_Request } from '../../../redux/category/action';
import FormAddCategory from './formAddCatelogy';
import apiCall from '../../../utils/apiCall';
class ListCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categorys: [],
            openFormAddCatelogy: false,
            addCategory: false,
            openFormUpdate: false,
            id_update: '',
            name_update: '',
            visible: false,
            id_delete:'',
            loading: ''
        }
    }

    showNameCategory = (id) => {
        var nameCategory = '';
        if (id === 1) {
            nameCategory = 'Hải sản'
        } else if (id === 2) {
            nameCategory = 'Thập cẩm'
        }
        else if (id === 3) {
            nameCategory = 'Truyền thống'
        }
        return nameCategory;
    }
    formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    showFormAddCatelogy = () => {
        this.setState({
            openFormAddCatelogy: true
        })
    }
    onClose = () => {
        this.setState({
            openFormUpdate: false
        })
    }
    addCategory = (values) => {
        const token = localStorage.getItem("token")
        console.log(token)
        this.setState({
            loading: 'Vui lòng đợi...'
        })
        apiCall('catalogy/add', 'PUT', {
            pizzaCategory: values.name,
        }, { 'Authorization': "Bearer " + token }).then(res => {
            //console.log(res)
            this.setState({
                loading: ''
            })
            var { categorys } = this.state;
            //console.log(customers)
            categorys.push(values)
            if (res.data == "Catalogy already") {
                notification.success({
                    message: 'Loại sản phẩm đã tồn tại trong hệ thống'
                });
            } else {
                notification.success({
                    message: 'Thêm loại sản phẩm thành công'
                });
                this.setState({
                    openFormAddCatelogy: false
                })
            }
        })
    }
    showFormEdit = (text) => {
        //console.log(text)
        this.props.findCatelogy(text);
        this.setState({
            openFormUpdate: true
        })
    }
    showModal = () => {
       
      };
   

    handleCancel = e => {
        // console.log(e);
        this.setState({
            visible: false,
        });
    };

    componentWillReceiveProps(nextProps) {
        //console.log('b')
        if (nextProps && nextProps.itemCatelogy) {
            var { itemCatelogy } = nextProps;
            this.setState({
                id_update: itemCatelogy.id,
                name_update: itemCatelogy.pizzaCategory,
            })
        }
        if (nextProps && nextProps.categorys) {
            var { categorys } = nextProps;
            this.setState({
                categorys: categorys
            })
            this.props.load();
        }
    }

    onClose = () => {
        this.setState({
            openFormAddCatelogy: false
        })
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    update = () => {
        var { name_update, id_update } = this.state;
        const token = localStorage.getItem("token")
        // console.log(token)

        apiCall('catalogy/update', 'PUT', {
            id: id_update,
            pizzaCategory: name_update,
        }, { 'Authorization': "Bearer " + token }).then(res => {
            var { categorys } = this.state;
            // getCategoryById = (id_update) =>{

            // }
            categorys.forEach((v, i) => {
                if (v.id === id_update) {
                    v.pizzaCategory = name_update
                    this.setState({
                        categorys: categorys
                    })
                }
            });
            if (res.data == "Catalogy already") {
                notification.success({
                    message: 'Loại sản phẩm đã tồn tại trong hệ thống'
                });
            } else {
                notification.success({
                    message: 'Sửa loại sản phẩm thành công'
                });
                this.setState({
                    openFormUpdate: false
                })
            }
        })
    }
    showFormDelete = (text) => {
        //alert(text)
        this.setState({
            visible: true,
        });
        this.setState({
            id_delete: text
        })
       
    }
    handleOk = e => {
        //console.log(e);
        const token = localStorage.getItem("token")
        // console.log(token)
        apiCall(`catalogy/delete/${this.state.id_delete}`, 'PUT', {
        }, { 'Authorization': "Bearer " + token }).then(res => {
            var { categorys } = this.state;
            categorys.splice(this.state.id_delete);
            this.setState({
                categorys: categorys
            })
            notification.success({
                message: 'Xóa loại sản phẩm thành công'
            });
            this.setState({
                openFormUpdate: false
            })

        })
        this.setState({
            visible: false,
        });
    };
    componentDidMount() {
        //console.log('a')
        this.props.load();
    }
    render() {
        return (
            <div>
                <Button onClick={this.showFormAddCatelogy} type="primary" style={{ margin: '0px 0px 5px 0px' }}><Icon type="plus" />Thêm loại sản phẩm</Button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã loại</th>
                            <th>Tên loại</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.categorys.map((category, index) =>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{category.id}</td>
                                <td>{category.pizzaCategory}</td>
                                <td>
                                    <span style={{marginLeft:'5px'}}>
                                    <Button onClick={() => { this.showFormEdit(category.id) }}>
                                        <Icon type="edit" />
                                    </Button>
                                    </span>
                                    <span style={{marginLeft:'5px'}}>
                                    <Button onClick={() => { this.showFormDelete(category.id) }}>
                                        <Icon type="delete" />
                                    </Button>
                                    </span>
                                </td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
                <Drawer
                    title="Thêm loại sản phẩm"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.openFormAddCatelogy}
                    width={350}
                >
                    <FormAddCategory addCategory={this.addCategory}  loading={this.state.loading} />
                </Drawer>
                <Drawer
                    title="Sửa loại sản phẩm"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.openFormUpdate}
                    width={300}
                >
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label className="control-label" htmlFor="email">ID:</label>
                            <div>
                                <input type="text" className="form-control" name="id_update" readOnly value={this.state.id_update} onChange={this.onChange} placeholder="Enter email" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label" htmlFor="email">Tên loại sản phẩm:</label>
                            <div>
                                <input type="text" className="form-control" name="name_update" value={this.state.name_update} onChange={this.onChange} placeholder="Enter email" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label" htmlFor="email"></label>
                            <Button onClick={this.update}>Update</Button>
                        </div>
                    </form>
                </Drawer>
                <Modal
                    title="Xóa loại sản phẩm"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <span style={{color: 'green', textAlign: 'center'}}>Bạn có chắc chắn xóa loại sản phẩm này?</span>
                </Modal>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    //console.log(state.category);
    return {
        categorys: state.category,
        itemCatelogy: state.itemCatelogy
        //itemCustomer: state.itemCustomer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        load: () => {
            dispatch(act_LoadCategory_Request())
        },
        findCatelogy: (id) => {
            dispatch(act_LoadCategoryById_Request(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListCategory);    