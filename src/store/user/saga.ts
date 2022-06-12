import { takeLatest, select, put } from '@redux-saga/core/effects'
import axios from 'axios'
import { default_api } from '../../consts/config'

import {
  createFeedbackAction,
  createSupportAction,
  forgotPasswordAction,
  getAllUserAction,
  getBestUserAction,
  getEnumsAction,
  getOtherUser,
  getUserAction,
  initAppAction,
  loginUserAction,
  registerUserAction,
  sendCodeAction,
  updateUserAction,
  updateUserPasswordAction,
} from './actions'

import { getUserSelector } from './selectors'

export function* verifyTokenWorker() {
  const { token }: ReturnType<typeof getUserSelector> = yield select(
    getUserSelector,
  )

  if (token) return token
}

function* initAppWorker() {
  try {
    const { token }: ReturnType<typeof getUserSelector> = yield select(
      getUserSelector,
    )
    yield put(getBestUserAction.request({}))
    yield put(getEnumsAction.request({}))

    if (token) {
      yield put(getUserAction.request({}))
    }

    yield put(initAppAction.success())
  } catch (e: any) {
    yield put(initAppAction.failure(e))
  }
}

function* getUserWorker() {
  try {
    const { user }: ReturnType<typeof getUserSelector> = yield select(
      getUserSelector,
    )
    console.log(`${default_api.user}user/${user?._id}`)
    const data: { data: any } = yield axios.get(
      //@ts-ignore
      `${default_api.user}user/${user._id}`,
    )

    yield put(getUserAction.success({ user: data.data.data }))
  } catch (e: any) {
    yield put(getUserAction.failure(e))
  }
}

function* getOtherUserWorker({
  payload,
}: ReturnType<typeof getOtherUser['request']>) {
  try {
    //@ts-ignore

    console.log(`${default_api.user}user/${payload.id}`)
    const data: { data: any } = yield axios.get(
      //@ts-ignore
      `${default_api.user}user/${payload.id}`,
    )

    yield put(getOtherUser.success({ user: data.data.data }))
  } catch (e: any) {
    yield put(getOtherUser.failure(e))
  }
}

function* getAllUsersWorker({ payload }: any) {
  try {
    const { token } = yield select(state => state.user)

    const data: { data: any } = yield axios.get(
      //@ts-ignore
      `${default_api.user}user/getAll?${
        payload?.spec && payload?.spec !== 'all' ? `spec=${payload.spec}&` : ''
      }premium=${payload?.premium ? 'true' : ''}`,
      {
        headers: {
          Authorization: `Bearer ${token ?? ''}`,
        },
      },
    )

    yield put(getAllUserAction.success({ users: data.data.data }))
  } catch (e: any) {
    yield put(getAllUserAction.failure(e))
  }
}

function* getBestUsersWorker() {
  try {
    const data: { data: any } = yield axios.get(
      //@ts-ignore
      `${default_api.user}user/get-best`,
    )

    yield put(getBestUserAction.success({ users: data.data.data }))
  } catch (e: any) {
    yield put(getBestUserAction.failure(e))
  }
}

function* getEnumsWorker() {
  try {
    const data: { data: any } = yield axios.get(
      //@ts-ignore
      `${default_api.user}user/get-enums`,
    )

    yield put(getEnumsAction.success(data.data.data))
  } catch (e: any) {
    yield put(getEnumsAction.failure(e))
  }
}

function* loginUserWorker({
  payload,
}: ReturnType<typeof loginUserAction['request']>) {
  try {
    const data: { data: any } = yield axios.post(
      `${default_api.user}auth/login`,
      {
        ...payload,
      },
    )

    console.log('loginUserWorker', data)

    if (data) {
      yield put(
        loginUserAction.success({
          user: data.data.data,
          token: data.data.token,
        }),
      )
    }
  } catch (err) {
    //@ts-ignore

    console.log('loginUserWorkerHi', 'hi')
    //@ts-ignore
    window.alert(err.response.data.message)

    yield put(loginUserAction.failure(err))
  }
}

function* registerUserWorker({
  payload,
}: ReturnType<typeof registerUserAction['request']>) {
  try {
    const data: { data: any } = yield axios.post(
      `${default_api.user}auth/registration`,
      {
        ...payload,
      },
    )
    console.log('registerUserAction', data.data)

    if (data) {
      yield put(
        registerUserAction.success({
          user: data.data.data,
          token: data.data.token,
        }),
      )
    }
  } catch (err) {
    console.log('registerUserAction', err)
    //@ts-ignore
    window.alert(err.response.data.message)
    yield put(registerUserAction.failure(err))
  }
}

