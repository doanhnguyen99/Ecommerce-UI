import React from 'react';
import { Menu, Row,Tabs, Col } from 'antd';
import {  MailOutlined, SettingOutlined } from '@ant-design/icons';
import WaitingAccept from './WaitingAccept';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const { SubMenu } = Menu;

const Order = () => {
    const  handleClick = e => {
        console.log('click ', e);
      };
    return (
        <Row>
            <Col offset={2} span={5}>
                <Menu
                    onClick={handleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    >
                    <SubMenu key="sub1" icon={<MailOutlined />} title="Quản lý giao dich">
                        
                        <Menu.Item key="1">Đơn hàng</Menu.Item>
                        <Menu.Item key="2">Đơn hàng dịch vụ tiện ích</Menu.Item>
                        <Menu.Item key="3">Sản phẩm yêu thích</Menu.Item>
                        <Menu.Item key="4">Địa chỉ nhận hàng</Menu.Item>
                        
                    </SubMenu>
                    
                    <SubMenu key="sub4" icon={<SettingOutlined />} title="Quản lý tài khoản">
                        <Menu.Item key="9">Thông tin tài khoản</Menu.Item>
                        <Menu.Item key="10">Shop yêu thích</Menu.Item>
                        <Menu.Item key="11">Ưu đãi của tôi</Menu.Item>
                        <Menu.Item key="12">Hỏi đáp</Menu.Item>
                    </SubMenu>
                </Menu>
            </Col>
            <Col span={15} style={{backgroundColor: "white", padding: "20px"}}>
                <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Chờ xác nhận" key="1">
                    <WaitingAccept type="waiting_accept"/>
                </TabPane>
                <TabPane tab="Đã xác nhận & Đang vận chuyển" key="2">
                    <WaitingAccept type="store_accepted"/>
                </TabPane>
                
                <TabPane tab="Đã giao hàng" key="4">
                <WaitingAccept type="user_success"/>
                </TabPane>
                <TabPane tab="Đã hủy" key="5">
                <WaitingAccept type="user_cancel"/>
                </TabPane>
                </Tabs>
            </Col>
        </Row>
        
      );
}

export default Order;