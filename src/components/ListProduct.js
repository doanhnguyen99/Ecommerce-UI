import { Card, Row, Col } from 'antd';
import React, {useEffect, useState} from 'react';
import sua from './../image/sua.jpeg';
import ProductItems from './ProductItems';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import axios from 'axios';


const ListProduct = ({products}) => {
    useEffect(() => {
        
    },[]);
 
    console.log(products)
    return (
       
        <div style={{
            padding: "40px",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
            }}>
                {
                    products && products.slice(2).map(product => 
                        <Link to={`/product/${product.id}`}>
                            <ProductItems 
                                name={product.name} price={product.price} url={product.link_img[0]}/>
                                </Link>)
                }
           
        </div>
    )
}

export default ListProduct;