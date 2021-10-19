import React from 'react'

//Ant Design
import { Menu } from 'antd'

//Scss
import './index.scss';

import {
  Link,
  useRouteMatch,
  useLocation
} from 'react-router-dom'

export const MainMenu:React.FC = () => {
  let { url } = useRouteMatch()
  const location = useLocation()
  let currentPath = location.pathname.split('/')[2]

  return(
    <React.Fragment>
      <Menu mode="horizontal" defaultSelectedKeys={[currentPath]}>
        <Menu.Item key="Calendar1">
          <Link to={`${url}/Calendar`}> Calendar </Link>
        </Menu.Item>
        <Menu.Item key="Enrolment">
          <Link to={`${url}/Enrolment`}> Enrolment </Link>
        </Menu.Item>
        <Menu.Item key="Customers">
          <Link to={`${url}/Customers`}> Customers </Link>
        </Menu.Item>
        <Menu.Item key="Reports">
          <Link to={`${url}/Reports`}> Reports </Link>
        </Menu.Item>
        <Menu.Item key="Settings">
          <Link to={`${url}/Settings`}> Settings </Link>
        </Menu.Item>
      </Menu>
     
    </React.Fragment>
  )
}