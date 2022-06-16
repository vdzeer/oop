import i18next from 'i18next'
import React, { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Assets, COLORS } from '../../assets'
import i18n from '../../i18n'
import { Divider } from '../Divider'
import {
  DealBtn,
  LoginBtn,
  Logo,
  StyledContainer,
  StyledLink,
  Wrapper,
  PopText,
  ValueText,
  TextWrapper,
  Online,
} from './styled'

const Header: FC = () => {
  const [showPopUp, setShowPopUp] = useState(false)

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  const { t } = useTranslation()

  return (
    <StyledContainer>
      <Wrapper>
        {/* <StyledLink to='/'>
          <div>OOП</div>
        </StyledLink> */}

        {/* <Divider width={120} /> */}

        <StyledLink to='/modules'>МОДУЛI</StyledLink>

        <Divider width={100} />

        <StyledLink to='/about'>ПРО НАС</StyledLink>
      </Wrapper>
    </StyledContainer>
  )
}

export default Header
