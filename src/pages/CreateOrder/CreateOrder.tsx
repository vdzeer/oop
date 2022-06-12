import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Divider, Footer, HeaderWrapper } from '../../components'
import { useTypedSelector } from '../../hooks'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import {
  clearCurrentOrder,
  createOrderAction,
  getOrderAction,
  updateOrderAction,
} from '../../store/orders'
import {
  CancelBtn,
  Container,
  CreateBtn,
  DescriptionInput,
  DescriptionWrapper,
  FinishWrapper,
  OptionsWrapper,
  PriceInput,
  PriceWrapper,
  TitleInput,
  TitleWrapper,
  Wrapper,
} from './styled'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { StyledRadio } from '../Auth/Registration/styled'
import { COLORS } from '../../assets'
import Switch from 'react-switch'
import { useTranslation } from 'react-i18next'
import { useValidation } from '../../hooks/useValidation'

const UserPage: FC = () => {
  const dispatch = useDispatch()
  const { currentOrder } = useTypedSelector(state => state.orders)

  const { id } = useParams<{ id: string }>()

  const { enums } = useTypedSelector(state => state.user)

  const options2 =
    enums &&
    enums?.categories &&
    enums?.categories?.length &&
    enums.categories.map((el: string) => {
      return {
        value: el,
        label: el,
      }
    })

  const [form, setForm] = useState({
    title: '',
    description: '',
    garant: false,
    premium: false,
    price: 0,
    country: '',
    city: '',
    spec: '',
  })

  const inputHandler = useCallback((field: string, value: string | boolean) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }, [])

  useEffect(() => {
    id && dispatch(getOrderAction.request({ id }))
    return () => {
      dispatch(clearCurrentOrder())
    }
  }, [dispatch, id])

  useEffect(() => {
    id &&
      setForm({
        title: currentOrder?.title ?? '',
        description: currentOrder?.description ?? '',
        garant: currentOrder?.garant ?? false,
        premium: currentOrder?.premium ?? false,
        price: currentOrder?.price ?? 0,
        country: currentOrder?.country ?? '',
        city: currentOrder?.city ?? '',
        spec: currentOrder?.spec ?? '',
      })
  }, [currentOrder, id])

  const onPressSave = () => {
    try {
      validation()
      errors.length && toogleIsAlertOpen(true)
      if (!errors.length) {
        id
          ? dispatch(updateOrderAction.request({ ...form }))
          : dispatch(createOrderAction.request({ ...form }))
      }
    } catch (error) {
      console.log(error)
    }
  }

  const [isAlertOpen, toogleIsAlertOpen] = useState<boolean>(false)

  const schema = useMemo<any>(
    () => ({
      title: {
        condition: form.title.length >= 4 && form.title.length <= 70,
        error: `Логин:Длина более 4 и менее 70 символов`,
      },
      description: {
        condition:
          form.description.length >= 2 && form.description.length <= 300,
        error: `Описание: Длина более 2 и менее 300 символов`,
      },
      price: {
        condition: form.price >= 0 && form.price < 999999,
        error: `Цена: Введите коректную цену`,
      },
      country: {
        condition: form.country && form.country.length <= 20,
        error: `Страна: Введите коректную страну`,
      },
      city: {
        condition: form.city && form.city.length <= 20,
        error: `Город: Выберите коректный город`,
      },
      spec: {
        condition: form.spec,
        error: `Специализация: Выберите специализацию`,
      },
    }),
    [form],
  )

  const { errors, validation } = useValidation(schema)

  const { t } = useTranslation()

  return (
    <>
      <Container>
        <HeaderWrapper />

        <Divider height={50} />

        <p
          style={{
            textTransform: 'uppercase',
            fontSize: 30,
            color: '#999',
            textAlign: 'center',
          }}
        >
          {t('settingsOrder')}
        </p>

        <Divider height={40} />

        <Wrapper>
          <TitleWrapper>
            <TitleInput
              value={form.title}
              placeholder={`${t('title')}...`}
              onChange={v => inputHandler('title', v.target.value)}
            />
          </TitleWrapper>
          <PriceWrapper>
            {t('sum')}{' '}
            <PriceInput
              type="number"
              value={form.price}
              placeholder="---"
              onChange={v => inputHandler('price', v.target.value)}
            />
            $
          </PriceWrapper>
        </Wrapper>
        <Divider height={30} />

        <DescriptionWrapper>
          <DescriptionInput
            value={form.description}
            placeholder={`${t('textOrder')}...`}
            onChange={v => inputHandler('description', v.target.value)}
          />
        </DescriptionWrapper>

        <Divider height={30} />

        <OptionsWrapper>
          <div
            style={{ paddingLeft: 20, display: 'flex', alignItems: 'center' }}
          >
            {t('forAll')}
            <Divider width={20} />
            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onHandleColor="#f00"
              offHandleColor="#f00"
              onColor={COLORS.background}
              offColor={COLORS.background}
              onChange={(v: any) => inputHandler('premium', v)}
              checked={form.premium}
            />
            <Divider width={20} />
            <span style={{ color: 'red' }}>Професiонал/Новачок</span>
          </div>

          <div
            style={{ display: 'flex', alignItems: 'center', maxWidth: '30%' }}
          >
            {t('pickCountry')}
            <PriceInput
              value={form.country}
              placeholder={t('country')}
              onChange={v => inputHandler('country', v.target.value)}
            />
            <Divider width={70} />
            <PriceInput
              value={form.city}
              placeholder={t('city')}
              onChange={v => inputHandler('city', v.target.value)}
            />
          </div>
          <div
            style={{ display: 'flex', alignItems: 'center', paddingRight: 20 }}
          >
            {t('spec')}
            <Divider width={70} />
            <Dropdown
              options={options2}
              className="dropdown"
              value={form.spec}
              menuClassName="dropdownMenu"
              controlClassName="dropdownControl"
              onChange={v => inputHandler('spec', v.value as any)}
              placeholder={t('spec')}
            />
          </div>
        </OptionsWrapper>

        <FinishWrapper>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: 20,
              marginBottom: 40,
            }}
          >
            <StyledRadio
              type="checkbox"
              checked={form.garant}
              onChange={value => {
                setForm(prev => ({ ...prev, garant: !prev.garant }))
              }}
            />

            <Divider width={35} />
            <p style={{ color: COLORS.green }}>{t('garant')}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <CancelBtn to="/">Отмена</CancelBtn>
            <Divider width={70} />

            <CreateBtn onClick={() => onPressSave()}>{t('save')}</CreateBtn>
          </div>
        </FinishWrapper>
        <Snackbar
          open={isAlertOpen}
          autoHideDuration={10000}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          onClose={() => toogleIsAlertOpen(false)}
        >
          <Alert severity="error">
            {errors.map(error => (
              <p key={`error-item-${error}`}>- {error}</p>
            ))}
          </Alert>
        </Snackbar>
      </Container>
      <Footer />
    </>
  )
}

export default UserPage
