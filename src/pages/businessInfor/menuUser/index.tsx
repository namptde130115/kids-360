//Scss
import './index.scss'

//Ant Design
import 'antd/dist/antd.css'
import React from 'react'
import { Modal } from 'antd'

//components
import { MyProfile } from '../myProfile/index'
import { ChangePassword } from '../changePassword/index'
import { ROLE } from '../../../models/user'
import { setPermision } from '../../../redux/user'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

interface Props {
  onClose: () => void
}

export const MenuUser = (props: Props) => {
  const [visibleProfile, setVisibleProfile] = React.useState(false)
  const [visibleChangePass, setVisibleChangePass] =
    React.useState(false)
  const { onClose } = props

  const dispatch = useDispatch()
  const history = useHistory()

  const handleClose = () => {
    onClose()
  }

  const handleProFile = () => {
    onClose()
    setVisibleProfile(true)
  }

  const handleCloseProfile = () => {
    setVisibleProfile(false)
  }

  const handleChangePass = () => {
    onClose()
    setVisibleChangePass(true)
  }

  const handleCloseChangePass = () => {
    setVisibleChangePass(false)
  }

  const handleLogout = () => {
    dispatch(
      setPermision({
        role: ROLE.None,
        isAuthenticated: false
      })
    )

    localStorage.removeItem('actk')

    history.push('/')
  }

  return (
    <div className="menuUser">
      <p onClick={handleClose} className="menuUser-text">
        Business information
      </p>
      <p onClick={handleProFile} className="menuUser-text">
        Profile
      </p>
      <p onClick={handleChangePass} className="menuUser-text">
        Change password
      </p>
      <p onClick={handleClose} className="menuUser-text">
        Term and Privacy
      </p>
      <p onClick={handleLogout} className="menuUser-text">
        Logout
      </p>
      <Modal
        visible={visibleProfile}
        footer={null}
        title={null}
        onCancel={handleCloseProfile}
      >
        <MyProfile />
      </Modal>
      <Modal
        visible={visibleChangePass}
        footer={null}
        title={null}
        onCancel={handleCloseChangePass}
      >
        <ChangePassword />
      </Modal>
    </div>
  )
}
