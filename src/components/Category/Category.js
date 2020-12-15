import React, {useEffect, useState} from 'react';
import { Row, Col } from 'antd';
import axios from 'axios';
import CategoryComponent from '../../Page/Category/CategoryComponent';
import ProductItem from './../../components/ProductItem';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

const Category = () => {
    const [products, setProduct] = useState([]);
    let { id } = useParams();
    useEffect(() => {
        axios({
            method: "get",
            url: `http://localhost:3000/api/products?category=${id}`
        })
        .then(res => {
            setProduct(res.data);
            console.log(res.data)
        });
        
    },[]);
   
    return(
        <Row>
            <Col offset={2} span={20}>
                <CategoryComponent
                    title={products.name} 
                    data={products.products}
                    renderItem={(product) => 
                        <Link to={`/product/${product.id}`} style={{color: "black"}}>
                            <ProductItem
                                name={product.name}
                                price={product.price}
                                img={product.link_img}
                                description={product.description}
                            />
                        </Link>
                    }
                />
            </Col>
        </Row>
        )
}

export default Category;