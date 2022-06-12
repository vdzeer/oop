import { TRoutesTree } from './types'
import { FreelancersPage, HomePage, InfoPage } from '../pages'

export const RoutesTree: any = {
  home: {
    name: 'home',
    path: '/',
    component: HomePage,
  },

  about: {
    name: 'about',
    path: '/about',
    component: InfoPage,
  },
  modules: {
    name: 'modules',
    path: '/modules',
    component: FreelancersPage,
  },
}
