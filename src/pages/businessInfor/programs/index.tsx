import {
  Button,
  Col,
  Input,
  Menu,
  Row,
  Typography
} from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  SearchOutlined
} from '@ant-design/icons';

import './index.scss'
export const Programs = () => {

  const handleClick = (e:any) => {
    console.log('click ', e);
  };

  const { SubMenu } = Menu;
  const { Text } = Typography
  return(

    <div className="programs">
      <Row className='programs-header'>
        <Col xs={10} className='userTable-div-input1'>
          <Text className='programs-header-title1'>Program name</Text>
          <Input
            size="large"
            prefix={<SearchOutlined />} 
            className='userTable-header-input1'
          />
        </Col>
        <Col xs={4}>
          <Text className='programs-header-title'>Age range</Text>
          <Input
            size="large"
            prefix={<SearchOutlined />} 
            className='userTable-header-input2'
          />
        </Col>
        <Col xs={10} className='userTable-div-input3'>
          <Text className='programs-header-title'>Cancellation </Text>
          <Input
            size="large"
            prefix={<SearchOutlined />} 
            className='userTable-header-input3'
          />
        </Col>
      </Row>
      
    <Menu
        onClick={handleClick}
        mode="inline"
        className='programs-menu'
      >
        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">
              <Row>
                <Col xs={10}>
                  <Text>
                    Head Start
                  </Text>
                </Col> 
                <Col xs={5}>
                  <Text>
                    3-5 years old
                  </Text>
                </Col>
                <Col xs={9}>
                  <Text>
                    Cancellation policy for tennis class
                  </Text>
                </Col>
              </Row>
            </Menu.Item>
            <Menu.Item key="2">
              <Text>Option 2</Text>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">
              <Text>Option 3</Text>
            </Menu.Item>
            <Menu.Item key="4">
              <Text>Option 4</Text>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  )
}