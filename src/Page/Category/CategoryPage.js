import React, {useEffect, useState} from 'react';
import { Row, Col } from 'antd';
import axios from 'axios';
import CategoryComponent from './CategoryComponent';
import ProductItems from './../../components/ProductItems';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const CategoryPage = () => {
    const [categoryState, setCategoryState] = useState([]);
    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:3000/api/categorys"
        })
        .then(res => {
            setCategoryState(res.data);
            console.log(res.data)
        })
    },[]);

    return(
        <Row>
            <Col offset={2} span={20}>
            {
                categoryState.map(category => 
                    <CategoryComponent 
                        title={category.name} 
                        data={category.products}
                        renderItem={(product) => 
                            <Link to={`/product/${product.id}`} style={{color: "black"}}>
                                <ProductItems
                                    name={product.name}
                                    price={product.price}
                                    url={product.link_img[0]}
                                />
                            </Link>
                        }
                    />
                )
            }
            </Col>
        </Row>
        )
}

export default CategoryPage;