import { createAction } from '@reduxjs/toolkit'
import { createActionTypes, createApiActions } from 'actions-util'
import { AxiosError } from 'axios'

import { regSchema, loginSchema } from './types'

export const loginUserAction = createApiActions<loginSchema>(
  createActionTypes('USER/LOGIN'),
)

export const registerUserAction = createApiActions<regSchema>(
  createActionTypes('USER/REGISTER'),
)

export const getUserAction = createApiActions<{}>(
  createActionTypes('USER/GET_USER'),
)

export const getOtherUser = createApiActions<{ id: string }>(
  createActionTypes('USER/GET_OTHER_USER'),
)

export const getAllUserAction = createApiActions<{}>(
  createActionTypes('GET_ALL_USER'),
)

export const getBestUserAction = createApiActions<{}>(
  createActionTypes('GET_BEST_USERS'),
)

export const getEnumsAction = createApiActions<{}>(
  createActionTypes('GET_ENUMS'),
)

export const updateUserAction = createApiActions<any>(
  createActionTypes('USER/UPDATE_USER'),
)

export const updateUserPasswordAction = createApiActions<any>(
  createActionTypes('USER/UPDATE_PASSWORD'),
)

export const initAppAction = createApiActions<void, void, AxiosError>(
  createActionTypes('USER/INIT_APP'),
)

export const createSupportAction = createApiActions<{
  title: string
  email: string
  login: string
  description: string
}>(createActionTypes('USER/SUPPORT'))

export const forgotPasswordAction = createApiActions<{
  code: string
  email: string
  password: string
}>(createActionTypes('USER/FORGOT'))

export const sendCodeAction = createApiActions<{
  email: string
}>(createActionTypes('USER/sendCode'))

export const createFeedbackAction = createApiActions(
  createActionTypes('USER/FEEDBACK'),
)

export const logoutAction = createAction('LOG_OUT')

export const clearOtherUser = createAction('CLEAR_OTHER')

export const setStageAction = createAction('SET_STAGE')
