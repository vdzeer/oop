import React, { FC, useCallback, useEffect, useState } from 'react'
import { Divider, Footer, HeaderWrapper } from '../../components'
import {
  Address,
  Container,
  Deal,
  Feed,
  HeaderText,
  ImageStyled,
  ImageWrapper,
  InfoWrapper,
  Input,
  Name,
  Online,
  PaginationButton,
  PaginationContainer,
  PaginationText,
  Spec,
  Status1,
  Status2,
  Status3,
  StatusInWork,
  StyledRadio,
  TextWrapper,
  UserContainer,
} from './styled'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Rate from 'rc-rate'
import 'rc-rate/assets/index.css'

import './styles.css'
import { COLORS } from '../../assets'
import { Link } from 'react-router-dom'
import Dropdown from 'react-dropdown'
import Switch from 'react-switch'
import 'react-dropdown/style.css'

const HomePage: FC = () => {
  return (
    <>
      <Container>
        <HeaderWrapper></HeaderWrapper>

        <Divider height={150} />
        <div style={{ paddingLeft: 20 }}>тут у нас главная</div>
      </Container>
      <Divider height={50} />
    </>
  )
}

export default HomePage
