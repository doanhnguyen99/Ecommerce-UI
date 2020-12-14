import React, {useEffect, useState } from 'react';
import axios from 'axios';
import {Button, Space } from 'antd'

const StoreComponent = ({idStore}) => {
    const [store , setStore] = useState({
        link_img: "",
        name: "",
        describe: "",
    });
    useEffect(() => {
        console.log("vantu")
        axios({
            method: 'GET',
            url: `http://localhost:3000/api/store/${idStore}`,
        }).then(res => {
            console.log(res.data);
            setStore(res.data);
        })
    },[]);
    return(
        <div style={{backgroundColor:"white", display: "flex", height: "100px", width: "100%"}}>
            <div style={{width: "10%", height: "100%", display: "flex", alignItems:"center"}}>
                <img src={store.link_img} alt="loi tai anh"  width="70%" height="70%" style={{marginLeft: "20px", borderRadius: "50%"}}/>
            </div>
            <div style={{width: "65%", height: "100%", display:"flex",alignItems: "center", marginLeft: "20px"}}>
                <div style={{width: "65%", height: "70%"}}>
                    <div style={{color: "black", fontSize: "18px", height: "30%"}}>{store.name}</div>
                    <div style={{height: "30%"}}>{store.describe}</div>
                    <Button >Xem shop</Button>
                </div>
            </div>
            
        </div>
    );
}

export default StoreComponent;