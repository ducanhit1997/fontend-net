import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Footer extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={12}>col-12</Col>
                    <Col span={12}>col-12</Col>
                </Row>
            </div>
        );
    }
}

export default Footer;