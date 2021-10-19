import React from 'react';

//Ant Design
import { Form, Input, Button, Space, Typography } from 'antd';
import 'antd/dist/antd.css';

//Scss
import './index.scss'

export const ChangePassword = () => {
  const { Text } = Typography

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return(
    <Space className='layout-form'>
      <Space direction="vertical" className='space'>
        <Space className='changePass-form-title-space'>
          <Text className='changePass-form-title'>Change password</Text>
        </Space>
        <Form
          name='login'
          className='changePass-form'
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name='oldPassword'
            label='Old Password'
            rules={[{ required: true, message: 'Please input your old password!' }]}
          >
            <Input placeholder="Enter Old Password" className='changePass-form-input'/>
          </Form.Item>

          <Form.Item
            name='newPassword'
            label='New Password'
            rules={[{ required: true, message: 'Please input your new password!' }]}
          >
            <Input placeholder="Enter New Password" className='changePass-form-input'/>
          </Form.Item>

          <Form.Item
            name='confirmPassword'
            label='Confirm Password'
            rules={[{ required: true, message: 'Please input your confirm password!' }]}
          >
            <Input placeholder="Enter Confirm Password" className='changePass-form-input'/>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="changePass-form-button">
              Change Password
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </Space>
  )
}