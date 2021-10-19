import 'antd/dist/antd.css';
import { Card, Tag, Row, Col, Typography, Button } from 'antd';
import { GlobalOutlined, BorderlessTableOutlined, PhoneOutlined } from '@ant-design/icons';
import mainContent from '../../../../images/mainContent.png';

//Scss
import './index.scss'

export const MainContent = () => {
  const { Paragraph, Text} = Typography;

  return (
    <Card className='mainContent-root'>
      <Row>
        <Col xs={6}>
          <img src={mainContent} alt='' className='mainContent-logo'/>
        </Col>
        <Col xs={18}>
          <Row className='mainContent-div-title'>
            <Col xs={21}>
              <Text className='mainContent-title'>Vida Tennis</Text>
            </Col>
            <Col xs={3}>
              <Button type="link">
                <Text className='mainContent-btn-edit'>Edit</Text>
              </Button>
            </Col>
          </Row>
          <Row>
            <GlobalOutlined />
            <Text className='mainContent-subtitle'>www.vidatennis.com.au</Text>
          </Row>
          <Row>
            <BorderlessTableOutlined />
            <Text className='mainContent-subtitle'>www.kids360.com/vidatennis</Text>
          </Row>
        </Col>
      </Row>
      <Row>
        <Paragraph className='mainContent-paragraph'>
          Vida Tennis is Australia’s most progressive tennis coaching team, offering a holistic approach in a 
          fun learning environment. Founded in 1998, our vision is to create life opportunities for each 
          individual through the sport of tennis. Whether your goal is the world stage or personal best, we have 
          a program for you.
        </Paragraph>
        <Paragraph className='mainContent-paragraph'>
          The My Vida Journey pathway enables players of all ages and abilities to have a clear understanding of 
          their tennis progress and all of the opportunities the sport has to offer.
        </Paragraph>
        <Paragraph className='mainContent-paragraph'>
          Our culture and passionate people set Vida Tennis apart from the field and we encourage you to start 
          your journey with us today with free intro lessons. Vida Tennis doesn’t just produce players, we create 
          life opportunities for people through tennis.
        </Paragraph>
      </Row>
    </Card>
  )
}