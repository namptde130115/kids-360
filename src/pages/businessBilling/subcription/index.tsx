import React from 'react'
import {
  Row,
  Col,
  Typography,
  Button,
  Input,
  Select
} from 'antd'
import CVVImg from '../../../images/cardCVV.png'
import VisaLogo from '../../../images/Visa.png'
import './index.scss'

export const Subscription = () => {
  const { Text } = Typography
  const { Option } = Select

  return (
    <Row>
      <Col className="subcription-payment-col1" xs={10}>
        <Row className="subcription-payment-infor-title">
          <Text className="subcription-payment-title">
            Subscription package
          </Text>
        </Row>
        <Row className="col1-border">
          <Button className="col1-subcription-btn">
            <Row>
              <Col xs={12}>
                <Text className="col1-subcription-text">
                  Trial 30 days
                </Text>
              </Col>
              <Col xs={12}>
                <Text className="col1-subcription-text">
                  Free
                </Text>
              </Col>
            </Row>
          </Button>
        </Row>
        <Row className="col1-border">
          <Button className="col1-subcription-btn">
            <Row>
              <Col xs={12}>
                <Text className="col1-subcription-text">
                  Standard
                </Text>
              </Col>
              <Col xs={12}>
                <Text className="col1-subcription-text">
                  $25/month
                </Text>
              </Col>
            </Row>
          </Button>
        </Row>
        <Row className="col1-border">
          <Button className="col1-subcription-btn">
            <Row>
              <Col xs={12}>
                <Text className="col1-subcription-text">
                  Professional
                </Text>
              </Col>
              <Col xs={12}>
                <Text className="col1-subcription-text">
                  $50/month
                </Text>
              </Col>
            </Row>
          </Button>
          <Button className="col1-subcription-btn">
            Upgrade subscription
          </Button>
        </Row>
      </Col>
      <Col className="subcription-payment-col2" xs={14}>
        <Row className="subcription-payment-infor-title">
          <Text className="subcription-payment-title">
            Card details
          </Text>
        </Row>
        <Row className="subcription-cardDetails">
          <div className="subcription-payment-cvv">
            <img className="cvv-img" src={CVVImg} />
            <div className="subcription-payment-details-input-cvv">
              <Text className="subcription-payment-details-text-cvv">
                CVV
              </Text>
              <Input className="subcription-payment-details-input" />
            </div>
          </div>
          <div className="subcription-payment-details">
            <Row className="subcription-payment-details-row">
              <Text className="subcription-payment-details-text-big">
                Payment Details
              </Text>
            </Row>
            <Row className="subcription-payment-details-row">
              <Col xs={24}>
                <Text className="subcription-payment-details-text-small">
                  Card Details
                </Text>
              </Col>
              <Col xs={6}>
                <Input className="subcription-payment-details-input" />
              </Col>
              <Col xs={6}>
                <Input className="subcription-payment-details-input" />
              </Col>
              <Col xs={6}>
                <Input className="subcription-payment-details-input" />
              </Col>
              <Col xs={6}>
                <Input className="subcription-payment-details-input" />
              </Col>
            </Row>
            <Row className="subcription-payment-details-row">
              <Col xs={24}>
                <Text className="subcription-payment-details-text-small">
                  Expiration
                </Text>
              </Col>
              <Col xs={12}>
                <Select
                  className="subcription-payment-details-select"
                  placeholder="Month"
                >
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                  <Option value="6">6</Option>
                </Select>
              </Col>
              <Col xs={6}>
                <Input
                  className="subcription-payment-details-input"
                  placeholder="year"
                />
              </Col>
              <Col xs={6}>
                <img
                  className="visa-img"
                  src={VisaLogo}
                  alt="visa"
                />
              </Col>
            </Row>
          </div>
        </Row>

        <Row className="subcription-payment-infor">
          <Col xs={24} className="border">
            <Text>ADDRESS</Text>
          </Col>
          <Col xs={12} className="border">
            CITY
          </Col>
          <Col xs={6} className="border">
            <Text>STATE</Text>
            <Select placeholder="Select state">
              <Option value="1">asda</Option>
              <Option value="2">asda</Option>
            </Select>
          </Col>
          <Col xs={6} className="border">
            <Text>Zip</Text>
          </Col>
        </Row>
        <Row className="subcription-payment-gr-btn">
          <Button>Cancel</Button>
          <Button>Save</Button>
        </Row>
      </Col>
    </Row>
  )
}
