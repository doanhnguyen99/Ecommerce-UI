import React,{ useEffect, useState} from 'react';
import sua from "./../image/sua.jpeg";
import  { Row,Button, Col,InputNumber, List } from 'antd';
import ProductItem from './ProductItem';
import axios from 'axios';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

import { FacebookOutlined, ShoppingCartOutlined } from '@ant-design/icons';


const Product = () => {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const onChange = (value) => {
        setQuantity(value)
      }

      let { id } = useParams();
      console.log(id);

      useEffect(() => {
        axios({
            method: "get",
            url: `http://localhost:3000/api/products/${id}`
        }).then(data => {
            setProduct(data.data);
            console.log(data.data)
        })

      },[]);
    return (
    <>
        <Row>
            <Col offset={2} span={10} style={{ display: "flex", justifyContent: "center", alignItems:"center"}}>
                <img src={product.link_img} alt="asdjkajkls" width="80%" height="80%"/>
            </Col>
            <Col offset={0} span={10} style={{}}>
                <div style={{padding: "20px"}}>
                    <div></div>
                    <h2>{product.name}</h2>
                    <div>Add your review</div>
                    <div style={{marginTop: "20px"}}>
                        <Button type="primary" icon={<FacebookOutlined style={{fontSize: "20px"}}/>}>
                            Share
                        </Button>
                    </div>
                    <div style={{paddingTop: "20px"}}>
                        <ul>
                            <li>Product SKU: {product.trademark} </li>
                            <li>category : {product.sendFrom}</li>
                            <li>origin: {product.origin}</li>
                        </ul>
                    </div>
                    <div>
                        <span style={{fontSize: "30px", paddingLeft: "20px"}}>
                            ${product.price}
                        <span style={{textDecoration:"line-through", fontSize: "16px", paddingLeft:"10px"}}>$500.00</span>
                        </span>
                    </div>
                    <div>
                    Quantity: <InputNumber min={1} step={1} onChange={onChange} value={quantity} />
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
                            onClick={() => {
                                axios({
                                    method: 'post',
                                    url: 'http://localhost:3000/api/user/carts',
                                    data: {
                                        "carts": [
                                            {
                                                "product_id": product.id,
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    headers: {
                                        'Authorization': 'Bearer ' + localStorage.getItem("token")
                                    }
                                }).then(res => {
                                    console.log(res.data);
                                })
                            }}
                            >
                            Add to cart
                        </Button>
                    </div>
                </div>
            </Col>
        </Row>
        {/* <ListProduct products={data.products_1}/> */}
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