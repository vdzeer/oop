import { TRoutesTree } from './types'
import {
  FreelancersPage,
  HomePage,
  InfoPage,
  LoginPage,
  RegistrationPage,
  SettingsPage,
  UserPage,
  CreateEditOrderPage,
  OrderPage,
  FinancesPage,
  ForgotPassword,
} from '../pages'
import { CabinetPage } from '../pages/Cabinet'

export const RoutesTree: TRoutesTree = {
  home: {
    name: 'home',
    path: '/',
    component: HomePage,
  },
  login: {
    name: 'login',
    path: '/login',
    component: LoginPage,
  },
  registration: {
    name: 'registration',
    path: '/registration',
    component: RegistrationPage,
  },
  cabinet: {
    name: 'cabinet',
    path: '/cabinet',
    component: CabinetPage,
  },
  user: {
    name: 'user',
    path: '/user/:id',
    component: UserPage,
  },
  settings: {
    name: 'settings',
    path: '/settings',
    component: SettingsPage,
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
  createEditOrder: {
    name: 'createEditOrder',
    path: '/edit-order/:id?',
    component: CreateEditOrderPage,
  },
  order: {
    name: 'order',
    path: '/order/:id',
    component: OrderPage,
  },
  finances: {
    name: 'finances',
    path: '/finances',
    component: FinancesPage,
  },
  forgot: {
    name: 'forgot',
    path: '/forgot',
    component: ForgotPassword,
  },
}
