import React, { useState, useEffect } from 'react';
import { Menu, Row,Tabs, Col } from 'antd';
import { Form, Input, InputNumber, Button } from 'antd';
import axios from 'axios';

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };


const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

const Profile = ({tab}) => {
    const [form] = Form.useForm();
    const [shopInfo, setShopInfo] = useState({});

    useEffect(() => {  
        axios({
            method: 'get',
            url: 'http://localhost:3000/api/store',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        }).then(res => {
            setShopInfo(res.data);
            form.setFieldsValue(res.data);
            console.log(res.data);
        });
    },[]);

    const onFinish = values => {
        console.log(values);
      };
    
    return (
    <Form {...layout} name="nest-messages" form={form} onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item name={'id'} label="Shop id" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <Input disabled={true}  />
        </Form.Item>

        <Form.Item name={'name'} label="Name" >
        <Input />
        </Form.Item>
        
        <Form.Item name={'describe'} label="Describe" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <Input />
        </Form.Item>
        
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary">
            Update
        </Button>
        </Form.Item>
    </Form>
    );    
}

export default Profile;