import React from 'react'
import { Menu } from 'antd'

//Scss
import './index.scss'

//Router
import { Link, useLocation } from 'react-router-dom'

export const BusinessInforMenu: React.FC = () => {
  const location = useLocation()
  let currentPath = location.pathname.split('/')[4]

  return (
    <Menu
      className="BusinessInforMenu"
      mode="horizontal"
      defaultSelectedKeys={[currentPath]}
    >
      <Menu.Item className="businessInforMenu-item" key="GeneralInfor">
        <Link to={`/businessInfor/Settings/BusinessInfor/GeneralInfor`}>
          General Information
        </Link>
      </Menu.Item>
      <Menu.Item className="businessInforMenu-item" key="Programs">
        <Link to={`/businessInfor/Settings/BusinessInfor/Programs`}>
          Programs
        </Link>
      </Menu.Item>
      <Menu.Item className="businessInforMenu-item" key="Cancellation">
        <Link to={`/businessInfor/Settings/BusinessInfor/Cancellation`}>
          Cancellation
        </Link>
      </Menu.Item>
      <Menu.Item className="businessInforMenu-item" key="Policy">
        <Link to={`/businessInfor/Settings/BusinessInfor/Policy`}>
          Policy
        </Link>
      </Menu.Item>
      <Menu.Item className="businessInforMenu-item" key="Holidays">
        <Link to={`/businessInfor/Settings/BusinessInfor/Holidays`}>
          Holidays
        </Link>
      </Menu.Item>
      <Menu.Item className="businessInforMenu-item" key="Pricing">
        <Link to={`/businessInfor/Settings/BusinessInfor/Pricing`}>
          Pricing
        </Link>
      </Menu.Item>
    </Menu>
  )
}
