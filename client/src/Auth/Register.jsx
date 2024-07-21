import React from 'react';
import { Card, Flex, Typography, Form, Input, Button, Alert, Spin } from "antd";
import { Link } from "react-router-dom";
import registerImage from "../assets/pose_51.png";
import useSignup from '../hooks/useSignup';

const Register = () => {
  const { loading, error, registerUser } = useSignup();

  const handleRegister = (values) => {
    registerUser(values);
  };

  return (
    <Card className='form-container'>
      <Flex gap="large" align='center'>
        <Flex vertical flex={1}>
          <Typography.Title level={3} strong className="title">
            Create an account
          </Typography.Title>
          <Typography.Text type="secondary" strong className="slogan">
            Join for exclusive access!
          </Typography.Text>
          <Form layout="vertical" onFinish={handleRegister} autoComplete="off">
            <Form.Item
              label="Full name"
              name="name"
              rules={[{ required: true, message: "Enter your full name" }]}
            >
              <Input placeholder='Enter your full name' size='large' />
            </Form.Item>
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
            <Form.Item
              label="Confirm Password"
              name="passwordConfirm"
              rules={[{ required: true, message: "Enter confirm password" }]}
            >
              <Input.Password placeholder='Re-enter your password' size='large' />
            </Form.Item>
            {error && <Alert description={error} type="error" showIcon closable />}
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" className="btn">
                {loading ? <Spin /> : "Create account"}
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/login">
                <Button type="default" size="large" className="btn">
                  Already have an account ?
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

export default Register;
