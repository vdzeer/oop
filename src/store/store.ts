import { applyMiddleware, createStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from './reducer'
import rootSaga from './saga'

const persistedReducer = persistReducer(
  {
    key: 'dev.freelance',
    storage,
    blacklist: [''],
  },
  rootReducer,
)

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware, logger]

// @ts-ignore
const store = createStore(
  // @ts-ignore
  persistedReducer,
  // @ts-ignore
  composeWithDevTools(applyMiddleware(...middlewares)),
)

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export default store
