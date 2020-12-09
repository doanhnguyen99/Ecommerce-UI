import React,{ useEffect, useState} from 'react';

import { Comment, Tooltip, Avatar, Rate, Tag } from 'antd';
import moment from 'moment';

import { HeartTwoTone } from '@ant-design/icons';

import  { Row,Button, Col,InputNumber, List } from 'antd';
import axios from 'axios';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useParams
  } from "react-router-dom";

import { FacebookOutlined, ShoppingCartOutlined } from '@ant-design/icons';


const StoreProduct = ({comment}) => {
    

      useEffect(() => {
        

      },[]);
    return (
    <>
        <Comment
           // actions={actions}
            author={<a>Han Solo</a>}
            avatar={
                <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
                />
            }
            content={
                <>
                    <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully
                    and efficiently.
                    </p>
                    <Rate allowHalf defaultValue={2.5} /> <span style={{marginLeft: "5px"}}>2.5</span>
                    
                </>
            }
            datetime={
                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().fromNow()}</span>
                </Tooltip>
            }
            />
    </>
    );
}

export default StoreProduct;