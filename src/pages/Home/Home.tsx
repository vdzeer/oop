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
import { useDispatch } from 'react-redux'
import { usePagination, useTypedSelector } from '../../hooks'
import { getAllOrdersAction } from '../../store/orders'
import { COLORS } from '../../assets'
import { Link } from 'react-router-dom'
import { CreateBtn, OptionsWrapper } from '../Order/styled'
import Dropdown from 'react-dropdown'
import Switch from 'react-switch'
import 'react-dropdown/style.css'
import { useTranslation } from 'react-i18next'
import { getUserAction } from '../../store'

const HomePage: FC = () => {
  const dispatch = useDispatch()

  const { orders } = useTypedSelector((store) => store.orders)
  const { bestUsers, enums, user } = useTypedSelector((store) => store.user)

  const categories =
    enums && enums?.categories && enums?.categories?.length
      ? enums.categories?.map((el: string) => {
          return {
            value: el,
            label: el,
          }
        })
      : []

  const options2 = [{ value: 'all', label: 'Все' }, ...categories]

  const [form, setForm] = useState({
    premium: false,
    garant: false,
    min: undefined,
    max: undefined,
    spec: '',
  })

  const inputHandler = useCallback((field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }, [])

  useEffect(() => {
    dispatch(getAllOrdersAction.request(form))
    dispatch(getUserAction.request({}))
  }, [dispatch, form])

  const { t } = useTranslation()

  const { isEnd, list, page, nextPage, previousPage } = usePagination({
    initialPage: 1,
    initialPerPage: 8,
    data: orders ?? [],
  })

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
