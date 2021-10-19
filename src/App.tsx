import React from 'react'
import WebFont from 'webfontloader'

//Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

//components
import { MyProfile } from './pages/businessInfor/myProfile/index'
import { ChangePassword } from './pages/businessInfor/changePassword/index'
import { AddLocation } from './pages/businessInfor/addLocation/index'
import { EditLocation } from './pages/businessInfor/editLocation/index'
import { Login } from './pages/login/index'
import { Register } from './pages/register/index'
import { LocationTickets } from './pages/businessInfor/locationTicket/index'
import { MainContent } from './pages/businessInfor/mainContent/content/index'
import { Photos } from './pages/businessInfor/mainContent/photos/index'
import { LayoutBusinesInfor } from './pages/businessInfor/layout/index'
import { AddPrograms } from './pages/businessInfor/addPrograms'

//test
import { MenuUser } from './pages/businessInfor/menuUser/index'

//ProvideAuth
import { PrivateRoute } from './context/privateRoute'

//models
import { ROLE } from './models/user'
import { MainMenu } from './pages/businessInfor/layout/mainMenu'

WebFont.load({
  google: {
    families: ['Fira Sans Extra Condensed', 'sans-serif']
  },
  active: () => {
    console.log('All set!')
  }
})

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/businessInfor">
          <PrivateRoute roles={[ROLE.User, ROLE.Admin]}>
            <LayoutBusinesInfor />
          </PrivateRoute>
        </Route>
        <Route path="/topics">
          <LayoutBusinesInfor />
        </Route>
      </Switch>
    </Router>
    // <AddPrograms/>
  )
}
