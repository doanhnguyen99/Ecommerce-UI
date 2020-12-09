import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Modal
} from 'antd';
import axios from "axios";

const RegisterPage = () => {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const onFinish = values => {
    console.log(caches);
    showModal();
    axios({
      method: 'post',
      url: 'http://localhost:3000/api/users',
      data: {
        "api_user": values
      }
    }). then((response)=>{
      showModal();
      console.log(response.data)

  });
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
    <h1 style={{textAlign: "center"}}>Register</h1>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
          <Input placeholder="Name"/>
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{
                  required: true,
                  type: "email",
                  message: "The input is not valid E-mail!"
                }]}>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password placeholder="Password"/>
        </Form.Item>
        <Form.Item label="Re-password" name="password_confirmation" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password placeholder="Password confirmation"/>
        </Form.Item>

        <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      </Form>
      <Modal
        title="Thông báo"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Kiểm tra email của để xác thực email</p>
       
      </Modal>
    </>
  );
};

export default RegisterPage;