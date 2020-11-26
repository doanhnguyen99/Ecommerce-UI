import React from 'react';
import MyHeader from './components/Header';
import Carousel from './components/Carousel';
import MyMenuItem from './components/MyMenuItem';
import ListTopic from './components/ListTopic';
import {Row, Col, Layout, Menu, Breadcrumb,  } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <Layout>
      <MyHeader/>
        <Row>
          <Col offset={2} span={20}>
          <Content style={{ padding: '10px 0px',  }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
          <Layout className="site-layout-background" style={{ padding: '20px 0', backgroundColor: "#f0f2f5" }}>
              <Sider className="site-layout-background" width={200}>
                <MyMenuItem/>
              </Sider>
              <Content style={{ minHeight: 280 }}>
                <Carousel/>
              </Content>
            </Layout>
            
            </Content>
           
            
            
          </Col>
        </Row>
      
        <ListTopic/>
    <Footer style={{ textAlign: 'center', backgroundColor: "blue" }}>
      
    </Footer>
  </Layout>
    
  );
}

export default App;
