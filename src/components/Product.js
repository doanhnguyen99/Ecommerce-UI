import React from 'react';
import sua from "./../image/sua.jpeg";
import  { Row,Button, Col,InputNumber, List, Card } from 'antd';
import ProductItem from './ProductItem';

import { FacebookOutlined, ShoppingCartOutlined } from '@ant-design/icons';


const Product = () => {
    const onChange = (value) => {
        console.log('changed', value);
      }
    return (<>
        <Row>
            <Col offset={2} span={10} style={{backgroundColor: "red", display: "flex", justifyContent: "center", alignItems:"center"}}>
                <img src={sua} alt="asdjkajkls" width="80%" height="80%"/>
            </Col>
            <Col offset={0} span={10} style={{backgroundColor: "gray"}}>
                <div style={{padding: "20px"}}>
                    <div>armani</div>
                    <h2>Black Fastion</h2>
                    <div>Add your review</div>
                    <div style={{marginTop: "20px"}}>
                        <Button type="primary" icon={<FacebookOutlined style={{fontSize: "20px"}}/>}>
                            Share
                        </Button>
                    </div>
                    <div style={{paddingTop: "20px"}}>
                        <ul>
                            <li>Product SKU: </li>
                            <li>category : </li>
                        </ul>
                    </div>
                    <div>
                        <span style={{fontSize: "30px", paddingLeft: "20px"}}>
                            $350.00
                        <span style={{textDecoration:"line-through", fontSize: "16px", paddingLeft:"10px"}}>$500.00</span>
                        </span>
                    </div>
                    <div>
                    Quantity: <InputNumber min={1} step={1} onChange={onChange} />
                        <Button type="primary" 
                            style={{
                                marginLeft: "20px",
                                borderRadius: "30px",
                                backgroundColor: "#fdd613",
                                height: "50px",
                                width: "200px",
                                fontSize:"18px"
                            }}
                            icon={<ShoppingCartOutlined  style={{fontSize:"25px"}}/>}
                            >
                            Add to cart
                        </Button>
                    </div>
                </div>
            </Col>
        </Row>
        <Row style={{marginTop: "30px"}}>
            <Col offset={2} span={20}>
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={[
                        
                        {
                          title: 'Title 2',
                        },
                        {
                          title: 'Title 3',
                        },
                        {
                          title: 'Title 4',
                        },
                      ]}
                    renderItem={item => (
                         <ProductItem title={item.title}>Card content</ProductItem>
                    )}
                />
            </Col>
        </Row>
        </>
    );
}

export default Product;