import { DefaultStateProps } from '../types'
import { Entities } from '../../@types'

export type TInitialState = DefaultStateProps & {
  token: string | null
  user: Entities.User | null
  currentUser: Entities.User | null
  stage: string
  allUsers: Array<any>
  bestUsers: Array<Entities.User>
  enums: any
}

export type regSchema = {
  login: string
  name: string
  phone: string
  email: string
  status: string
  role: string
  password: string
}

export type loginSchema = {
  login: string
  password: string
}

export type TUser = {
  login: string
  name: string
  phone: string
  email: string
  status: string
  role: string
  password: string
  cash: string
  birthDate: string
  orders: Array<any>
  online?: boolean
  blocked?: boolean
}

export type GetUserActionResponse = Entities.User

export type UpdateUserActionResponse = Entities.User
