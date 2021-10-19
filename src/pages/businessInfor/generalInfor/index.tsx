import React from 'react'

//Ant Design
import {
  Row, 
  Col,
  Button,
  Typography,
  Modal,
  Input,
  Select
} from 'antd'

//icons
import {
  PlusOutlined,
  SearchOutlined
} from '@ant-design/icons'

//Component
import { MainContent } from '../mainContent/content/index'
import { Photos } from '../mainContent/photos/index'
import { AddLocation } from '../addLocation/index'
import { LocationTickets } from '../locationTicket/index'
import { useDispatch } from 'react-redux'
import { filterLocation } from '../../../redux/businessInfor'

export const GeneralInfor: React.FC = () => {
  const { Text } = Typography
  const { Option } = Select

  const [isAddLocationVisible, setIsAddLocationVisible] = React.useState(false);
  const [locationStatus, setLocationStatus] = React.useState('All')

  const dispatch = useDispatch()

  const showAddLocaton = () => {
    setIsAddLocationVisible(true);
  }

  const handleCancelAddLocation = () => {
    setIsAddLocationVisible(false);
  }

  const handleLocationStatus = (value: string) => {
    console.log('value dispatch:', value)
    dispatch(filterLocation(value))
    setLocationStatus(value)
    console.log(locationStatus);
  } 

  return(
    <Row>
      <Col xs={12}>
        <MainContent/>
        <Photos/>
      </Col>
      <Col xs={12}
        className='col2'
      >
      <Row className='col2-header'>
        <Col xs={12}>
          <Text className='col2-header-title'>Locations</Text>
        </Col>
        <Col xs={12} className='col2-header-btn'>
          <Button
            onClick={showAddLocaton}
            className='col2-header-btn-add'
          >
            <PlusOutlined />Add Location
          </Button>
          <Modal
            visible={isAddLocationVisible}
            footer={null}
            title={null}
            onCancel={handleCancelAddLocation}
          >
            <AddLocation onClose={handleCancelAddLocation}/>
          </Modal>
        </Col>
      </Row>
      <Row className='col2-header'>
        <Col xs={17}>
          <Input
            size="large"
            placeholder="Search for location"
            prefix={<SearchOutlined />} 
            className='col2-header-input'
          />
        </Col>
        <Col xs={7}>
        <Select
          size="large"
          value={locationStatus}
          className='col2-header-select'
          onChange={handleLocationStatus}
        >
          <Option value="All">All</Option>
          <Option value="ACTIVE">Active</Option>
          <Option value="INACTIVE">Inactive</Option>
        </Select>
        </Col>
      </Row>
      <LocationTickets/>
      </Col>
    </Row>
  )
}