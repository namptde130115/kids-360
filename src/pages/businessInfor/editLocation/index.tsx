import React, { useState } from 'react';

//Ant Design
import { Form, Input, Button, Space, Typography, Select } from 'antd';
import 'antd/dist/antd.css';

//Scss
import './index.scss'
import { RootState } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { editLocation, switchLocationStatus } from '../../../redux/businessInfor';
import { Location } from '../../../models/businessInfor';

interface Props {
  onClose: () => void
  name: string
}

interface FieldData {
  name: string | number | (string | number)[];
  value?: any;
}

export const EditLocation = (props: Props) => {
  const { onClose, name } = props
  const { Text } = Typography
  const dispatch = useDispatch()
  const locations = useSelector((state: RootState) => state.businessInfor.locations)
  const location = locations.find((location) => location.name === name)

  const [fields] = useState<FieldData[]>([
    { name: ['name'], value: location?.name},
    { name: ['email'], value: location?.email},
    { name: ['phoneNumber'], value: location?.phoneNumber},
    { name: ['state'], value: location?.stateOfCity},
    { name: ['city'], value: location?.city},
    { name: ['address'], value: location?.address}
  ])

  const handleSwitchStatus = (name?: string, status?: string) => {

    let statusUpdated = status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE'
    dispatch(switchLocationStatus({name: name, status: statusUpdated}))
  }

  const onFinish = async (values: Location) => {
    await dispatch(editLocation({
      ...values, status: location?.status
    }))

    onClose()
  }

  const onCancel = () => {
    onClose()
    console.log('cancel')
  }

  return(
    <Space className='layout-form'>
      <Space direction="vertical" className='space'>
        <Space className='editLocation-form-title-space'>
          <Text className='editLocation-form-title'>Edit location</Text>
        </Space>
        <Form
          name='login'
          className='editLocation-form'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          fields={fields}
        >
          <Form.Item
            name='name'
            label='Name'
            rules={[{ required: true, message: 'Please input location name!' }]}
          >
            <Input placeholder="Enter Location Name" className='editLocation-form-input'/>
          </Form.Item>

          <Space className='editLocation-form-space'>
            <Form.Item
              name='email'
              label='Email'
            >
              <Input placeholder="Enter email" className='editLocation-form-input-half'/>
            </Form.Item>

            <Form.Item
              name='phoneNumber'
              label='Phone Number'
            >
              <Input placeholder="Enter phone number" className='editLocation-form-input-half'/>
            </Form.Item>
          </Space>

          <Space className='editLocation-form-space'>
            <Form.Item 
              name='state'
              label='State'
              rules={[{ required: true, message: 'Please select state!' }]}
            >
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
                <Select.Option value="demo1">Demo1</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item 
                name='city'
                label='City'
                rules={[{ required: true, message: 'Please select city!' }]}
              >
                <Select>
                  <Select.Option value="demo">Demo</Select.Option>
                  <Select.Option value="demo1">Demo1</Select.Option>
                </Select>
            </Form.Item>
          </Space>          

          <Form.Item
            name='address'
            label='Address'
            rules={[{ required: true, message: 'Please input address!' }]}
          >
            <Input placeholder="Enter Address" className='editLocation-form-input'/>
          </Form.Item>

          <Space className='editLocation-groupButton-space'>
            <Form.Item>
              <Button
                onClick={() => handleSwitchStatus(location?.name, location?.status)}
                type="primary"
                htmlType="button"
                className="editLocation-form-button-inactive"
              >
                {location?.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE'}
              </Button>
            </Form.Item>

            <Form.Item>
              <Button
                onClick={onCancel}
                type="primary"
                htmlType="button"
                className="editLocation-form-button-cancel"
              >
                Cancel
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                className="editLocation-form-button"
              >
                Save
              </Button>
            </Form.Item>
          </Space>
        </Form>
      </Space>
    </Space>
  )
}