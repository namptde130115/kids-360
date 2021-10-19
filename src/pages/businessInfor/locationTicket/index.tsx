import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import {
  Card,
  Tag,
  Row,
  Col,
  Typography,
  Modal
} from 'antd';
import { Spin } from 'antd';

//models
import { Location } from '../../../models/businessInfor'

//icons
import { EditOutlined, MailOutlined, PhoneOutlined, HomeOutlined, DeleteOutlined } from '@ant-design/icons';

//Scss
import './index.scss'

//components
import { EditLocation } from '../editLocation/index'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { deleteLocation, getLocations } from '../../../redux/businessInfor';

interface Props {
  location: Location
}

const LocationTicket = (props: Props) => {
  const { location } = props;

  const { Text } = Typography;
  const [visible, setVisible] = React.useState(false)

  const dispatch = useDispatch()

  const handleOpen = () => {
    setVisible(true)
  }

  const handleClose = () => {
    setVisible(false)
  }

  const handleDeleteLocation = () => {
    dispatch(deleteLocation(location))
  }

  let tagColor: string = 'green'
  if(location.status === 'ACTIVE') {
    tagColor = 'green'
  } else {
    tagColor = 'red'
  }

  return (
    <Card className="location-ticket-root">
      <Row>
        <Col xs={4}>
          <Tag color={tagColor}>{location.status}</Tag>
        </Col>
        <Col xs={19}>
          <Text className="location-ticket-title">{location.name}</Text>
        </Col>
        <Col xs={1}>
          <EditOutlined
            className="location-btn-edit"
            onClick={handleOpen}
          />
          <DeleteOutlined
            className="location-btn-edit"
            onClick={handleDeleteLocation}
          />
        </Col>
        <Modal
          visible={visible}
          footer={null}
          title={null}
          onCancel={handleClose}
        >
          <EditLocation onClose={handleClose} name={location.name}/>
        </Modal>   
      </Row> 
      <Row>
        <Col>
          <HomeOutlined/>
          <Text className="location-ticket-text">{location.address}</Text>
        </Col>  
      </Row>
      <Row>
        <Col xs={10}>
          <PhoneOutlined />
          <Text className="location-ticket-text">{location.phoneNumber}</Text>
        </Col>
        <Col xs={14}>
          <MailOutlined />
          <Text className="location-ticket-text">{location.email}</Text>
        </Col>   
      </Row>   
    </Card>
  )
}

export const LocationTickets = () => {

  const dispatch = useDispatch()
  const locations = useSelector((state: RootState) => state.businessInfor.locations)
  const status = useSelector((state: RootState) => state.businessInfor.status)

  useEffect(() => {
    if(status === 'idle') {
      dispatch(getLocations())
    }
  }, [status, dispatch])

  let content

  if(status === 'loading') {
    content = <Spin />
  }else if(status === 'succeeded') {
    content = locations.map((location,index) => (<LocationTicket key={index} location={location} />))
  }else if(status === 'failed') {
    content = <div>xảy ra lỗi khi tải trang, vui lòng tải lại</div>
  }

  return (
    <div className="location-tickets">
      {content}
    </div>
  )
}