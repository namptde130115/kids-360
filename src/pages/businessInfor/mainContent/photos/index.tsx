import 'antd/dist/antd.css';
import { Card, Row, Col, Typography } from 'antd';
import Photo from '../../../../images/Photo.png';
import Photo2 from '../../../../images/Photo2.png'
import Photo3 from '../../../../images/Photo3.png'

//Scss
import './index.scss'

export const Photos = () => {
  const { Paragraph, Text} = Typography;

  return (
    <Card className='photos-root'>
      <Text className='photos-title'>Photos</Text>
      <Row className='photos-row'>
        <Col xs={8}>
          <img src={Photo} alt='' className='photos-logo'/>
        </Col>
        <Col xs={8}>
          <img src={Photo2} alt='' className='photos-logo'/>
        </Col>
        <Col xs={8}>
          <img src={Photo3} alt='' className='photos-logo'/>
        </Col>
      </Row>
    </Card>
  )
}