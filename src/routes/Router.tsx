import React, { FC, useEffect } from 'react'
import { HashRouter } from 'react-router-dom'
import Authorized from './Authorized'
import UnAuthorized from './UnAuthorized'

const Router: FC = () => {
  return (
    <HashRouter basename='/'>
      {false ? <Authorized /> : <UnAuthorized />}
    </HashRouter>
  )
}

export default Router
