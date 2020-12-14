import { Card, Row, Col } from 'antd';
import React, {useEffect, useState} from 'react';
import sua from './../image/sua.jpeg';
import ProductItem from './ProductItem';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import axios from 'axios';


const ListProduct = ({products, title}) => {
    useEffect(() => {
        
    },[]);
 
    console.log(products)
    return (<>
       <Row style={{marginTop: "30px"}}>
            <Col offset={2} span={20}>
                <h1 style={{backgroundColor: "white", paddingLeft:"30px", marginBottom:"0", paddingTop: "20px"}}>{title}</h1>
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
                   <Link to={`/product/${item.id}`} style={{color: "black"}}>
                      <ProductItem 
                        name={item.name}
                        price={item.price}
                        img={item.link_img[0]}
                        description={item.description}
                      />
                    </Link>
                 ))
                } 
                 </Col>
                </Row>
            </Col>
        </Row>
        </>
    )
}

export default ListProduct;