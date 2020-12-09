import React, {useEffect, useState} from 'react';
import { Row, Col } from 'antd';
import axios from 'axios';


const CategoryComponent = ({renderItem, title, data}) => {

    return(
        <div style={{backgroundColor: "white", marginTop:"20px", padding:"10px"}}>
            <h1 style={{marginLeft: "20px", borderBottom: "1px solid black"}}>{title}</h1>
            <div style={{display: "flex", justifyContent: "space-around", marginTop: "30px"}}>
                {
                    data.map(renderItem)
                }
            </div>
            
        </div>
        )
}

export default CategoryComponent;