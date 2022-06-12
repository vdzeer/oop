import { TSetAuthorizationHeadersProp } from './types'

export const setAuthorizationHeadersProp: TSetAuthorizationHeadersProp =
  token => ({
    Authorization: token || 'without-token',
  })
