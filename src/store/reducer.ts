import { combineReducers } from '@reduxjs/toolkit'
import { ordersReducer } from './orders'
import { userReducer } from './user'

export default combineReducers({
  user: userReducer,
  orders: ordersReducer,
})
