import React, { useState } from 'react';
import { Menu, Row,Tabs, Col } from 'antd';
import {  MailOutlined, SettingOutlined } from '@ant-design/icons';
import WaitingAccept from './WaitingAccept';
import ProductManagement from './ProductManagement'
import ShopInfo from './ShopInfo'

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const { SubMenu } = Menu;

const TabComponent = ({tab}) => {
    switch(tab){
        case 1: return (
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Chờ xác nhận" key="1">
                    <WaitingAccept type="waiting_accept"/>
                </TabPane>
                <TabPane tab="Đã xác nhận" key="2">
                    <WaitingAccept type="store_accepted"/>
                </TabPane>
                <TabPane tab="Đang vận chuyển" key="3">
                    <WaitingAccept type="store_accepted"/>
                </TabPane>
                <TabPane tab="Đã giao hàng" key="4">
                Content of Tab Pane 4
                </TabPane>
                <TabPane tab="Đã hủy" key="5">
                Content of Tab Pane 5
                </TabPane>
            </Tabs>);
            case 2: return (<ProductManagement/>);
            case 9: return (<ShopInfo/>)
    }
    
    return (
    <>
    </>        
    );
}

export default TabComponent;