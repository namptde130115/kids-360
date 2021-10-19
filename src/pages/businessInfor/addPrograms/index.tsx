import React from 'react';

//Ant Design
import { Form, Input, Button, Space, Typography, Select } from 'antd';
import 'antd/dist/antd.css';

//Scss
import './index.scss'

interface Props {
  onClose: () => void;
}

export const AddPrograms = ( props: Props) => {
  const { onClose } = props;
  const { Text } = Typography
  const { TextArea } = Input;

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const onCancel = () => {
    onClose()
  }

  return(
    <Space className='layout-form'>
      <Space direction="vertical" className='space'>
        <Space className='addPrograms-form-title-space'>
          <Text className='addPrograms-form-title'>Add location</Text>
        </Space>
        <Form
          name='login'
          className='addPrograms-form'
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item 
            label='Sub-category'
            name='subCategory'
            rules={[{ required: true, message: 'Please select Sub category!' }]}
            className='sub-category'
          >
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
              <Select.Option value="demo1">Demo1</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item 
            label='Parent program'
            name='parentProgram'
            rules={[{ required: true, message: 'Please select Parent program!' }]}
            className='sub-category'
          >
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
              <Select.Option value="demo1">Demo1</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name='programName'
            label='Program name'
            rules={[{ required: true, message: 'Please input program name!' }]}
          >
            <Input placeholder="Enter Location Name" className='addPrograms-form-input'/>
          </Form.Item>

          <Space className='addPrograms-form-space'>
            <Form.Item
              name='ageFrom'
              label='Age from'
              rules={[{ required: true, message: 'Please input age from!' }]}
            >
              <Input placeholder="Enter email" className='addPrograms-form-input-half'/>
            </Form.Item>

            <Form.Item
              name='ageTo'
              label='To'
              rules={[{ required: true, message: 'Please input age to!' }]}
            >
              <Input placeholder="Enter phone number" className='addPrograms-form-input-half'/>
            </Form.Item>
          </Space>

          <Form.Item
            name='description'
            label='Description'
          >
            <TextArea rows={4} placeholder="Write something" className='addPrograms-form-input'/>
          </Form.Item>   

          <Form.Item 
            label='Cancellation policy'
            name='cancellationPolicy'
            rules={[{ required: true, message: 'Please select cancellation policy!' }]}
            className='sub-category'
          >
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
              <Select.Option value="demo1">Demo1</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="button"
              className="addPrograms-form-button-cancel"
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="addPrograms-form-button"
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </Space>
  )
}