import React from 'react'
import { Menu } from 'antd'
import {
  CreditCardOutlined,
  BookOutlined,
  UserOutlined
} from '@ant-design/icons'

//Scss
import './index.scss';

import {
  Link,
  useRouteMatch,
  useLocation
} from 'react-router-dom'

export const SettingSideBar: React.FC = () => {
  let { url } = useRouteMatch()
  const location = useLocation()
  let currentPath = location.pathname.split('/')[3]
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={[currentPath]}
      style={{ height: '100%', borderRight: 0 }}
    >
      <Menu.Item key="BusinessInfor" className="menu-item">
        <Link to={`${url}/BusinessInfor`}>
          <CreditCardOutlined />Business information
        </Link>
      </Menu.Item>
      <Menu.Item key="BillingInformation" className="menu-item">
        <Link to={`${url}/BillingInformation`}>
          <BookOutlined />Billing information
        </Link>
      </Menu.Item>
      <Menu.Item key="Users" className="menu-item">
        <Link to={`${url}/Users`}>
          <UserOutlined/>Users
        </Link>
      </Menu.Item>
    </Menu>
  )
}