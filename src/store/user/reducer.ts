import { createReducer } from '@reduxjs/toolkit'
import { TInitialState } from './types'

import {
  updateUserAction,
  initAppAction,
  getUserAction,
  registerUserAction,
  logoutAction,
  setStageAction,
  updateUserPasswordAction,
  getAllUserAction,
  getOtherUser,
  clearOtherUser,
  getBestUserAction,
  getEnumsAction,
} from './actions'
import { loginUserAction } from '.'

const InitialState: TInitialState = {
  user: null,
  currentUser: null,
  allUsers: [],
  enums: {},
  bestUsers: [],
  token: null,
  error: null,
  stage: 'profile',
  loading: false,
}

export const userReducer = createReducer<TInitialState>(
  InitialState,
  builder => {
    builder.addCase(loginUserAction.request, state => ({
      ...state,
      loading: true,
    }))
    builder.addCase(loginUserAction.success, (state, { payload }) => ({
      ...state,
      user: payload.user,
      token: payload.token,
      loading: false,
    }))
    builder.addCase(loginUserAction.failure, (state, { payload }) => ({
      ...state,
      error: payload,
      loading: false,
    }))

    builder.addCase(registerUserAction.request, state => ({
      ...state,
      loading: true,
    }))
    builder.addCase(registerUserAction.success, (state, { payload }) => ({
      ...state,
      user: payload.user,
      token: payload.token,
      loading: false,
    }))
    builder.addCase(registerUserAction.failure, (state, { payload }) => ({
      ...state,
      error: payload,
      loading: false,
    }))

    builder.addCase(getUserAction.request, state => ({
      ...state,
      loading: true,
    }))
    builder.addCase(getUserAction.success, (state, { payload }) => ({
      ...state,
      user: payload.user,
      loading: false,
    }))
    builder.addCase(getUserAction.failure, (state, { payload }) => ({
      ...state,
      error: payload,
      loading: false,
      // token: null,
      // user: null,
    }))

    builder.addCase(getOtherUser.request, state => ({
      ...state,
      loading: true,
    }))
    builder.addCase(getOtherUser.success, (state, { payload }) => ({
      ...state,
      currentUser: payload.user,
      loading: false,
    }))
    builder.addCase(getOtherUser.failure, (state, { payload }) => ({
      ...state,
      error: payload,
      loading: false,
    }))

    builder.addCase(getAllUserAction.request, state => ({
      ...state,
      loading: true,
    }))
    builder.addCase(getAllUserAction.success, (state, { payload }) => ({
      ...state,
      allUsers: payload.users,
      loading: false,
    }))
    builder.addCase(getAllUserAction.failure, (state, { payload }) => ({
      ...state,
      error: payload,
      loading: false,
      // token: null,
      // user: null,
    }))

    builder.addCase(getBestUserAction.request, state => ({
      ...state,
      loading: true,
    }))
    builder.addCase(getBestUserAction.success, (state, { payload }) => ({
      ...state,
      bestUsers: payload.users,
      loading: false,
    }))
    builder.addCase(getBestUserAction.failure, (state, { payload }) => ({
      ...state,
      error: payload,
      loading: false,
    }))

    builder.addCase(getEnumsAction.request, state => ({
      ...state,
      loading: true,
    }))
    builder.addCase(getEnumsAction.success, (state, { payload }) => ({
      ...state,
      enums: payload,
      loading: false,
    }))
    builder.addCase(getEnumsAction.failure, (state, { payload }) => ({
      ...state,
      error: payload,
      loading: false,
    }))

    builder.addCase(updateUserAction.request, state => ({
      ...state,
      loading: true,
    }))
    builder.addCase(updateUserAction.success, (state, { payload }) => ({
      ...state,
      user: payload.user,
      loading: false,
    }))
    builder.addCase(updateUserAction.failure, (state, { payload }) => ({
      ...state,
      error: payload,
      loading: false,
    }))

    builder.addCase(updateUserPasswordAction.request, state => ({
      ...state,
      loading: true,
    }))
    builder.addCase(updateUserPasswordAction.success, (state, { payload }) => ({
      ...state,
      loading: false,
    }))
    builder.addCase(updateUserPasswordAction.failure, (state, { payload }) => ({
      ...state,
      error: payload,
      loading: false,
    }))

    builder.addCase(initAppAction.failure, (state, { payload }) => ({
      ...state,
      error: payload,
      loading: false,
    }))
    builder.addCase(logoutAction, (state, { payload }) => ({
      ...state,
      user: null,
      token: null,
      error: null,
      loading: false,
    }))

    builder.addCase(clearOtherUser, (state, { payload }) => ({
      ...state,
      currentUser: null,
    }))

    //@ts-ignore

    builder.addCase(setStageAction, (state, { payload }) => ({
      ...state,
      //@ts-ignore
      stage: payload.stage,
      loading: false,
    }))
  },
)
