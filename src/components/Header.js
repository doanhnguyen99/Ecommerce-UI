import React from 'react';
import { Row, Col, Input, Layout, Menu, Breadcrumb } from 'antd';
import { PhoneOutlined, MailOutlined,UserOutlined, ShoppingCartOutlined  } from '@ant-design/icons';
import HomeIMG from './../image/home.png';

const style = { };

const { Search } = Input;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
function MyHeader() {
    
    const onSearch = value => console.log(value);
  return (
    <div style={{backgroundColor: "white"}} >
    <Row>
        <Col span={24} style={{borderBottom: '1px solid #6f7173', padding: '8px 0', backgroundColor: "white"}}>
            <Row>
                <Col span={8} offset={2}>
                <PhoneOutlined /> 0356722442
                <MailOutlined style={{marginLeft:"10px"}}/> nguyenvantuhym@gmail.com
                </Col>
                <Col span={3} offset={8}>
                    <UserOutlined /> Register
                    <span style={{margin:"10px", fontSize: 15}}>or</span>
                    <UserOutlined /> Sign In
                </Col>
            </Row>
        </Col>
    </Row>

    <Row style={{margin: "40px 0", backgroundColor: "white"}}>
        <Col span={4} offset={3} >
            <img src={HomeIMG}/>
        </Col>
        <Col span={9}>
            <Search
                style={{
                    marginTop: "20px",
                    borderTopLeftRadius: "50%"
                }}
                placeholder="input search text"
                enterButton="Search"
                size="large"
                onSearch={onSearch}
            />
        </Col>
        <Col offset={1} span={4} style={{display: "flex", justifyContent: "space-around"}}>
            <ShoppingCartOutlined style={{ marginTop: "20px", marginRight: "20px", fontSize: 30}}/>
            <ShoppingCartOutlined style={{ marginTop: "20px",marginRight: "20px",fontSize: 30}}/>
            <ShoppingCartOutlined style={{ marginTop: "20px",marginRight: "20px", fontSize: 30}}/>
        </Col>

    </Row>
    <Header className="header" >
        <Row >
            <Col offset={1} span={22} style={{backgroundColor: "white"}}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} >
                        <Menu.Item key="1">Home</Menu.Item>
                        <Menu.Item key="2">Shoping</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
            </Col>
        </Row>
      
    </Header>
    <Row style={{backgroundColor: "#f0f2f5"}}>
        <Col offset={2}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
        </Col>
    </Row>
    </div>
  );
}

export default MyHeader;
