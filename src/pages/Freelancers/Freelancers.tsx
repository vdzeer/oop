import Rate from 'rc-rate'
import React, { FC, useCallback, useEffect, useState } from 'react'
import { Divider, Footer, HeaderWrapper } from '../../components'
import { usePagination, useTypedSelector } from '../../hooks'
import { OptionsWrapper } from '../Order/styled'
import Dropdown from 'react-dropdown'
import Switch from 'react-switch'
import 'react-dropdown/style.css'
import {
  Address,
  Container,
  Feed,
  ImageStyled,
  ImageWrapper,
  InfoWrapper,
  Name,
  Online,
  Spec,
  Status1,
  Status2,
  Status3,
  StatusInWork,
  TextWrapper,
  UserContainer,
  UsersBody,
  Wrapper,
} from './styled'
import { COLORS } from '../../assets'
import { useDispatch } from 'react-redux'
import { getAllUserAction } from '../../store'
import { useTranslation } from 'react-i18next'
import {
  PaginationContainer,
  PaginationButton,
  PaginationText,
} from '../Home/styled'

const FreelancersPage: FC = () => {
  const dispatch = useDispatch()

  return (
    <>
      <Container>
        <HeaderWrapper />
        <Divider height={40} />
        <div style={{ paddingLeft: 20 }}>ну тут завтра модули выгрузим</div>
      </Container>
      <Footer />
    </>
  )
}

export default FreelancersPage
