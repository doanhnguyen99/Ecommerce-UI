
import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';

import axios from "axios";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const LoginPage = () => {
  const onFinish = values => {
    axios({
      method: 'post',
      url: 'http://localhost:3000/api/users/sign_in',
      data: {
        "api_user": values
      }
    }). then((response)=>{
        console.log(response.data)

    });
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {

    console.log('Failed:', errorInfo);
  };

  return (
    <Row style={{marginTop: "30px"}}>
        <Col offset={3} span={18} style={{}}>
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
            <Form.Item
                label="Email"
                name="email"
                rules={[{
                  required: true,
                  type: "email",
                  message: "The input is not valid E-mail!"
                }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
            </Form>
        </Col>
        
    </Row>
    
  );
};

export default LoginPage;