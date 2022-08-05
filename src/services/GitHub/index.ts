import axios, { AxiosInstance } from 'axios'

/**
 * Types.
 */
import { User } from './types'

/**
 * Clear the access token.
 */
const clearAccessToken = () => {
  delete axios.defaults.headers.common.Authorization
}

/**
 * API GitHub.
 */
export class apiGitHub {
  private axiosGitHub: AxiosInstance

  constructor(access_token: string) {
    /**
     * Create base api url.
     */
    this.axiosGitHub = axios.create({
      baseURL: 'https://api.github.com/',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
  }

  /**
   * Find the user data logged in.
   */
  async user() {
    return await this.axiosGitHub.get<User>('user')
  }
}
