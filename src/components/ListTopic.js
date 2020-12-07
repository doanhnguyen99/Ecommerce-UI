import { Card, Row, Col } from 'antd';
import React, {useEffect, useState} from 'react';
import sua from './../image/sua.jpeg';
import Topic from './Topic/Topic';
import axios from 'axios';


const ListTopic = () => {
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:3000/api/categorys',
          }). then((response) => {
              console.log(response.data);
            setListTopic(response.data.filter(category => category.id > 7));
          });
    },[]);
    const [listTopic, setListTopic] = useState([]);

    return (
        <div style={{
            padding: "40px",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
            }}>
                {
                    listTopic.map(topic => <Topic title={topic.name} url={topic.link_img}/>)
                }
           
        </div>
    )
}

export default ListTopic;