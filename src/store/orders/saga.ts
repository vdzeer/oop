import { takeLatest, select, put } from '@redux-saga/core/effects'
import axios from 'axios'
import { default_api } from '../../consts/config'
import { getUserAction, getUserSelector } from '../user'

import {
  getAllOrdersAction,
  getOrderAction,
  updateOrderAction,
  createOrderAction,
  selectExecutorOrderAction,
  addResponseOrderAction,
  changeActiveOrderAction,
  deleteOrderAction,
  deleteExecutorOrderAction,
  declineOrderAction,
  confirmOrderAction,
} from './actions'

export function* verifyTokenWorker() {
  const { token }: ReturnType<typeof getUserSelector> = yield select(
    getUserSelector,
  )

  if (token) return token
}

function* getAllOrdersWorker({ payload }: any) {
  try {
    const data: { data: any } = yield axios.get(
      `${default_api.orders}getAll?${
        payload?.min ? `min=${payload.min}&` : ''
      }${payload?.max ? `max=${payload.max}&` : ''}${
        payload?.garant ? `garant=${payload.garant}&` : ''
      }${
        payload?.spec && payload?.spec !== 'all' ? `spec=${payload.spec}&` : ''
      }premium=${payload?.premium ? 'true' : ''}`,
    )

    yield put(getAllOrdersAction.success({ orders: data.data.data }))
  } catch (e: any) {
    yield put(getAllOrdersAction.failure(e))
  }
}

function* getOrderWorker({
  payload,
}: ReturnType<typeof getOrderAction['request']>) {
  try {
    const data: { data: any } = yield axios.get(
      `${default_api.orders}${payload.id}`,
    )

    yield put(getOrderAction.success({ currentOrder: data.data.data }))
  } catch (e: any) {
    yield put(getOrderAction.failure(e))
  }
}

function* selectExecutorOrderWorker({ payload }: any) {
  try {
    const { token } = yield select(state => state.user)

    yield axios.post(`${default_api.orders}select-executor`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    yield put(selectExecutorOrderAction.success({}))
    yield put(getOrderAction.request({ id: payload.id }))
  } catch (e: any) {
    yield put(selectExecutorOrderAction.failure(e))
  }
}

function* deleteExecutorOrderWorker({ payload }: any) {
  try {
    const { token } = yield select(state => state.user)

    yield axios.post(`${default_api.orders}decline-executor`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    yield put(deleteExecutorOrderAction.success({}))
  } catch (e: any) {
    yield put(deleteExecutorOrderAction.failure(e))
  }
}

function* declineOrderWorker({ payload }: any) {
  try {
    const { token } = yield select(state => state.user)

    yield axios.post(`${default_api.orders}decline-order`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    yield put(getUserAction.request({}))
    yield put(declineOrderAction.success({}))
  } catch (e: any) {
    yield put(declineOrderAction.failure(e))
  }
}

function* confirmOrderWorker({ payload }: any) {
  try {
    const { token } = yield select(state => state.user)

    yield axios.post(`${default_api.orders}confirm-order`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    yield put(getUserAction.request({}))
    yield put(confirmOrderAction.success({}))
  } catch (e: any) {
    yield put(confirmOrderAction.failure(e))
  }
}

function* deleteOrderWorker({
  payload,
}: ReturnType<typeof deleteOrderAction['request']>) {
  try {
    const { token } = yield select(state => state.user)

    const data: { data: any } = yield axios.post(
      `${default_api.orders}delete`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    if (data) {
      yield put(deleteOrderAction.success({}))
      yield put(getUserAction.request({}))
    }
  } catch (err) {
    yield put(deleteOrderAction.failure(err))
  }
}

function* createOrderWorker({
  payload,
}: ReturnType<typeof createOrderAction['request']>) {
  try {
    const { token } = yield select(state => state.user)

    const data: { data: any } = yield axios.post(
      `${default_api.orders}create`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    if (data) {
      yield put(
        createOrderAction.success({
          currentOrder: data.data.data,
        }),
      )
      window.location.assign('https://freelhunter.com/#/')
    }
  } catch (err) {
    yield put(createOrderAction.failure(err))
  }
}

function* updateOrderWorker({
  payload,
}: ReturnType<typeof updateOrderAction['request']>) {
  try {
    const { token } = yield select(state => state.user)

    const data: { data: any } = yield axios.post(
      `${default_api.orders}update`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    if (data) {
      yield put(
        updateOrderAction.success({
          data: data.data.data,
        }),
      )
      window.location.assign('https://freelhunter.com/#/')
    }
  } catch (err) {
    yield put(updateOrderAction.failure(err))
  }
}

function* addResponseOrderWorker({ payload }: any) {
  try {
    const { token } = yield select(state => state.user)

    yield axios.post(`${default_api.orders}add-response`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    yield put(addResponseOrderAction.success({}))
  } catch (e: any) {
    yield put(addResponseOrderAction.failure(e))
  }
}

function* changeActiveOrderWorker({ payload }: any) {
  try {
    const { token } = yield select(state => state.user)

    yield axios.post(`${default_api.orders}change-active`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    yield put(changeActiveOrderAction.success({}))
    yield put(getUserAction.request({}))
  } catch (e: any) {
    yield put(changeActiveOrderAction.failure(e))
  }
}

export function* ordersWatcher() {
  yield takeLatest(getAllOrdersAction.request, getAllOrdersWorker)
  yield takeLatest(deleteOrderAction.request, deleteOrderWorker)
  yield takeLatest(selectExecutorOrderAction.request, selectExecutorOrderWorker)
  yield takeLatest(addResponseOrderAction.request, addResponseOrderWorker)
  yield takeLatest(changeActiveOrderAction.request, changeActiveOrderWorker)
  yield takeLatest(getOrderAction.request, getOrderWorker)
  yield takeLatest(updateOrderAction.request, updateOrderWorker)
  yield takeLatest(createOrderAction.request, createOrderWorker)
  yield takeLatest(deleteExecutorOrderAction.request, deleteExecutorOrderWorker)
  yield takeLatest(declineOrderAction.request, declineOrderWorker)
  yield takeLatest(confirmOrderAction.request, confirmOrderWorker)
}
