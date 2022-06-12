import React, { FC } from 'react'
import { Divider } from '../Divider'
import Header from './Header'
import { StyledWrapper } from './styled'

const HeaderWrapper: FC = ({ children }) => {
  return (
    <StyledWrapper>
      <Header />

      <Divider height={110} />

      {children}
    </StyledWrapper>
  )
}

export default HeaderWrapper
