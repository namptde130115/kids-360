import React, { useEffect, useState } from 'react';

//Ant Design
import { Form, Input, Button, Avatar, Space, Typography } from 'antd';
import 'antd/dist/antd.css';

//Scss
import './index.scss'

//redux
// import { getUserInfor } from '../../../redux/user'
import { getCurrentUser } from '../../../redux/user'
import { User } from '../../../models/user';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

interface FieldData {
  name: string | number | (string | number)[];
  value?: any;
}

export const MyProfile = () => {
  const { Text } = Typography
  const dispatch = useDispatch()
  
  const userFetch: User = useSelector(
    (state: RootState) => state.user.user
  )
  
  const [fields, setFields] = useState<FieldData[]>([]);

  useEffect(() => {
    dispatch(getCurrentUser())
    const fullNameArray = userFetch.fullName.split(' ')
    const firstName = fullNameArray[0]
    fullNameArray.splice(0,1)
    console.log('lastName:', fullNameArray);

    setFields([
      { name: ['firstName'], value: firstName},
      { name: ['lastName'], value: fullNameArray},
      { name: ['email'], value: userFetch.email},
      { name: ['phone'], value: userFetch.phoneNumber}
    ])
  },[userFetch.email, dispatch])

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return(
    <Space className='layout-form'>
      <Space direction="vertical" className='space'>
        <Space className='form-infor-title-space'>
          <Text className='form-infor-title'>My Profile</Text>
        </Space>
        <Avatar size={84} src={'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png'}/>
        <Form
          name='login'
          className='infor-form'
          onFinish={onFinish}
          fields={fields}
        >
          <Form.Item
            name='firstName'
            label='First Name'
            rules={[{ required: true, message: 'Please input your first name!' }]}
          >
            <Input className='infor-form-input'/>
          </Form.Item>

          <Form.Item
            name='lastName'
            label='Last Name'
            rules={[{ required: true, message: 'Please input your last name!' }]}
          >
            <Input className='infor-form-input'/>
          </Form.Item>

          <Form.Item
            name='email'
            label='Email'
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input className='infor-form-input'/>
          </Form.Item>

          <Form.Item
            name='phone'
            label='Phone number'
          >
            <Input className='infor-form-input'/>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="infor-form-button">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </Space>
  )
}