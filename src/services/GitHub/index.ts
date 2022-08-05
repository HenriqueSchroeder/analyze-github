import axios from 'axios'

/**
 * Types.
 */
import { User } from './types'

/**
 * Base api url.
 */
const axiosGitHub = axios.create({
  baseURL: 'https://api.github.com/',
})

/**
 * Clean token if you have invalid.
 */
axiosGitHub.interceptors.response.use(
  function (response) {
    return response
  },
  async function (error) {
    if (error.response.status === 401) {
      clearAccessToken()
    }
    return Promise.reject(error)
  },
)

/**
 * Define the access token.
 */
export const definesAccessToken = (accessToken: string) => {
  console.log('Defines access token.')
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
}

/**
 * Clear the access token.
 */
export const clearAccessToken = () => {
  delete axios.defaults.headers.common.Authorization
}

/**
 * API GitHub.
 */
export const apiGitHub = {
  /**
   * Find the user data logged in.
   */
  async user() {
    return await axiosGitHub.get<User>('user')
  },
}
