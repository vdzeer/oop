import { createAction } from '@reduxjs/toolkit'
import { createActionTypes, createApiActions } from 'actions-util'

export const getAllOrdersAction = createApiActions<{}>(
  createActionTypes('ORDER/GET_ALL_ORDERS'),
)

export const getOrderAction = createApiActions<{ id: string }>(
  createActionTypes('ORDER/GET_ORDER'),
)

export const updateOrderAction = createApiActions<any>(
  createActionTypes('ORDER/UPDATE_ORDER'),
)

export const createOrderAction = createApiActions<any>(
  createActionTypes('ORDER/CREATE_ORDER'),
)

export const selectExecutorOrderAction = createApiActions<any>(
  createActionTypes('ORDER/SELECT_EXECUTOR'),
)

export const declineOrderAction = createApiActions<any>(
  createActionTypes('ORDER/DECLINE'),
)

export const confirmOrderAction = createApiActions<any>(
  createActionTypes('ORDER/CONFIRM'),
)

export const deleteExecutorOrderAction = createApiActions<any>(
  createActionTypes('ORDER/DELETE_EXECUTOR'),
)

export const addResponseOrderAction = createApiActions<any>(
  createActionTypes('ORDER/ADD_RESPONSE'),
)

export const changeActiveOrderAction = createApiActions<any>(
  createActionTypes('ORDER/CHANGE_ACTIVE'),
)

export const deleteOrderAction = createApiActions<any>(
  createActionTypes('ORDER/DELETE'),
)

export const clearCurrentOrder = createAction('ORDER/CLEAR_CURRENT')
