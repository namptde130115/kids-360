import React, { useEffect } from 'react';

import {
  useRouteMatch,
  Switch,
  Route
} from 'react-router-dom'

//Ant Design
import 'antd/dist/antd.css';
import {
  Layout,
  Button,
  Typography,
  Row,
  Col,
  Input,
  Select,
  Avatar,
  Popover,
  Modal
} from 'antd';

//icons
import {
  PlusOutlined,
  SearchOutlined
} from '@ant-design/icons';

//Scss
import './index.scss';

//components
import { MainContent } from '../mainContent/content/index'
import { Photos } from '../mainContent/photos/index'
import { LocationTickets } from '../locationTicket/index'
import { MenuUser } from '../menuUser/index'
import { AddLocation } from '../addLocation/index'
import { Subscription } from '../../businessBilling/subcription'
import { TableUser } from '../user/index'
import { Programs } from '../programs/index'
import { AddPrograms } from '../addPrograms/index'
import { MainMenu } from './mainMenu'
import { SettingSideBar } from './settingSideBar'
import { BusinessInforMenu } from './businessInforMenu'
import { GeneralInfor } from '../generalInfor/index'

//redux
import { User } from '../../../models/user';
import { RootState } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../../redux/user'
import { filterLocation } from '../../../redux/businessInfor';

export const LayoutBusinesInfor = () => {
  const { Header, Content, Sider } = Layout;
  const { Text } = Typography;
  const { Option } = Select;
  const dispatch = useDispatch()
  let { path, url } = useRouteMatch()

  const [visible, setVisible] = React.useState(false)
  const [isAddLocationVisible, setIsAddLocationVisible] = React.useState(false);
  const [isAddPolicyVisible, setIsAddPolicyVisible] = React.useState(false);
  const [locationStatus, setLocationStatus] = React.useState('All')
  const userFetch: User = useSelector(
    (state: RootState) => state.user.user
  )

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [userFetch.fullName, dispatch])

  const handleLocationStatus = (value: string) => {
    console.log('value dispatch:', value)
    dispatch(filterLocation(value))
    setLocationStatus(value)
    console.log(locationStatus);
  } 

  const showAddPolicy = () => {
    setIsAddPolicyVisible(true);
  }

  const handleCancelPolicy = () => {
    setIsAddPolicyVisible(false);
  }

  const showAddLocaton = () => {
    setIsAddLocationVisible(true);
  };

  const handleCancelAddLocation = () => {
    setIsAddLocationVisible(false);
  };

  const hide = () => {
    setVisible(false)
  }

  const handleVisibleChange = (visible: any) => {
    setVisible(visible);
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
          <MainMenu/>
          <div className="user">
            <Button className='col2-header-btn-all'>All Location</Button>
            <Popover
              content={<MenuUser onClose={hide}/>}
              trigger="click"
              placement="bottomLeft"
              visible={visible}
              onVisibleChange={handleVisibleChange}
            >
              <div className="user-inner">
                <Text className="header-user-name">{userFetch.fullName.split(' ')[0]}</Text>
                <Avatar size='default' src={userFetch.avatarImg} >
                  {userFetch.shortName}
                </Avatar>
              </div>
            </Popover>
          </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Switch>
            <Route path={`${path}/Settings`}>
              <SettingSideBar/>
            </Route>  
            <Route path={`${path}/Reports`} children={<p>asdasd</p>}/>
            
            <Route path={`${path}/Customers`}>
              <p>Customers</p>
            </Route>
          </Switch>
        </Sider>
        <Layout style={{ padding: '0 24px 24px', position: 'relative'}}>
          <div className="demo">
            <div className="demo-nav">
              <Switch>
                <Route exact path={`${path}/Settings`}>
                  <BusinessInforMenu/>
                </Route> 
                <Route path={`${path}/Settings/BusinessInfor`} children={<BusinessInforMenu/>}/>
              </Switch>
              
            </div>
            {/* <div>
              <Button
                onClick={showAddPolicy}
                className='col2-header-btn-add'
              >
                <PlusOutlined />
                Add policy
              </Button>
            </div> */}
            <Modal
              visible={isAddPolicyVisible}
              footer={null}
              title={null}
              onCancel={handleCancelPolicy}
            >
              <AddPrograms onClose={handleCancelPolicy}/>
            </Modal>
          </div>
          <Content
            className="site-layout-background"
          >
            <Switch>
              <Route exact path={`${path}/Settings`}>
                <GeneralInfor/>
              </Route>
              <Route exact path={`${path}/Settings/BusinessInfor`}>
                <GeneralInfor/>
              </Route>
              <Route path={`${path}/Settings/BusinessInfor/GeneralInfor`}>
                <GeneralInfor/>
              </Route>
              <Route path={`${path}/Settings/BusinessInfor/Programs`}>
                <Programs/>
              </Route>
              <Route path={`${path}/Settings/BillingInformation`} children={<Subscription/>}/>
              <Route path={`${path}/Settings/Users`} children={<TableUser/>}/>
            </Switch>
            
            {/* <Subscription/> */}
            {/* <TableUser/> */}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
} 
