import React from "react";
import Carousel from '../../components/Carousel';
import MyMenuItem from '../../components/MyMenuItem';
import ListTopic from '../../components/ListTopic';
import {Row, Col, Layout  } from 'antd';

const { Content, Sider } = Layout;

const HomePage = () => {
    return(
        <>
            <Row>
            <Col offset={2} span={20}>
            <Content style={{ padding: '10px 0px',}}>
                <Layout className="site-layout-background" style={{ padding: '0px 0', backgroundColor: "#f0f2f5" }}>
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
        </>
    )
}
export default HomePage