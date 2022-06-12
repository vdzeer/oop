import { createReducer } from '@reduxjs/toolkit'
import { TInitialState } from './types'

import {
  getAllOrdersAction,
  getOrderAction,
  createOrderAction,
  changeActiveOrderAction,
  clearCurrentOrder,
} from './actions'

const InitialState: TInitialState = {
  orders: null,
  currentOrder: null,
  error: null,
  loading: false,
}

export const ordersReducer = createReducer<TInitialState>(
  InitialState,
  builder => {
    builder.addCase(getAllOrdersAction.request, state => ({
      ...state,
      loading: true,
    }))
    builder.addCase(getAllOrdersAction.success, (state, { payload }) => ({
      ...state,
      orders: payload.orders,
      loading: false,
    }))
    builder.addCase(getAllOrdersAction.failure, (state, { payload }) => ({
      ...state,
      error: payload,
      loading: false,
    }))

    builder.addCase(getOrderAction.request, state => ({
      ...state,
      loading: true,
    }))
    builder.addCase(getOrderAction.success, (state, { payload }) => ({
      ...state,
      currentOrder: payload.currentOrder,
      loading: false,
    }))
    builder.addCase(getOrderAction.failure, (state, { payload }) => ({
      ...state,
      error: payload,
      loading: false,
    }))

    builder.addCase(createOrderAction.request, state => ({
      ...state,
      loading: true,
    }))
    builder.addCase(createOrderAction.success, (state, { payload }) => ({
      ...state,
      currentOrder: payload.currentOrder,
      loading: false,
    }))
    builder.addCase(createOrderAction.failure, (state, { payload }) => ({
      ...state,
      error: payload,
      loading: false,
    }))

    builder.addCase(changeActiveOrderAction.request, state => ({
      ...state,
      loading: true,
    }))
    builder.addCase(changeActiveOrderAction.success, (state, { payload }) => ({
      ...state,
      loading: false,
    }))
    builder.addCase(changeActiveOrderAction.failure, (state, { payload }) => ({
      ...state,
      error: payload,
      loading: false,
    }))

    builder.addCase(clearCurrentOrder, (state, { payload }) => ({
      ...state,
      currentOrder: null,
    }))
  },
)
