import React, { useState,  useContext, useEffect } from 'react';
import {
    Form, Input, Button, Radio
} from 'antd';
import { AppContext } from './../../App'
import axios from "axios";
const layout = {
    labelCol: {
        offset:4,
      span: 6 ,
    },
    wrapperCol: {
      span: 6,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 10,
      span: 4,
    },
  };
const Profile = () => {
    const [form] = Form.useForm();
    const { profile } = useContext(AppContext);
    const [profileState, setProfileState] = useState(profile)  
    useEffect(()=>{
        axios({
            method: "get",
            url: "http://localhost:3000/api/user/profile",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        })
        .then(res => {
            console.log(res.data);
            form.setFieldsValue(res.data);
            setProfileState(res.data)
        })
    },[]);
  
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      
  return (
    <>
     <Form
      {...layout}
      form={form}
      name="basic"
      
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        onChange={()=> console.log("Asds")}
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input disabled={true} />
      </Form.Item>

      <Form.Item
        label="Số điện thoại"
        name="phone"
        value='profileState.email' 
        rules={[
          {
            required: true,
            message: 'Please input your Phone!',
          },
        ]}
      >
        <Input  />
      </Form.Item>

      <Form.Item
        label="Họ và tên"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your Phone!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Địa chỉ"
        name="address"
        rules={[
          {
            required: true,
            message: 'Please input your Phone!',
          },
        ]}
      >
        <Input />
      </Form.Item>
     
     
      <Form.Item name="gender" label="Giới tính">
        <Radio.Group>
          <Radio value={0}>Nữ</Radio>
          <Radio value={1}>Nam</Radio>
        </Radio.Group>
      </Form.Item>
    

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" onClick={()=>{
        }}>
          Cập nhật
        </Button>
      </Form.Item>
    </Form>
    
    </>
  );
};

export default Profile;