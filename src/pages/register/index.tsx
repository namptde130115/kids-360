import React from 'react';

//router
import { Link } from 'react-router-dom';

//Ant Design
import { Form, Input, Button, Checkbox, Space, Typography  } from 'antd';
import 'antd/dist/antd.css';

//Scss
import './index.scss'

export const Register = () => {
  const { Text } = Typography;

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return(
    <Space className='layout-form'>
      <Space direction="vertical" className='space'>
      <Text className='register-title'>Create an account</Text>
        <Form
          name='login'
          className='register-form'
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name='firstName'
            rules={[{ required: true, message: 'Please input your Email address!'}]}
          >
            <Input placeholder="First Name" className='register-form-input'/>
          </Form.Item>

          <Form.Item
            name='lastName'
            rules={[{ required: true, message: 'Please input your Email address!'}]}
          >
            <Input placeholder="Last Name" className='register-form-input'/>
          </Form.Item>

          <Form.Item
            name='businessName'
            rules={[{ required: true, message: 'Please input your Email address!'}]}
          >
            <Input placeholder="Business Name" className='register-form-input'/>
          </Form.Item>

          <Form.Item
            name='emailAddress'
            rules={[{ required: true, message: 'Please input your Email address!'}]}
          >
            <Input placeholder="Email address" className='register-form-input'/>
          </Form.Item>

          <Form.Item
            className='register-form-item-createPassword'
            name='createPassword'
            rules={[{ required: true, message: 'Please input your Create PassWord!'}]}
          >
            <Input
              className='register-form-input'
              type='password'
              placeholder='Create password'
            />
            <br/>
          </Form.Item>
          <Text className='register-form-passTitle'>Password must be at least 8 characters</Text>


          <Form.Item
            className='register-form-item-confirmpass'
            name='confirmPassword'
            rules={[{ required: true, message: 'Please input your Confirm Password!'}]}
          >
            <Input
              className='register-form-input'
              type='password'
              placeholder='Confirm password'
            />

          </Form.Item>

          <Form.Item className='register-form-remember'>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className='register-form-remember-check'>
                I agree with our <a className="register-form-forgot" href="#">
                  Terms
                </a> and <a className="register-form-forgot" href="#">
                  Conditions
                </a> 
            </Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="register-form-button">
              Sign Up
            </Button>
          </Form.Item>
            <Text>
              Already have an account? <Link className="register-form-forgot" to="/">
                Login 
              </Link>
            </Text>
        </Form>
      </Space>
    </Space>
  )
}