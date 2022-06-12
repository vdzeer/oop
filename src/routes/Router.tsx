import React, { FC, useEffect } from 'react'
import { HashRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { initAppAction, logoutAction } from '../store'
import Authorized from './Authorized'
import UnAuthorized from './UnAuthorized'
import { useTypedSelector } from '../hooks'

const Router: FC = () => {
  const dispatch = useDispatch()
  const { token, user } = useTypedSelector(state => state.user)

  useEffect(() => {
    setTimeout(() => {
      dispatch(initAppAction.request())
    }, 1000)
  }, [dispatch])

  useEffect(() => {
    if (!!user?.blocked) {
      dispatch(logoutAction())
      alert('Вы были заблокированы администрацией сайта!')
    }
  }, [user, dispatch])

  return (
    <HashRouter basename="/">
      {token ? <Authorized /> : <UnAuthorized />}
    </HashRouter>
  )
}

export default Router
