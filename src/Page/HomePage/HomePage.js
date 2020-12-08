import React, { useEffect, useState } from "react";
import Carousel from '../../components/Carousel';
import MyMenuItem from '../../components/MyMenuItem';
import ListTopic from '../../components/ListTopic';
import { Row, Col, Layout  } from 'antd';
import ListProduct from '../../components/ListProduct'
import axios from 'axios';


const { Content, Sider } = Layout;

const HomePage = () => {
    const [data, setData] = useState({});
    const access_Token = `eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5NGUyZDU3NC1iZGY1LTQxMTctODc4Mi00OGM3NDRmOGQ1M2IiLCJzdWIiOiIyIiwic2NwIjoiYXBpX3VzZXIiLCJhdWQiOm51bGwsImlhdCI6MTYwNjcyNzc1NSwiZXhwIjoxNjA2NzMxMzU1fQ.asvSFQOB0OIeGC326iFFd9-u15IIG_xRwpv7Y2M-q7k`;
    const AuthStr = 'Bearer '.concat(access_Token); 
    useEffect(() => {
        axios({
            method: 'get',
            url:"http://localhost:3000/api/home"
        }).then(res => {
            setData(res.data);
            console.log(res.data);
        })
    },[])
    
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
                    <Carousel products={data.products_1}/>
                </Content>  
                </Layout>
            </Content>
            </Col>
            </Row>
            <ListTopic />
            <ListProduct products={data.products_1}/>
            <ListProduct products={data.products_2}/>
            <ListProduct products={data.products_3}/>

        </>
    )
}
export default HomePage