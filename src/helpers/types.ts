export type TMediaQueries = {
  [breakpoint in TMediaQueryBreakpoints]: string
}

export type TMediaBreakpoints = {
  [breakpoint in Exclude<TMediaQueryBreakpoints, 'xs'>]: number
}

export type TMediaQueryBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type TSetAuthorizationHeadersProp = (token: string) => {
  Authorization: string
}
