import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//models
import { Location } from '../models/businessInfor'

//mocks
import { Locations } from '../mock/businessInfor'
import {
  deleteLocationApi,
  fetchLocation,
  putLocation
} from '../fakeApi/businessInfor'
import { postLocation } from '../fakeApi/businessInfor'

interface BusinessInfor {
  error: string | null
  status: 'loading' | 'idle' | 'succeeded' | 'failed'
  locations: Location[]
}

const initialState: BusinessInfor = {
  error: null,
  status: 'idle',
  locations: []
}

export const getLocations = createAsyncThunk(
  'businessInfor/fetchLocations',
  async () => {
    const response = await fetchLocation(Locations)
    return response
  }
)

export const addLocation = createAsyncThunk(
  'businessInfor/addLocation',
  async (location: Location) => {
    const response = await postLocation(location)
    return response
  }
)

export const editLocation = createAsyncThunk(
  'businessInfor/editLocation',
  async (location: Location) => {
    const response = await putLocation(location)
    return response
  }
)

export const deleteLocation = createAsyncThunk(
  'businessInfor/deleteLocation',
  async (location: Location) => {
    const response = await deleteLocationApi(location)
    return response
  }
)

export const BusinessInforSlice = createSlice({
  name: 'BusinessInfor',
  initialState,
  reducers: {
    switchLocationStatus: (state, action) => {
      const { name, status } = action.payload
      const existingLocation = state.locations.find(
        (location) => location.name === name
      )
      if (existingLocation) {
        existingLocation.status = status
      }
    },
    filterLocation: (state, action) => {
      console.log('action.payload:', action.payload)
      state.locations.filter(
        (location) => location.status === action.payload
      )
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getLocations.pending, (state) => {
      state.status = 'loading'
      state.error = null
    })
    builder.addCase(
      getLocations.fulfilled,
      (state, { payload }) => {
        state.locations = payload
        state.status = 'succeeded'
      }
    )
    builder.addCase(getLocations.rejected, (state) => {
      state.status = 'failed'
    })

    builder.addCase(
      addLocation.fulfilled,
      (state, { payload }) => {
        state.locations.push(payload)
        state.status = 'succeeded'
      }
    )

    builder.addCase(
      editLocation.fulfilled,
      (state, { payload }) => {
        const {
          name,
          status,
          address,
          email,
          phoneNumber,
          stateOfCity,
          city
        } = payload
        let updateLocation = state.locations.find(
          (location) => location.name === name
        )
        if (updateLocation) {
          updateLocation.address = address
          updateLocation.phoneNumber = phoneNumber
          updateLocation.status = status
          updateLocation.email = email
          updateLocation.stateOfCity = stateOfCity
          updateLocation.city = city
        }
      }
    )

    builder.addCase(
      deleteLocation.fulfilled,
      (state, { payload }) => {
        let deleteIndex = state.locations.findIndex(
          (location) => location.name === payload.name
        )
        if (deleteIndex > -1) {
          state.locations.splice(deleteIndex, 1)
        }
      }
    )
  }
})

export const businessInforReducer = BusinessInforSlice.reducer

export const { switchLocationStatus, filterLocation } =
  BusinessInforSlice.actions
