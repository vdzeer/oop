import { FC } from 'react'

export type TRoutesTree = {
  [page in TRouteNames]: TRoute<page>
}

export type TRoute<N> = {
  name: N
  path: string
  component: FC
}

/* eslint-disable */
export type TRouteNames =
  | 'home'
  | 'login'
  | 'registration'
  | 'cabinet'
  | 'settings'
  | 'about'
  | 'modules'
  | 'user'
  | 'createEditOrder'
  | 'finances'
  | 'order'
  | 'forgot'
