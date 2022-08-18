import axios, { AxiosInstance } from 'axios'

/**
 * Types.
 */
import { User } from './types'

/**
 * API GitHub.
 */
export class apiGitHub {
  private axiosGitHub: AxiosInstance

  constructor(access_token?: string) {
    /**
     * Create base api url.
     */
    this.axiosGitHub = axios.create({
      baseURL: 'https://api.github.com/',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: access_token ? `Bearer ${access_token}` : '',
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
