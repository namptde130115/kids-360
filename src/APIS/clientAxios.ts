import axios from 'axios'

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json'
  }
})

axiosClient.interceptors.request.use(async (config) => {
  const customHeaders = {
    Authorization: ''
  }

  const accessToken = localStorage.getItem('actk')
  if (accessToken) {
    customHeaders.Authorization = accessToken
  }

  return {
    ...config,
    headers: {
      ...customHeaders, // auto attach token
      ...config.headers // but you can override for some requests
    }
  }
})

axiosClient.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalConfig = error.config

    if (error.response) {
      if (
        error.response.status === 401 &&
        !originalConfig._retry
      ) {
        originalConfig._retry = true

        try {
          const refreshToken =
            localStorage.getItem('rftk')
          const rs = await axiosClient.post(
            `https://dev.neronn.com/api/iam/authentication/refresh/${refreshToken}`
          ) // link để lấy accessToken mới
          const { accessToken, tokenType } = rs.data
          const token = `${tokenType} ${accessToken}`

          localStorage.setItem('actk', token)

          return axiosClient(originalConfig)
        } catch (err) {
          return Promise.reject(err)
        }
      }
    }

    return Promise.reject(error)
  }
)

export default axiosClient
