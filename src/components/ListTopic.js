import { Card, Row, Col } from 'antd';
import React from 'react';
import sua from './../image/sua.jpeg';
import Topic from './Topic/Topic';

const ListTopic = () => {
    return (
        <div style={{
            padding: "40px",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
            }}>
            <Topic/>
            <Topic/>
            <Topic/>
            <Topic/>
        </div>
    )
}

export default ListTopic;