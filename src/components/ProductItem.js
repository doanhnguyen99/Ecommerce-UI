import React from 'react';
import sua from "./../image/sua.jpeg";
import { HeartTwoTone } from '@ant-design/icons';
import { Rate, Tag } from 'antd'

const ProductITem = () => {
    return (
        <div className="product" style={{border: "1px solid gray", borderRadius: "20px",  width: "250px", display: "flex", flexDirection: "column", justifyContent:"space-around", alignItems: "center"}}>
            <div style={{marginTop: "20px", borderRadius: "20px", width:"90%"}}>
                <img src={sua} width="100%" height="100%"/>
            </div>
            <div style={{width: "90%",}}>
            Vintage Typewriter to post awesome stor
            </div>
            <span style={{width: "90%",fontSize: "20px"}}>
                $49.0
            </span>
            <span style={{width: "90%",color: "gray", }}>
            ypewriter to post awesome sto
            </span>

            <div style={{width: "90%", marginBottom: "20px"}}>
                <Rate allowHalf defaultValue={2.5} /> <span style={{marginLeft: "5px"}}>2.5</span>
                <Tag icon={<HeartTwoTone twoToneColor="#fadb14" />} color="#fadb14" style={{marginLeft: "10px", marginRight: 0}}>
                    Watch
                </Tag>
            </div>
            
        </div>
    );
}

export default ProductITem;