import { Table, Tag, Input, Row, Col } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons'
import './index.scss';
import { Button } from 'antd/lib/radio';

const columns = [
  { 
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName'
  },
  { 
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName'
  },
  { 
    title: 'Email',
    dataIndex: 'email',
    key: 'email'
  },
  { 
    title: 'Locations',
    dataIndex: 'locations',
    key: 'locations'
  },
  { 
    title: 'Role',
    dataIndex: 'role',
    key: 'role'
  },
  { 
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (tags: any[]) => (
      <>
        {tags.map((tag: any) => {
          let color;
          tag === 'ACTIVE' ? color = 'green' : color = 'red' 
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </>
    )
  }
]

const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smarty@gmail.com',
    locations: 'All',
    role: 'Owner',
    status: ['ACTIVE']
  },
  {
    key: '2',
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smarty@gmail.com',
    locations: 'All',
    role: 'Owner',
    status: ['ACTIVE']
  },
  {
    key: '3',
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smarty@gmail.com',
    locations: 'All',
    role: 'Owner',
    status: ['INACTIVE']
  },
  {
    key: '4',
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smarty@gmail.com',
    locations: 'All',
    role: 'Owner',
    status: ['ACTIVE']
  }
]

export const TableUser = () => {

  return(
    <div className="userTable">
      <Row className='userTable-row'>
        <Col xs={16}>
          <Input
            size="large"
            placeholder="Search for location"
            prefix={<SearchOutlined />} 
            className='col2-header-input'
          />
        </Col>
        <Col xs={8} className='invite'>
          <Button
            className='col2-header-btn-invite'
          >
            Invite User
          </Button>
        </Col>
      </Row>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}