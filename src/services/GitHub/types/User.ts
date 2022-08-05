export type User = {
  id: number
  url: string
  bio: string | null
  type: string
  blog: string | null
  name: string | null
  email: string | null
  login: string
  node_id: string
  company: string | null
  hireable: boolean | null
  html_url: string
  location: string | null
  gists_url: string
  followers: number
  following: number
  repos_url: string
  created_at: string
  updated_at: string
  events_url: string
  site_admin: boolean
  avatar_url: string
  starred_url: string
  gravatar_id: string | null
  disk_usage?: number
  public_gists: number
  public_repos: number
  followers_url: string
  suspended_at?: string | null
  following_url: string
  private_gists?: number
  collaborators?: number
  subscriptions_url: string
  organizations_url: string
  twitter_username?: string | null
  received_events_url: string
  total_private_repos?: number
  owned_private_repos?: number
  two_factor_authentication: boolean
  plan?: {
    name: string
    space: number
    collaborators: number
    private_repos: number
  }
}
