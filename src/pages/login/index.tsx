import React, { useEffect } from 'react'

//router
import { Link, useHistory } from 'react-router-dom'

//logo
import Logo from '../../images/logo.png'

//Ant Design
import {
  Form,
  Input,
  Button,
  Checkbox,
  Space,
  Image,
  Typography
} from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import 'antd/dist/antd.css'

//Scss
import './index.scss'

//redux
import { useDispatch } from 'react-redux'
import {
  postUserInfo,
  getCurrentUser,
  setPermision,
  getPermisson
} from '../../redux//user'
import { unwrapResult } from '@reduxjs/toolkit'
import { Permission, ROLE } from '../../models/user'

export const Login = () => {
  const { Text } = Typography

  const dispatch = useDispatch()
  const history = useHistory()

  const onFinish = async (values: any) => {
    try {
      const signResult: any = await dispatch(
        postUserInfo({
          isKeepSignedIn: true,
          password: values.password,
          username: values.emailAddress
        })
      )

      unwrapResult(signResult)

      const getCurrentUserResult: any = await dispatch(
        getCurrentUser()
      )
      unwrapResult(getCurrentUserResult)

      await dispatch(getPermisson())

      history.push('/businessInfor')
    } catch (rejectedValueOrSerializedError) {
      console.log('Tài khoản hoặc mật khẩu không chính xác')
    }
  }

  return (
    <Space className="login-layout-form">
      <Space direction="vertical" className="login-layout-form-space">
        <Image width={128} height={128} src={Logo} preview={false} />
        <Form
          name="login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="emailAddress"
            rules={[
              {
                required: true,
                message: 'Please input your Email address!'
              }
            ]}
          >
            <Input
              placeholder="Email address"
              className="login-form-input"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your PassWord!'
              }
            ]}
          >
            <Input.Password
              className="login-form-input"
              placeholder="Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <Form.Item
            className="login-form-remember"
            name="login-form-remember"
          >
            <Form.Item
              name="remember"
              valuePropName="checked"
              noStyle
            >
              <Checkbox className="login-form-remember-check">
                Remember me
              </Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="#">
              Forgot password?
            </a>
          </Form.Item>

          <Form.Item name="login-form-button">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
        <Text className="login-form-register">
          Don’t have an account{' '}
          <Link className="login-form-forgot" to="/register">
            Sign Up
          </Link>
        </Text>
      </Space>
    </Space>
  )
}
