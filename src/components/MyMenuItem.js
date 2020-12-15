import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
const { SubMenu } = Menu;

function handleClick(e) {
  console.log('click', e);
}
const MyMenuItem = () =>{
  const [listCategory, setListCategory] = useState([]);
  useEffect(()=>{
    axios({
      method: 'get',
      url: 'http://localhost:3000/api/categorys',
      
      // headers: { Authorization: AuthStr }
    }). then((response) => {
     
        setListCategory(response.data);
    });
  },[]);


  console.log(listCategory);
return(
    <Menu onClick={handleClick} style={{  height: "100%"
     }} mode="vertical">
       {
         listCategory.map(category => 
         <SubMenu key={category.id.toString()}  title={category.name}/>)
          
       }
    </Menu>
  );
}


export default MyMenuItem;