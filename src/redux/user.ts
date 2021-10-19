import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosClient from '../APIS/clientAxios'
import { fetchPermission } from '../fakeApi/user'

//models
import { UserLoginInfo, User } from '../models/user'
import { authInfor } from '../models/user'
import { Permission, ROLE } from '../models/user'

//Encode
import { Base64 } from 'js-base64'
import Base from 'antd/lib/typography/Base'

interface UserInfo {
  permission: Permission
  authInfor: authInfor | null
  user: User
  status: 'loading' | 'idle'
}

const initialState: UserInfo = {
  permission: {
    role: ROLE.None,
    isAuthenticated: false
  },
  authInfor: null,
  user: {
    email: '',
    userName: '',
    avatarImg: null,
    fullName: '',
    shortName: '',
    phoneNumber: '',
    role: ROLE.None
  },
  status: 'idle'
}

export const postUserInfo = createAsyncThunk(
  'userInfor/post',
  async (data: UserLoginInfo) => {
    const response = await axiosClient.post(
      'https://dev.neronn.com/api/iam/authentication',
      data
    )

    const { accessToken, tokenType, expiresIn, refreshToken } =
      response.data
    const token = `${tokenType} ${accessToken}`

    localStorage.setItem('actk', token)
    localStorage.setItem('exres', expiresIn)
    localStorage.setItem('rftk', refreshToken)

    return response.data
  }
)

export const getCurrentUser = createAsyncThunk(
  'userInfor/getCurrentUser',
  async () => {
    const response = await axiosClient.get(
      'https://dev.neronn.com/api/iam/users/current'
    )

    return response.data
  }
)

export const getPermisson = createAsyncThunk(
  'userInfor/getPermisson',
  async () => {
    const response = await fetchPermission()
    const { role, isAuthenticated } = response

    const roleEncode = Base64.encode(role)
    const isAuthenticatedEncode = Base64.encode(
      isAuthenticated.toString()
    )

    localStorage.setItem('REnC', roleEncode)
    localStorage.setItem('ENR', isAuthenticatedEncode)

    return response
  }
)

export const userInforSlice = createSlice({
  name: 'userInfor',
  initialState,
  reducers: {
    setPermision: (state, { payload }) => {
      state.permission = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(postUserInfo.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(postUserInfo.fulfilled, (state, { payload }) => {
      state.authInfor = payload
      state.status = 'idle'
    })
    builder.addCase(postUserInfo.rejected, (state) => {
      state.status = 'idle'
    })

    builder.addCase(getCurrentUser.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(
      getCurrentUser.fulfilled,
      (state, { payload }) => {
        state.status = 'idle'
        state.user = payload
      }
    )
    builder.addCase(getPermisson.fulfilled, (state, { payload }) => {
      state.status = 'idle'
      state.permission = payload
    })
  }
})

export const userReducer = userInforSlice.reducer
export const { setPermision } = userInforSlice.actions
