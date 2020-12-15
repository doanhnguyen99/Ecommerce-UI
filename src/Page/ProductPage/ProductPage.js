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
import StoreComponent from '../../components/Product/StoreComponent';


const Product = () => {
    let history = useHistory();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [store, setStore] = useState({});

    const onChange = (value) => {
        setQuantity(value)
      }

      let { id } = useParams();
      console.log(id);

      useEffect(() => {
        axios({
            method: "get",
            url: `http://localhost:3000/api/products/${id}`
        }).then(res => {
            axios({
                method: "get",
                url: `http://localhost:3000/api/store/${res.data.store_id}`
            }).then(res1 => {
                console.log(res1.data)
                setStore(res1.data)
            })
            setProduct(res.data);
            console.log(res.data)
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
        <Row style={{marginTop: "10px"}}>
            <Col offset={2} span={20} style={{display:"flex", justifyContent:"space-between"}}>
               <StoreComponent store={store} />
            </Col>
        </Row>
        <Row style={{marginTop: "10px"}}>
            <Col offset={2} span={20} style={{display:"flex", justifyContent:"space-between"}}>
                <CommentComponent comment={product.comments? product.comments: []}/>
            </Col>
        </Row>
        
        
        
        <Row style={{marginTop: "20px"}}>
            <Col offset={2} span={20}>
                <h1 style={{backgroundColor: "white", paddingLeft:"30px", marginBottom:"0", paddingTop: "20px"}}>Sản phẩm liên quan</h1>
                <Row>
                <Col span={24} style={{padding: "20px",display:"flex", justifyContent:"space-around", backgroundColor: "white"}}>
                
                {
                    [
                        {
                            "id": 1,
                            "name": "Heavy Duty Marble Bench",
                            "price": "462272.0",
                            "category_id": 1,
                            "created_at": "2020-12-13T03:10:40.158Z",
                            "updated_at": "2020-12-13T03:10:40.889Z",
                            "description": "Et cumque voluptatem.",
                            "quantityInStock": 4901,
                            "trademark": "repellat",
                            "origin": "Swedish National Space Board",
                            "sendFrom": "immersive experience",
                            "store_id": 1,
                            "link_img": [
                                "http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--fdcfd1604d2b81348f8251fcd356bcdffb292896/Intelligent%20Paper%20Wallet",
                                "http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4368d76654231f2d65ab91c5e2bf649bc27ee75f/Ergonomic%20Steel%20Computer"
                            ]
                        },
                        {
                            "id": 2,
                            "name": "Rustic Marble Lamp",
                            "price": "902415.0",
                            "category_id": 1,
                            "created_at": "2020-12-13T03:10:41.544Z",
                            "updated_at": "2020-12-13T03:10:42.029Z",
                            "description": "Et illum consequatur.",
                            "quantityInStock": 884,
                            "trademark": "molestiae",
                            "origin": "Russian Federal Space Agency",
                            "sendFrom": "sales funnel",
                            "store_id": 1,
                            "link_img": [
                                "http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b1a2a25dd75ee2652ef26e48f3d606f8fbb43b83/Synergistic%20Paper%20Table",
                                "http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ea1e8276baf3d6e7019be89981c2ae06287b9ed4/Enormous%20Steel%20Clock"
                            ]
                        },
                        {
                            "id": 3,
                            "name": "Mediocre Copper Hat",
                            "price": "831937.0",
                            "category_id": 1,
                            "created_at": "2020-12-13T03:10:42.756Z",
                            "updated_at": "2020-12-13T03:10:43.126Z",
                            "description": "Praesentium et vero.",
                            "quantityInStock": 4572,
                            "trademark": "hic",
                            "origin": "German Aerospace Center",
                            "sendFrom": "customer journey",
                            "store_id": 1,
                            "link_img": [
                                "http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ee0c07e1ed1e4404d5bd7f7daec772ea8bfd93dd/Small%20Bronze%20Knife",
                                "http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--52ea8cdf4a49e4fedbeeab5b49ff0faba535a884/Mediocre%20Cotton%20Chair"
                            ]
                        },
                        {
                            "id": 4,
                            "name": "Ergonomic Paper Coat",
                            "price": "725126.0",
                            "category_id": 1,
                            "created_at": "2020-12-13T03:10:43.915Z",
                            "updated_at": "2020-12-13T03:10:44.553Z",
                            "description": "Saepe deleniti quas.",
                            "quantityInStock": 1374,
                            "trademark": "harum",
                            "origin": "Russian Federal Space Agency",
                            "sendFrom": "thought leader",
                            "store_id": 1,
                            "link_img": [
                                "http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--310003490fd9caefbde03d0e30f6737886f69e17/Durable%20Silk%20Gloves",
                                "http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a982310d42317a6c90eee78a0222c3b61a794f91/Incredible%20Wooden%20Watch"
                            ]
                        },
                   ].map(item => (
                      <ProductItem 
                      name={item.name}
                      price={item.price}
                      img={item.link_img[0]}
                      description={item.description}
                      >Card content</ProductItem>
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