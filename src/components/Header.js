import React from 'react';
import { Row, Col, Input  } from 'antd';
import { PhoneOutlined, MailOutlined,UserOutlined, ShoppingCartOutlined  } from '@ant-design/icons';
import HomeIMG from './../image/home.png';

const style = { };

const { Search } = Input;
function Header() {
    
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
    
    </div>
  );
}

export default Header;