function* updateUserWorker({
  payload,
}: ReturnType<typeof updateUserAction['request']>) {
  try {
    const { token } = yield select(state => state.user)
    //@ts-ignore
    const data: { data: any } = yield axios.post(
      `${default_api.user}user/update`,
      payload,
      {
        headers: {
          'Content-Type': 'form-data',
          Authorization: `Bearer ${token}`,
        },
      },
    )
    //asdasd
    if (data) {
      yield put(
        updateUserAction.success({
          user: data.data.data,
          token: data.data.token,
        }),
      )
    }
  } catch (err) {
    console.log('updateUserAction', err)
    console.log('hi')

    //@ts-ignore
    yield put(updateUserAction.failure(err))
  }
}

function* updateUserPasswordWorker({
  payload,
}: ReturnType<typeof updateUserPasswordAction['request']>) {
  try {
    const { token } = yield select(state => state.user)

    const data: { data: any } = yield axios.post(
      `${default_api.user}user/update-password`,
      {
        ...payload,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    if (data) {
      yield put(updateUserPasswordAction.success({}))
    }
  } catch (err) {
    console.log('updateUserPasswordAction', err)
    yield put(updateUserPasswordAction.failure(err))
  }
}

function* createSupportWorker({
  payload,
}: ReturnType<typeof createSupportAction['request']>) {
  try {
    const data: { data: any } = yield axios.post(
      `${default_api.user}user/create-support`,
      {
        ...payload,
      },
    )

    if (data) {
      yield put(createSupportAction.success({}))
    }
  } catch (err) {
    //@ts-ignore
    yield put(createSupportAction.failure(err.response.data.message))
  }
}

function* forgotPasswordWorker({
  payload,
}: ReturnType<typeof forgotPasswordAction['request']>) {
  try {
    const data: { data: any } = yield axios.post(
      `${default_api.user}auth/reset-password`,
      {
        ...payload,
      },
    )

    console.log('forgotPassword', data)

    if (data) {
      yield put(forgotPasswordAction.success({}))
    }
  } catch (err) {
    //@ts-ignore
    yield put(forgotPasswordAction.failure(err.response.data.message))
  }
}

function* sendCodeWorker({
  payload,
}: ReturnType<typeof sendCodeAction['request']>) {
  try {
    const data: { data: any } = yield axios.post(
      `${default_api.user}auth/send-code`,
      {
        ...payload,
      },
    )

    if (data) {
      yield put(sendCodeAction.success({}))
    }
  } catch (err) {
    //@ts-ignore
    yield put(sendCodeAction.failure(err.response.data.message))
    //@ts-ignore

    window.alert(err.response.data.message)
  }
}

function* createFeedbackWorker({
  payload,
}: ReturnType<typeof createFeedbackAction['request']>) {
  try {
    const { token } = yield select(state => state.user)

    const data: { data: any } = yield axios.post(
      `${default_api.user}user/create-feedback`,
      {
        ...payload,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    if (data) {
      yield put(createFeedbackAction.success({}))
    }
  } catch (err) {
    //@ts-ignore
    yield put(createFeedbackAction.failure(err.response.data.message))
  }
}

export function* userWatcher() {
  yield takeLatest(initAppAction.request, initAppWorker)
  yield takeLatest(sendCodeAction.request, sendCodeWorker)
  yield takeLatest(forgotPasswordAction.request, forgotPasswordWorker)
  yield takeLatest(loginUserAction.request, loginUserWorker)
  yield takeLatest(createSupportAction.request, createSupportWorker)
  yield takeLatest(createFeedbackAction.request, createFeedbackWorker)
  yield takeLatest(registerUserAction.request, registerUserWorker)
  yield takeLatest(updateUserAction.request, updateUserWorker)
  yield takeLatest(updateUserPasswordAction.request, updateUserPasswordWorker)
  yield takeLatest(getUserAction.request, getUserWorker)
  yield takeLatest(getOtherUser.request, getOtherUserWorker)
  yield takeLatest(getAllUserAction.request, getAllUsersWorker)
  yield takeLatest(getBestUserAction.request, getBestUsersWorker)
  yield takeLatest(getEnumsAction.request, getEnumsWorker)
}
