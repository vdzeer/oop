import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Divider, Footer, HeaderWrapper } from '../../components'
import { useTypedSelector } from '../../hooks'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import {
  addResponseOrderAction,
  clearCurrentOrder,
  deleteExecutorOrderAction,
  getOrderAction,
  selectExecutorOrderAction,
} from '../../store/orders'
import {
  Container,
  CreateBtn,
  DescriptionInput,
  DescriptionWrapper,
  FinishWrapper,
  Input,
  OptionsWrapper,
} from './styled'
import 'react-dropdown/style.css'
import { COLORS } from '../../assets'
import {
  CardWrapper,
  DescriptionContainer,
  Online,
  ProfileText,
} from '../Cabinet/styled'
import Rate from 'rc-rate'
import { Feed } from '../Home/styled'
import { useTranslation } from 'react-i18next'
import { useValidation } from '../../hooks/useValidation'
import axios from 'axios'
import { default_api } from '../../consts/config'

const UserPage: FC = () => {
  const dispatch = useDispatch()
  const { currentOrder } = useTypedSelector(state => state.orders)
  const { user, enums } = useTypedSelector(state => state.user)
  const [modalShown, setModalShown] = useState<boolean>(false)
  const { id } = useParams<{ id: string }>()

  const [form, setForm] = useState({
    description: '',
    budgetMin: '',
    budgetMax: '',
    timeMin: '',
    timeMax: '',
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

  const [isAlertOpen, toogleIsAlertOpen] = useState<boolean>(false)

  const schema = useMemo<any>(
    () => ({
      description: {
        condition: form.description.length >= 2,
        error: `Описание: Длина более 2 символов`,
      },
      budgetMin: {
        condition: +form.budgetMin >= 0,
        error: `Цена от: введите коректную цену`,
      },
    }),
    [form],
  )

  const { errors, validation } = useValidation(schema)

  const { t } = useTranslation()

  return (
    <div style={{ position: 'relative' }}>
      <Container>
        <HeaderWrapper />

        <Divider height={40} />

        <OptionsWrapper>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {!!currentOrder?.garant && (
              <p style={{ color: COLORS.green, marginRight: 30 }}>
                {t('garant')}
              </p>
            )}
            <span style={{ fontSize: 24 }}>{currentOrder?.title}</span>
          </div>
          <p style={{ color: COLORS.green }}>{currentOrder?.price ?? 0}$</p>
        </OptionsWrapper>

        <Divider height={40} />

        <CardWrapper
          style={{
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              width: '60%',
            }}
          >
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 75,
                  backgroundColor: '#888',
                  color: '#fff',
                  fontSize: 60,
                  lineHeight: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {currentOrder?.customer?.name &&
                  currentOrder.customer.name
                    .split(' ')
                    .map((el: any) => el[0])
                    .join('')}
              </div>

              <Online isOnline={!!currentOrder?.customer?.online} />
            </div>
            <Divider width={50} />
            <div>
              <ProfileText
                style={{ fontSize: 18, color: 'black', fontWeight: 700 }}
              >
                {currentOrder?.customer?.name}
              </ProfileText>
              <Divider height={10} />
              <ProfileText>
                {t('intime')}{' '}
                {currentOrder?.customer?.inWorkStatus ? t('work') : t('free')}
              </ProfileText>
              <Divider height={1} />

              <ProfileText>
                {
                  //@ts-ignore
                  new Date(
                    currentOrder?.customer?.createdAt,
                  ).toLocaleDateString()
                }
              </ProfileText>
              <Divider height={1} />

              {/* <ProfileText>
                {user ? currentOrder?.customer?.phone : ''}
              </ProfileText>
              <Divider height={1} />
              <ProfileText>
                {user ? currentOrder?.customer?.email : ''}
              </ProfileText> */}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}
          >
            <ProfileText>
              {
                //@ts-ignore
                new Date(currentOrder?.createdAt).toLocaleDateString()
              }
            </ProfileText>
            <div style={{ display: 'flex' }}>
              <Rate
                count={5}
                //@ts-ignore
                value={currentOrder?.customer?.rate ?? 0}
                disabled
                allowHalf
                style={{ fontSize: 24 }}
              />
              <Divider width={15} />
              <Feed style={{ fontFamily: 'Montserrat', fontWeight: 500 }}>
                {currentOrder?.customer?.feedbacksLength ?? 0} {t('feedbacks3')}
              </Feed>
            </div>
          </div>
        </CardWrapper>
        {!!currentOrder?.description && (
          <DescriptionContainer
            style={{
              backgroundColor: 'white',
              width: '90%',
              borderBottomLeftRadius: 25,

              borderBottomRightRadius: 25,

              paddingTop: 10,
              paddingBottom: 20,
              paddingLeft: 20,
              paddingRight: 20,

              margin: 'auto',
            }}
          >
            <p
              style={{
                lineHeight: 0,
                fontSize: 18,
                fontWeight: 600,
                fontFamily: 'Montserrat',
              }}
            >
              {t('task')}:
            </p>
            <Divider height={1} />
            <p
              style={{
                fontSize: 14,
                fontFamily: 'Montserrat',
                fontWeight: 500,
              }}
            >
              {currentOrder.description}
            </p>
          </DescriptionContainer>
        )}
        <FinishWrapper>
          <Divider width={105} />
          <p style={{ fontSize: 16 }}>
            {/* eslint-disable-next-line array-callback-return*/}
            {currentOrder?.responses?.reduce((acc: number, el: any) => {
              if (!el.declined) return acc + 1
            }, 0) || 0}{' '}
            {t('customersfeed')}
          </p>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            {user?._id !== currentOrder?.customer._id &&
              currentOrder?.responses?.findIndex(
                (el: any) => el.executor._id === user?._id,
              ) === -1 && (
                <CreateBtn
                  onClick={e => {
                    if (user?.role === 'customer') {
                      e.preventDefault()
                      e.stopPropagation()
                      alert('Для отклика вы должны быть исполнителем')
                    } else if (!user) {
                      e.preventDefault()
                      e.stopPropagation()
                      alert(
                        'Для отклика вы должны быть авторизованы как исполнитель',
                      )
                    } else {
                      setModalShown(true)
                    }
                  }}
                >
                  {t('answer')}
                </CreateBtn>
              )}
          </div>
        </FinishWrapper>

        {modalShown && (
          <div
            onClick={() => setModalShown(false)}
            style={{
              top: 0,
              left: 0,
              right: 0,
              height: '100vh',
              position: 'fixed',
              backgroundColor: '#00000040',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <DescriptionWrapper
              onClick={e => {
                e.stopPropagation()
              }}
            >
              <p style={{ fontWeight: 'bold', fontSize: 20 }}>{t('predl')}</p>
              <Divider height={10} />
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <p style={{ fontSize: 16, flexBasis: '25%' }}>{t('budget')}:</p>
                <div style={{ display: 'flex', flexBasis: '70%' }}>
                  <p>{t('from')}</p>
                  <Input
                    type="number"
                    min="0"
                    value={form.budgetMin}
                    placeholder={t('from')}
                    onChange={v => inputHandler('budgetMin', v.target.value)}
                  />
                  <p>{t('to')}</p>
                  <Input
                    type="number"
                    min="0"
                    value={form.budgetMax}
                    placeholder={t('to')}
                    onChange={v => inputHandler('budgetMax', v.target.value)}
                  />
                  <p>$</p>
                </div>
              </div>
              <Divider height={10} />
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <p style={{ fontSize: 16, flexBasis: '25%' }}>Сроки:</p>
                <div style={{ display: 'flex', flexBasis: '70%' }}>
                  <p>{t('from')}</p>
                  <Input
                    type="number"
                    min="0"
                    value={form.timeMin}
                    placeholder={t('from')}
                    onChange={v => inputHandler('timeMin', v.target.value)}
                  />
                  <p>{t('to')}</p>
                  <Input
                    type="number"
                    min="0"
                    value={form.timeMax}
                    placeholder={t('to')}
                    onChange={v => inputHandler('timeMax', v.target.value)}
                  />
                  <p>{t('times')}</p>
                </div>
              </div>
              <Divider height={10} />
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <p style={{ fontSize: 16, flexBasis: '25%' }}>
                  {t('textofdeal')}:
                </p>
                <div style={{ display: 'flex', flexBasis: '75%' }}>
                  <DescriptionInput
                    value={form.description}
                    placeholder={`${t('textofdeal')}...`}
                    onChange={v => inputHandler('description', v.target.value)}
                  />
                </div>
              </div>
              <Divider height={15} />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p style={{ fontSize: 16, color: '#c00' }}>
                  Повiдомлення буде вiдправлено на пошту замовника!
                </p>
                <CreateBtn
                  onClick={() => {
                    try {
                      validation()
                      errors.length && toogleIsAlertOpen(true)

                      if (!errors.length) {
                        setModalShown(false)
                        dispatch(
                          addResponseOrderAction.request({
                            id: currentOrder._id,
                            ...form,
                          }),
                        )
                        dispatch(getOrderAction.request({ id }))

                        alert(t('success_order'))
                      }
                    } catch (error) {
                      console.log(error)
                    }
                  }}
                  style={{ width: 130 }}
                >
                  {t('send')}
                </CreateBtn>
              </div>
            </DescriptionWrapper>
          </div>
        )}

        {!!currentOrder?.responses?.length &&
          user?._id === currentOrder?.customer?._id &&
          currentOrder.responses.map(
            (el: any) =>
              !el.declined && (
                <OptionsWrapper
                  style={{
                    alignItems: 'flex-start',
                    marginBottom: 20,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      padding: 20,
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <div style={{ position: 'relative' }}>
                        <div
                          style={{
                            width: 120,
                            height: 120,
                            borderRadius: 75,
                            backgroundColor: '#888',
                            color: '#fff',
                            fontSize: 50,
                            lineHeight: 0,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 'auto',
                          }}
                        >
                          {el?.executor?.name &&
                            el.executor.name
                              .split(' ')
                              .map((el: any) => el[0])
                              .join('')}
                        </div>

                        <Online isOnline={!!el?.executor?.online} />
                      </div>
                      <Rate
                        count={5}
                        //@ts-ignore
                        value={el?.executor?.rate ?? 0}
                        disabled
                        allowHalf
                        style={{ fontSize: 24, margin: 'auto' }}
                      />
                    </div>
                    <Divider width={30} />
                    <div>
                      <ProfileText
                        style={{
                          fontSize: 18,
                          color: 'black',
                          fontWeight: 700,
                        }}
                      >
                        {el?.executor?.name}
                      </ProfileText>

                      <Divider height={10} />

                      <ProfileText
                        style={{
                          fontSize: 18,
                          color: 'black',
                          fontWeight: 700,
                        }}
                      >
                        {el?.premiumStatus &&
                          el.premiumStatus === '1' &&
                          'Новачок'}
                        {el?.premiumStatus &&
                          el.premiumStatus === '2' &&
                          'Досвiдчений'}
                        {el?.premiumStatus &&
                          el.premiumStatus === '3' &&
                          'Профi'}
                      </ProfileText>

                      <Divider height={10} />
                      <ProfileText style={{ fontSize: 16, color: '#009' }}>
                        {t('predl')}
                      </ProfileText>
                      <Divider height={1} />

                      <ProfileText>{el?.description}</ProfileText>
                      <Divider height={1} />
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      padding: 20,
                    }}
                  >
                    <p
                      style={{
                        color: COLORS.green,
                        margin: 0,
                        fontWeight: 'bold',
                        marginRight: 20,
                      }}
                    >
                      {currentOrder?.price ?? 0}$
                    </p>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                      }}
                    >
                      <CreateBtn
                        onClick={() => {
                          setModalShown(false)
                          new Promise(async res => {
                            const data: { data: any } = await axios.get(
                              `${default_api.user}user/${el.executor?._id}`,
                            )
                            if (data) {
                              res(data.data.data)
                            }
                          }).then((data: any) => {
                            console.log(data)
                            dispatch(
                              selectExecutorOrderAction.request({
                                id: currentOrder._id,
                                userId: el?.executor?._id,
                              }),
                            )

                            // if (
                            //   +currentOrder.price <=
                            //   +enums.maxPrice[data?.premiumStatus ?? 'user']
                            // ) {

                            // } else {
                            //   alert(
                            //     'Внимание! у текущего фрилансера отсутствует соответствующий статус для оформление сделки. Фрилансеру необходимо связаться с Администрацией сервиса',
                            //   )
                            // }
                          })
                        }}
                        style={{ width: 130, textAlign: 'center' }}
                      >
                        {t('accept')}
                      </CreateBtn>

                      <Divider height={30} />
                      <CreateBtn
                        onClick={() => {
                          setModalShown(false)
                          dispatch(
                            deleteExecutorOrderAction.request({
                              id: currentOrder._id,
                              userId: el?.executor?._id,
                            }),
                          )
                          dispatch(getOrderAction.request({ id }))
                        }}
                        style={{
                          width: 130,
                          backgroundColor: 'red',
                          textAlign: 'center',
                        }}
                      >
                        {t('discard')}
                      </CreateBtn>
                    </div>
                  </div>
                </OptionsWrapper>
              ),
          )}

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
    </div>
  )
}

export default UserPage
