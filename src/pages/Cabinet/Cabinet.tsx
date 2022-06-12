import Rate from 'rc-rate'
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import { COLORS } from '../../assets'
import { Divider, Footer, HeaderWrapper } from '../../components'
import { useTypedSelector } from '../../hooks'
import { useValidation } from '../../hooks/useValidation'
import {
  createFeedbackAction,
  getUserAction,
  setStageAction,
} from '../../store'
import {
  changeActiveOrderAction,
  confirmOrderAction,
  declineOrderAction,
  deleteOrderAction,
} from '../../store/orders'
import { Feed } from '../Home/styled'
import {
  CreateBtn,
  DescriptionInput,
  DescriptionWrapper,
  Input,
} from '../Order/styled'
import {
  CabinetItem,
  CardWrapper,
  Container,
  CreateOrder,
  Deal,
  DescriptionContainer,
  EditButton,
  Online,
  Order,
  ProfileText,
  Wrapper,
} from './styled'

const CabinetPage: FC = () => {
  const dispatch = useDispatch()
  const { stage, user } = useTypedSelector(state => state.user)
  const [isAlertOpen, toogleIsAlertOpen] = useState<boolean>(false)
  const [modalShown, setModalShown] = useState<boolean>(false)
  const [userId, setUserId] = useState<string>('')

  const [form, setForm] = useState({
    rate: '',
    description: '',
  })

  console.log(userId)

  const inputHandler = useCallback((field: string, value: string | boolean) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }, [])

  const schema = useMemo<any>(
    () => ({
      rate: {
        condition: +form.rate > 0 && +form.rate <= 5,
        error: `Оцiнка: Введiть оцiнку вiд 1 до 5`,
      },
      description: {
        condition:
          form.description.length >= 2 && form.description.length <= 70,
        error: `Опис: Довжина бiльше 2 и меньше 70 символiв`,
      },
    }),
    [form],
  )

  const { errors, validation } = useValidation(schema)

  useEffect(() => {
    dispatch(getUserAction.request({}))
  }, [dispatch])

  const { t } = useTranslation()

  return (
    <>
      <Container>
        <HeaderWrapper></HeaderWrapper>
        <div
          style={{
            width: '90%',
            display: 'flex',
            justifyContent: 'space-around',
            margin: 'auto',
          }}
        >
          <CabinetItem
            active={stage === 'profile'}
            onClick={() => {
              //@ts-ignore
              dispatch(setStageAction({ stage: 'profile' }))
            }}
          >
            <p>{t('profile2')}</p>
          </CabinetItem>
          {user?.role === 'customer' && (
            <CabinetItem
              active={stage === 'orders'}
              onClick={() => {
                //@ts-ignore
                dispatch(setStageAction({ stage: 'orders' }))
              }}
            >
              <p>{t('orders2')}</p>
            </CabinetItem>
          )}
          {user?.role === 'worker' && (
            <CabinetItem
              active={stage === 'requests'}
              onClick={() => {
                //@ts-ignore
                dispatch(setStageAction({ stage: 'requests' }))
              }}
            >
              <p>{t('requests2')}</p>
            </CabinetItem>
          )}
          <CabinetItem
            active={stage === 'deals'}
            onClick={() => {
              //@ts-ignore
              dispatch(setStageAction({ stage: 'deals' }))
            }}
          >
            <p>{t('deals2')}</p>
          </CabinetItem>
          <CabinetItem
            active={stage === 'feedbacks'}
            onClick={() => {
              //@ts-ignore
              dispatch(setStageAction({ stage: 'feedbacks' }))
            }}
          >
            <p>{t('feedbacks2')}</p>
          </CabinetItem>
        </div>
        <div
          style={{
            width: '90%',
            height: 1,
            backgroundColor: '#777',
            margin: 'auto',
          }}
        ></div>
        <Divider height={40} />
        <Wrapper>
          {stage === 'profile' ? (
            <>
              <CardWrapper
                style={{
                  borderBottomLeftRadius: user?.description ? 0 : 25,
                  borderBottomRightRadius: user?.description ? 0 : 25,
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
                      {user?.name &&
                        user.name
                          .split(' ')
                          .map(el => el[0])
                          .join('')}
                    </div>

                    <Online isOnline={!!user?.online} />
                  </div>
                  <Divider width={50} />
                  <div>
                    <ProfileText
                      style={{ fontSize: 18, color: 'black', fontWeight: 700 }}
                    >
                      {user?.name}
                    </ProfileText>
                    <Divider height={1} />

                    <ProfileText
                      style={{ fontSize: 13, color: 'black', fontWeight: 600 }}
                    >
                      {user?.premiumStatus &&
                        user.premiumStatus === '1' &&
                        'Новачок'}
                      {user?.premiumStatus &&
                        user.premiumStatus === '2' &&
                        'Досвiдчений'}
                      {user?.premiumStatus &&
                        user.premiumStatus === '3' &&
                        'Профi'}
                    </ProfileText>
                    <Divider height={10} />
                    <ProfileText>
                      {t('intime')} {user?.inWorkStatus ? t('work') : t('free')}
                    </ProfileText>
                    <Divider height={1} />

                    <ProfileText>
                      {
                        //@ts-ignore
                        new Date(user.createdAt).toLocaleDateString()
                      }
                    </ProfileText>
                    <Divider height={1} />

                    <ProfileText>{user?.phone}</ProfileText>
                    <Divider height={1} />
                    <ProfileText>{user?.email}</ProfileText>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                  }}
                >
                  <EditButton to="/settings">{t('edit')}</EditButton>
                  <div style={{ display: 'flex' }}>
                    <Rate
                      count={5}
                      //@ts-ignore
                      value={user?.rate ?? 0}
                      disabled
                      allowHalf
                      style={{ fontSize: 24 }}
                    />
                    <Divider width={15} />
                    <Feed style={{ fontFamily: 'Montserrat', fontWeight: 500 }}>
                      {user?.feedbacksLength ?? 0}
                      {t('feedbacks3')}
                    </Feed>
                  </div>
                </div>
              </CardWrapper>
              {user?.description && (
                <DescriptionContainer
                  style={{
                    backgroundColor: 'white',
                    width: '90%',
                    borderBottomLeftRadius: 25,

                    borderBottomRightRadius: 25,

                    // height: 200,
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
                    {t('aboutme')}:
                  </p>
                  <Divider height={1} />
                  <p
                    style={{
                      fontSize: 14,
                      fontFamily: 'Montserrat',
                      fontWeight: 500,
                    }}
                  >
                    {user?.description}
                  </p>
                </DescriptionContainer>
              )}
            </>
          ) : stage === 'orders' ? (
            <Wrapper>
              <CreateOrder to="/edit-order">{t('createOrder')}</CreateOrder>
              <Divider height={15} />

              {user?.orders &&
                user.orders.map(el => (
                  <>
                    <Link
                      to={`/order/${el._id}`}
                      style={{ color: 'black', textDecoration: 'none' }}
                    >
                      <Order>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '95%',
                            height: 40,
                            paddingTop: 20,
                          }}
                        >
                          <p
                            style={{
                              color: 'purple',
                              fontWeight: 600,
                              fontSize: 18,
                            }}
                          >
                            {el.title}
                          </p>
                          <p
                            style={{
                              color: COLORS.green,
                              fontWeight: 500,
                              fontSize: 18,
                            }}
                          >
                            {el.price}$
                          </p>
                        </div>
                        <p
                          style={{
                            fontSize: 16,
                            width: '95%',
                            textOverflow: 'ellipsis',
                            maxHeight: 200,
                          }}
                        >
                          {el.description}
                        </p>
                        <Divider height={15} />
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '95%',
                          }}
                        >
                          <p
                            style={{
                              fontWeight: 600,
                              fontSize: 14,
                              color: 'black',
                            }}
                          >
                            {new Date(el.createdAt).toLocaleDateString()}
                          </p>
                          {!!el.country && !!el.city && (
                            <p
                              style={{
                                fontWeight: 600,
                                fontSize: 14,
                                color: 'black',
                              }}
                            >
                              {`${el.country}, ${el.city}`}
                            </p>
                          )}
                          <p
                            style={{
                              fontWeight: 600,
                              fontSize: 14,
                              color: 'black',
                            }}
                          >
                            {user.name}
                          </p>

                          <p
                            style={{
                              fontWeight: 600,
                              fontSize: 14,
                              color: 'black',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <img
                              style={{ width: 20, height: 20 }}
                              alt="watched"
                              src={
                                'https://cdn-icons-png.flaticon.com/512/118/118191.png'
                              }
                            />
                            <Divider width={5} />
                            {el.views}
                          </p>
                        </div>
                        <div
                          style={{
                            width: '100%',
                            height: 1,
                            backgroundColor: '#999',
                          }}
                        ></div>
                        <Divider height={15} />

                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '80%',
                          }}
                        >
                          <Link
                            style={{
                              padding: 20,
                              fontWeight: 700,
                              color: COLORS.green,
                              textDecoration: 'none',
                            }}
                            to={`/edit-order/${el?._id}`}
                          >
                            {t('edit')}
                          </Link>
                          <div
                            style={{
                              width: 1,
                              height: 20,
                              backgroundColor: '#999',
                            }}
                          ></div>
                          <div
                            style={{
                              padding: 20,
                              fontWeight: 700,
                              color: '#777',
                              cursor: 'pointer',
                            }}
                            onClick={e => {
                              e.preventDefault()
                              dispatch(
                                changeActiveOrderAction.request({ id: el._id }),
                              )
                            }}
                          >
                            {el.active ? t('deactivate') : t('АКТИВИРОВАТЬ')}
                          </div>
                          <div
                            style={{
                              width: 1,
                              height: 20,
                              backgroundColor: '#999',
                            }}
                          ></div>

                          <div
                            style={{
                              padding: 20,
                              fontWeight: 700,
                              color: 'red',
                              cursor: 'pointer',
                            }}
                            onClick={e => {
                              e.preventDefault()

                              dispatch(
                                deleteOrderAction.request({ id: el._id }),
                              )
                            }}
                          >
                            {t('delete')}
                          </div>
                        </div>
                      </Order>
                    </Link>
                    <Divider height={20} />
                  </>
                ))}
            </Wrapper>
          ) : stage === 'requests' ? (
            <>
              <Wrapper>
                {user?.requests &&
                  user.requests.map(el => (
                    <>
                      <Deal done={false} inWork={false}>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '95%',
                            height: 40,
                            paddingTop: 20,
                          }}
                        >
                          <p
                            style={{
                              color: 'purple',
                              fontWeight: 600,
                              fontSize: 18,
                            }}
                          >
                            {el?.title}
                          </p>
                          <p
                            style={{
                              color: COLORS.green,
                              fontWeight: 500,
                              fontSize: 18,
                            }}
                          >
                            {el?.price}$
                          </p>
                        </div>
                        <p
                          style={{
                            fontSize: 16,
                            width: '95%',
                            textOverflow: 'ellipsis',
                            maxHeight: 200,
                          }}
                        >
                          {el?.description}
                        </p>
                        <Divider height={15} />
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '95%',
                          }}
                        >
                          <p
                            style={{
                              fontWeight: 600,
                              fontSize: 14,
                              color: 'black',
                            }}
                          >
                            {new Date(el?.createdAt).toLocaleDateString()}
                          </p>
                          {!!el.country && !!el.city && (
                            <p
                              style={{
                                fontWeight: 600,
                                fontSize: 14,
                                color: 'black',
                              }}
                            >
                              {el?.country}, {el?.city}
                            </p>
                          )}
                          <p
                            style={{
                              fontWeight: 600,
                              fontSize: 14,
                              color: 'black',
                            }}
                          >
                            {el?.customer?.name}
                          </p>

                          <p
                            style={{
                              fontWeight: 600,
                              fontSize: 14,
                              color: 'black',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <img
                              style={{ width: 20, height: 20 }}
                              alt="watched"
                              src={
                                'https://cdn-icons-png.flaticon.com/512/118/118191.png'
                              }
                            />
                            <Divider width={5} />
                            {el.views}
                          </p>
                        </div>

                        <Divider height={15} />
                      </Deal>
                      <Divider height={20} />
                    </>
                  ))}
              </Wrapper>
            </>
          ) : stage === 'deals' ? (
            <>
              <Wrapper>
                {user?.deals &&
                  user.deals.map(el => (
                    <>
                      <Deal
                        done={el.status === 'finished'}
                        inWork={el.status !== 'in work'}
                      >
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '95%',
                            height: 40,
                            paddingTop: 20,
                          }}
                        >
                          <p
                            style={{
                              color: 'purple',
                              fontWeight: 600,
                              fontSize: 18,
                            }}
                          >
                            {el?.title}
                          </p>
                          <p
                            style={{
                              color: COLORS.green,
                              fontWeight: 500,
                              fontSize: 18,
                            }}
                          >
                            {el?.price}$
                          </p>
                        </div>
                        <p
                          style={{
                            fontSize: 16,
                            width: '95%',
                            textOverflow: 'ellipsis',
                            maxHeight: 200,
                          }}
                        >
                          {el?.description}
                        </p>
                        <Divider height={15} />
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '95%',
                          }}
                        >
                          <p
                            style={{
                              fontWeight: 600,
                              fontSize: 14,
                              color: 'black',
                            }}
                          >
                            {new Date(el?.createdAt).toLocaleDateString()}
                          </p>
                          {!!el.country && !!el.city && (
                            <p
                              style={{
                                fontWeight: 600,
                                fontSize: 14,
                                color: 'black',
                              }}
                            >
                              {el?.country}, {el?.city}
                            </p>
                          )}
                          <p
                            style={{
                              fontWeight: 600,
                              fontSize: 14,
                              color: 'black',
                            }}
                          >
                            {el?.customer?.name}
                          </p>

                          <p
                            style={{
                              fontWeight: 600,
                              fontSize: 14,
                              color: 'black',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <img
                              style={{ width: 20, height: 20 }}
                              alt="watched"
                              src={
                                'https://cdn-icons-png.flaticon.com/512/118/118191.png'
                              }
                            />
                            <Divider width={5} />
                            {el.views}
                          </p>
                          {el.status === 'in work' && user.role === 'customer' && (
                            <div
                              style={{
                                display: 'flex',
                              }}
                            >
                              <CreateBtn
                                onClick={() => {
                                  dispatch(
                                    declineOrderAction.request({ id: el?._id }),
                                  )
                                }}
                                style={{
                                  width: 130,
                                  backgroundColor: 'red',
                                  textAlign: 'center',
                                }}
                              >
                                {t('discard')}
                              </CreateBtn>

                              <Divider width={20} />

                              <CreateBtn
                                onClick={() => {
                                  if (+el?.price > +user?.cash)
                                    alert('Недостатньо коштiв!')
                                  else {
                                    dispatch(
                                      confirmOrderAction.request({
                                        id: el?._id,
                                      }),
                                    )
                                    setModalShown(true)
                                    setUserId(el?.executor)
                                  }
                                }}
                                style={{
                                  width: 130,
                                  textAlign: 'center',
                                }}
                              >
                                {t('pay')}
                              </CreateBtn>
                            </div>
                          )}

                          {el.status === 'finished' && user.role === 'worker' && (
                            <div
                              style={{
                                display: 'flex',
                              }}
                            >
                              <CreateBtn
                                onClick={() => {
                                  setModalShown(true)
                                  setUserId(el?.customer?._id)
                                }}
                                style={{
                                  width: 200,
                                  textAlign: 'center',
                                }}
                              >
                                Оставить отзыв
                              </CreateBtn>
                            </div>
                          )}
                        </div>

                        <Divider height={15} />
                      </Deal>
                      <Divider height={20} />
                    </>
                  ))}
              </Wrapper>

              <Divider height={20} />
            </>
          ) : (
            <>
              {
                //@ts-ignore
                user.feedbacks &&
                  //@ts-ignore
                  user.feedbacks.map(feed => (
                    <>
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
                              {feed?.customer.name &&
                                feed.customer.name
                                  .split(' ')
                                  .map(
                                    //@ts-ignore
                                    el => el[0],
                                  )
                                  .join('')}
                            </div>

                            <Online isOnline={!!feed?.customer?.online} />
                          </div>
                          <Divider width={50} />
                          <div>
                            <ProfileText
                              style={{
                                fontSize: 18,
                                color: 'black',
                                fontWeight: 700,
                              }}
                            >
                              {feed?.customer.name}
                            </ProfileText>
                            <Divider height={10} />
                            <ProfileText>
                              {t('intime')}{' '}
                              {feed?.customer.inWorkStatus
                                ? t('work')
                                : t('free')}
                            </ProfileText>
                            <Divider height={1} />

                            <ProfileText>
                              {
                                //@ts-ignore
                                new Date(
                                  feed?.customer.createdAt,
                                ).toLocaleDateString()
                              }
                            </ProfileText>
                            <Divider height={1} />
                          </div>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: 'column',
                          }}
                        >
                          <p>
                            {' '}
                            {
                              //@ts-ignore
                              new Date(feed?.createdAt).toLocaleDateString()
                            }
                          </p>
                          <div style={{ display: 'flex' }}>
                            <Rate
                              count={5}
                              value={feed.rate}
                              disabled
                              allowHalf
                              style={{ fontSize: 24 }}
                            />
                          </div>
                        </div>
                      </CardWrapper>
                      {feed?.description && (
                        <DescriptionContainer
                          style={{
                            backgroundColor: 'white',
                            width: '90%',
                            borderBottomLeftRadius: 25,

                            borderBottomRightRadius: 25,

                            // height: 200,
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
                            {t('feedbacks4')}
                          </p>
                          <Divider height={1} />
                          <p
                            style={{
                              fontSize: 14,
                              fontFamily: 'Montserrat',
                              fontWeight: 500,
                            }}
                          >
                            {feed?.description}
                          </p>
                        </DescriptionContainer>
                      )}
                      <Divider height={20} />
                    </>
                  ))
              }
            </>
          )}
        </Wrapper>
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
              style={{
                height: 400,
              }}
            >
              <Divider height={10} />
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <p style={{ fontSize: 16, flexBasis: '25%' }}>Оцiнка:</p>
                <div style={{ display: 'flex', flexBasis: '75%' }}>
                  <Input
                    type="number"
                    min={1}
                    max={5}
                    value={form.rate}
                    style={{ width: '100%', padding: 10, margin: 0 }}
                    placeholder="Оцiнка"
                    onChange={v => inputHandler('rate', v.target.value)}
                  />
                </div>
              </div>
              <Divider height={10} />

              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <p style={{ fontSize: 16, flexBasis: '25%' }}>{t('text')}:</p>
                <div style={{ display: 'flex', flexBasis: '75%' }}>
                  <DescriptionInput
                    value={form.description}
                    placeholder={`${t('text')}...`}
                    onChange={v => inputHandler('description', v.target.value)}
                  />
                </div>
              </div>
              <Divider height={15} />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <CreateBtn
                  onClick={() => {
                    setModalShown(false)
                  }}
                  style={{
                    width: 130,
                    textAlign: 'center',
                    backgroundColor: '#999',
                  }}
                >
                  Отмена
                </CreateBtn>
                <CreateBtn
                  onClick={() => {
                    try {
                      validation()
                      errors.length && toogleIsAlertOpen(true)
                      !errors.length && setModalShown(false)
                      !errors.length &&
                        dispatch(
                          createFeedbackAction.request({ ...form, userId }),
                        )
                    } catch (error) {
                      console.log(error)
                    }
                  }}
                  style={{
                    width: 130,
                    textAlign: 'center',
                    backgroundColor: '#258a52',
                  }}
                >
                  {t('send')}
                </CreateBtn>
              </div>
            </DescriptionWrapper>
          </div>
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
    </>
  )
}

//   user?.inWorkStatus

export default CabinetPage
