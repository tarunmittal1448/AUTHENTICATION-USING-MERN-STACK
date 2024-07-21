import React, { useState } from 'react';
import { Card, Flex, Typography, Form, Input, Button, Alert, Spin } from "antd";
import registerImage from "../assets/pose_51.png";
import useLogin from '../hooks/useLogin';
import { Link } from 'react-router-dom';

const Login = () => {
  const {error, loading, loginUser} = useLogin(); 

  const handleLogin = async (values) => {
    await loginUser(values);
  };

  return (
    <Card className='form-container'>
      <Flex gap="large" align='center'>
        <Flex vertical flex={1}>
          <Typography.Title level={3} strong className="title">
            Sign In
          </Typography.Title>
          <Typography.Text type="secondary" strong className="slogan">
            Unlock your world.
          </Typography.Text>
          <Form layout="vertical" onFinish={handleLogin} autoComplete="off">
            
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Enter email" },
                { type: "email", message: "The input is not valid" }
              ]}
            >
              <Input placeholder='Enter your email' size='large' />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Enter password" }]}
            >
              <Input.Password placeholder='Enter your password' size='large' />
            </Form.Item>
            <Form.Item>
                <Button type={loading ? "" : "primary"} htmlType="submit" size="large" className="btn">
                  {loading ? <Spin /> : "Login User"}
                </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/">
                <Button type="default" size="large" className="btn">
                  Not having an account ?
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Flex>
        <Flex flex={1}>
          <img src={registerImage} className='auth-image' alt="Register" />
        </Flex>
      </Flex>
    </Card>
  );
};

export default Login;
