import React, { FC } from 'react'
import { Divider } from '../Divider'
import Header from './Header'
import { StyledWrapper } from './styled'

const HeaderWrapper: FC = ({ children }) => {
  return (
    <StyledWrapper>
      <Header />

      {children}
    </StyledWrapper>
  )
}

export default HeaderWrapper
