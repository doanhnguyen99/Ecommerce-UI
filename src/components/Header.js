import React, {useContext} from 'react';
import { Row, Col, Input, Layout, Menu, Breadcrumb } from 'antd';
import { PhoneOutlined, MailOutlined,UserOutlined, ShoppingCartOutlined, ShopOutlined, UnorderedListOutlined  } from '@ant-design/icons';
import HomeIMG from './../image/home.png';
import {AppContext} from './../App';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const { Search } = Input;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
function MyHeader() {
    const { auth,
        setAuth, profile,} = useContext(AppContext);
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
                    {
                        (auth)?<div><Link to="/profile"><UserOutlined />{profile.name}</Link></div>:
                        <div>
                            <Link to="/register"><UserOutlined /> Register</Link>
                            <span style={{margin:"10px", fontSize: 15}}>or</span>
                            <Link to="/login"><UserOutlined /> Sign In</Link>
                        </div>
                        
                    }
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
            <Link to="/shopping-cart">
                <ShoppingCartOutlined style={{ marginTop: "20px",  fontSize: 30}}/>
            </Link>
            <Link to="/my-order">
            <UnorderedListOutlined style={{ marginTop: "20px", fontSize: 30}} />
               
            </Link>
            <Link to="/my-shop">
                <ShopOutlined style={{ marginTop: "20px", fontSize: 30}}/>
            </Link>
        </Col>

    </Row>
    <Header className="header" >
        <Row >
            <Col offset={1} span={22} style={{backgroundColor: "white"}}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} >
                    <Menu.Item key="1"><Link to="/" style={{color: "white"}}>Home</Link></Menu.Item>
                        <Menu.Item key="2">Products Sale</Menu.Item>
                        <Menu.Item key="3"><Link to="/categoris" style={{color: "white"}}>Category</Link></Menu.Item>
                    </Menu>
            </Col>
        </Row>
      
    </Header>
    <Row style={{backgroundColor: "#f0f2f5"}}>
        <Col offset={2}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Link to="/"><Breadcrumb.Item>Home</Breadcrumb.Item></Link>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
        </Col>
    </Row>
    </div>
  );
}

export default MyHeader;
