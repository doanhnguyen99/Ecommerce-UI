import React, { useState } from 'react';
import { Menu, Row,Tabs, Col } from 'antd';
import {  MailOutlined, SettingOutlined } from '@ant-design/icons';
import WaitingAccept from './WaitingAccept';
import TabComponent from './TabComponent';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const { SubMenu } = Menu;

const Order = () => {
    const [tab, setTab] = useState(1);
    const  handleClick = e => {
        console.log('click ', e);
        setTab(parseInt(e.key));
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
                        <Menu.Item key="2">Quản lý sản phẩm</Menu.Item>
                        
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
                <TabComponent tab={tab}/>
            </Col>
        </Row>
        
      );
}

export default Order;