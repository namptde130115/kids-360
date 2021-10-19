import React from 'react'
import { useSelector } from 'react-redux'

//reacrouter
import { Route, Redirect } from 'react-router-dom'
import { RootState } from '../redux/store'

import { Base64 } from 'js-base64'

export interface Props {
  children: React.ReactElement
  roles: any
}

/**
 * Primary UI component for user interaction
 */
export const PrivateRoute: React.FC<Props> = ({
  roles,
  children,
  ...rest
}) => {
  const roleEncode = localStorage.getItem('REnC')
  const isAuthenticatedEncode = localStorage.getItem('ENR')
  let roleDecode: string

  if (roleEncode === null) {
    roleDecode = 'none'
  }
  else {
    roleDecode = Base64.decode(roleEncode)
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticatedEncode === Base64.encode('true') &&
        roles.includes(roleDecode) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}
