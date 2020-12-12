import React,{ useEffect, useState} from 'react';
import  { Row,Button, Col,InputNumber, Rate } from 'antd';
import ProductItem from './../../components/ProductItem';
import axios from 'axios';
import StoreProduct from '../../components/Product/StoreProduct'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useParams
  } from "react-router-dom";

import { FacebookOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import CommentComponent from '../../components/Product/CommentComponent';


const Product = () => {
    let history = useHistory();
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
                    </div>
                    <div>
                        <span style={{
                            marginRight: "10px", color:"#fadb14", textDecoration: "bold",
                            fontSize: "16px"
                            }}>2.5</span>
                        <Rate allowHalf defaultValue={2.5} />
                    </div>

                    <Button type="primary" 
                            style={{
                                marginTop:"20px",
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
                                    history.push("/shopping-cart")
                                    console.log(res.data);
                                })
                            }}
                            >
                            Add to cart
                        </Button>
                </div>
            </Col>
        </Row>
        {/* <ListProduct products={data.products_1}/> */}
        <Row style={{marginTop: "30px"}}>
            <Col offset={1} span={22} style={{display:"flex", justifyContent:"space-between"}}>
                <CommentComponent comment={product.comments}/>
            </Col>
        </Row>
        
        <Row style={{marginTop: "30px"}}>
            <Col offset={1} span={22} style={{display:"flex", justifyContent:"space-between"}}>
                <CommentComponent comment={product.comments}/>
            </Col>
        </Row>
        
        <Row style={{marginTop: "30px"}}>
            <Col offset={2} span={20}>
                <h1 style={{backgroundColor: "white", paddingLeft:"30px", marginBottom:"0", paddingTop: "20px"}}>Sản phẩm liên quan</h1>
                <Row>
                <Col span={24} style={{padding: "20px",display:"flex", justifyContent:"space-around", backgroundColor: "white"}}>
                
                {
                    [ 
                     {
                         title: 'Title 1',
                       },
                       {
                         title: 'Title 2',
                       },       
                     {
                       title: 'Title 3',
                     },
                     {
                       title: 'Title 4',
                     },
                   ].map(item => (
                      <ProductItem title={item.title}>Card content</ProductItem>
                 ))
                } 
                 </Col>
                </Row>
            </Col>
        </Row>
    </>
    );
}

export default Product;