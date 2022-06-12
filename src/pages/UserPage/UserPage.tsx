import Rate from 'rc-rate'
import React, { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Divider, Footer, HeaderWrapper } from '../../components'
import { useTypedSelector } from '../../hooks'
import { clearOtherUser, getOtherUser } from '../../store/user/actions'
import { Feed } from '../Home/styled'
import {
  CardWrapper,
  Container,
  DescriptionContainer,
  Online,
  ProfileText,
  Wrapper,
} from './styled'

const UserPage: FC = () => {
  const dispatch = useDispatch()
  const { currentUser } = useTypedSelector(state => state.user)

  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    dispatch(getOtherUser.request({ id }))
    return () => {
      dispatch(clearOtherUser())
    }
  }, [dispatch, id])

  const { t } = useTranslation()

  return (
    <>
      <Container>
        <HeaderWrapper></HeaderWrapper>

        <Divider height={40} />
        <Wrapper>
          <CardWrapper
            style={{
              borderBottomLeftRadius: currentUser?.description ? 0 : 25,
              borderBottomRightRadius: currentUser?.description ? 0 : 25,
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
                  {currentUser?.name &&
                    currentUser.name
                      .split(' ')
                      .map((el: any) => el[0])
                      .join('')}
                </div>

                <Online isOnline={!!currentUser?.online} />
              </div>
              <Divider width={50} />
              <div>
                <ProfileText
                  style={{ fontSize: 18, color: 'black', fontWeight: 700 }}
                >
                  {currentUser?.name}
                </ProfileText>
                <Divider height={10} />
                <ProfileText>
                  {t('intime')}{' '}
                  {currentUser?.inWorkStatus ? t('work') : t('free')}
                </ProfileText>
                <Divider height={1} />

                <ProfileText>
                  {
                    //@ts-ignore
                    new Date(
                      currentUser?.createdAt ?? new Date(),
                    ).toLocaleDateString()
                  }
                </ProfileText>
                <Divider height={1} />

                {/* <ProfileText>{currentUser?.phone}</ProfileText> */}
                <ProfileText>{currentUser?.status}</ProfileText>
                <Divider height={1} />

                <ProfileText>+380(--)-------</ProfileText>

                <Divider height={1} />
                {/* <ProfileText>{currentUser?.email}</ProfileText> */}
                <ProfileText>------@gmail.com</ProfileText>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
              }}
            >
              <ProfileText>
                {
                  //@ts-ignore
                  new Date(
                    currentUser?.createdAt ?? new Date(),
                  ).toLocaleDateString()
                }
              </ProfileText>

              <div style={{ display: 'flex' }}>
                <Rate
                  count={5}
                  value={currentUser?.rate ?? 0}
                  disabled
                  allowHalf
                  style={{ fontSize: 24 }}
                />
                <Divider width={15} />
                <Feed style={{ fontFamily: 'Montserrat', fontWeight: 500 }}>
                  {currentUser?.feedbacksLength ?? 0} {t('feedbacks3')}
                </Feed>
              </div>
            </div>
          </CardWrapper>
          {currentUser?.description && (
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
                {currentUser?.description}
              </p>
            </DescriptionContainer>
          )}
          <Divider height={30} />

          <>
            {
              //@ts-ignore
              currentUser?.feedbacks &&
                //@ts-ignore
                currentUser.feedbacks.map(feed => (
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
                          {t('feedbacks4')}:
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
        </Wrapper>
      </Container>
      <Footer />
    </>
  )
}

export default UserPage
