import React from 'react'

//Ant Design
import { Form, Input, Button, Space, Typography, Select } from 'antd'
import 'antd/dist/antd.css'

//Scss
import './index.scss'
import { Location } from '../../../models/businessInfor'
import { useDispatch } from 'react-redux'
import { addLocation } from '../../../redux/businessInfor'

interface Props {
  onClose: () => void
}

export const AddLocation = (props: Props) => {
  const { onClose } = props
  const { Text } = Typography

  const dispatch = useDispatch()

  const onFinish = async (values: Location) => {
    await dispatch(
      addLocation({
        status: 'ACTIVE',
        name: values.name,
        address: values.address,
        phoneNumber: values.phoneNumber,
        email: values.email,
        stateOfCity: values.stateOfCity,
        city: values.city
      })
    )
    onClose()
  }

  const onCancel = () => {
    onClose()
  }

  return (
    <Space className="layout-form">
      <Space direction="vertical" className="space">
        <Space className="addLocation-form-title-space">
          <Text className="addLocation-form-title">Add location</Text>
        </Space>
        <Form
          name="login"
          className="addLocation-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              { required: true, message: 'Please input location name!' }
            ]}
          >
            <Input
              placeholder="Enter Location Name"
              className="addLocation-form-input"
            />
          </Form.Item>

          <Space className="addLocation-form-space">
            <Form.Item name="email" label="Email">
              <Input
                placeholder="Enter email"
                className="addLocation-form-input-half"
              />
            </Form.Item>

            <Form.Item name="phoneNumber" label="Phone Number">
              <Input
                placeholder="Enter phone number"
                className="addLocation-form-input-half"
              />
            </Form.Item>
          </Space>

          <Space className="addLocation-form-space">
            <Form.Item
              name="state"
              label="State"
              rules={[{ required: true, message: 'Please select state!' }]}
            >
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
                <Select.Option value="demo1">Demo1</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="city"
              label="City"
              rules={[{ required: true, message: 'Please select city!' }]}
            >
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
                <Select.Option value="demo1">Demo1</Select.Option>
              </Select>
            </Form.Item>
          </Space>

          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: 'Please input address!' }]}
          >
            <Input
              placeholder="Enter Address"
              className="addLocation-form-input"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="button"
              className="addLocation-form-button-cancel"
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="addLocation-form-button"
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </Space>
  )
}
