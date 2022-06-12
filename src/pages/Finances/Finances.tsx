import React, { FC, useCallback, useState } from 'react'
import { Divider, Footer, HeaderWrapper } from '../../components'
import { useTypedSelector } from '../../hooks'
import { CardWrapper, Container, Form, Label, Stage, TextInput } from './styled'
import { LoginBtn } from '../Auth/Login/styled'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ValueText } from '../../components/Footer/styled'

const FinancesPage: FC = () => {
  const { user, enums } = useTypedSelector(state => state.user)

  const [stage, setStage] = useState<
    'add' | 'withdraw' | 'history' | 'premium'
  >('add')

  const [form, setForm] = useState({
    add: '',
    promo: '',
    del: '',
  })

  const inputHandler = useCallback((field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }, [])

  const { t } = useTranslation()
  return (
    <>
      <Container style={{ paddingBottom: 40 }}>
        <HeaderWrapper />
        <Divider height={30} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '90%',
            minHeight: '50vh',
          }}
        >
          <div style={{ width: '95%' }}>
            {stage === 'add' ? (
              <div
                style={{
                  width: '90%',
                  margin: 'auto',
                  backgroundColor: 'white',
                  boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.2)',
                  borderRadius: 25,
                }}
              >
                <Divider height={30} />
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    padding: 10,
                  }}
                >
                  <CardWrapper
                    style={{
                      paddingLeft: 40,
                    }}
                  >
                    <Form>
                      <Label>{t('add')}</Label>
                      <div
                        style={{
                          display: 'flex',
                          width: '100%',
                          justifyContent: 'space-around',
                          alignItems: 'center',
                        }}
                      >
                        <TextInput
                          type="number"
                          min={0}
                          placeholder={t('add')}
                          value={form.add}
                          onChange={e =>
                            inputHandler('add', e.target.value as any)
                          }
                        ></TextInput>
                        <Divider width={10} />$
                      </div>
                    </Form>
                  </CardWrapper>
                  <Divider height={20} />
                  <CardWrapper>
                    <Form>
                      <Label>{t('promo')}</Label>
                      <TextInput
                        placeholder={t('promo')}
                        value={form.promo}
                        onChange={e =>
                          inputHandler('promo', e.target.value as any)
                        }
                      ></TextInput>
                    </Form>
                  </CardWrapper>
                </div>
                <Divider height={20} />

                <div
                  style={{
                    width: '90%',
                    display: 'flex',
                    margin: 'auto',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                  }}
                >
                  <Link to="/info/services" style={{ marginBottom: 10 }}>
                    {t('ser')}
                  </Link>
                  <Divider width={20} />
                  <LoginBtn
                    style={{ width: 'max-content' }}
                    onClick={() => {
                      alert(
                        'Для пополнения вашего счета обратитесь пожалуйста к Администрации сервиса',
                      )
                    }}
                  >
                    Далi
                  </LoginBtn>
                </div>
                <Divider height={40} />
              </div>
            ) : stage === 'withdraw' ? (
              <div
                style={{
                  width: '90%',
                  margin: 'auto',
                  backgroundColor: 'white',
                  boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.2)',
                  borderRadius: 25,
                  display: 'flex',
                  alignItems: 'flex-start',
                  padding: 15,
                  minHeight: 110,
                }}
              >
                <Divider height={30} />

                <CardWrapper
                  style={{
                    paddingLeft: 30,
                  }}
                >
                  <Form>
                    <Label>{t('withdraw')}</Label>
                    <div
                      style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                      }}
                    >
                      <TextInput
                        type="number"
                        min={0}
                        placeholder={t('withdraw')}
                        value={form.del}
                        onChange={e =>
                          inputHandler('del', e.target.value as any)
                        }
                        style={{
                          color:
                            +(user?.cash ?? 0) < +form.del ? 'red' : 'black',
                        }}
                      ></TextInput>
                      <Divider width={10} />$
                    </div>
                  </Form>
                </CardWrapper>

                <div
                  style={{
                    width: '90%',
                    display: 'flex',
                    margin: 'auto',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    marginTop: 40,
                  }}
                >
                  <Link to="/info/services" style={{ marginBottom: 10 }}>
                    {t('ser')}
                  </Link>
                  <Divider width={20} />
                  <LoginBtn
                    style={{
                      width: 'max-content',
                      backgroundColor:
                        +(user?.cash ?? 0) < +form.del ? '#999' : '',
                    }}
                    onClick={() => {
                      alert(
                        'Для вывода средств обратитесь пожалуйста к Администрации сервиса',
                      )
                    }}
                  >
                    Далi
                  </LoginBtn>
                </div>
                <Divider height={40} />
              </div>
            ) : stage === 'history' ? (
              user?.cashHistory?.map(el => (
                <div
                  style={{
                    width: '90%',
                    margin: 'auto',
                    backgroundColor: 'white',
                    boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.2)',
                    borderRadius: 25,
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    padding: 15,
                    minHeight: 70,
                    marginBottom: 15,
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontWeight: 'bold',
                        color: el.status === 'add' ? '#090' : '#d00',
                        fontSize: 18,
                      }}
                    >
                      {el.title}
                    </p>

                    <p style={{ color: '#999', fontSize: 14 }}>
                      {new Date(el.createdAt).toLocaleDateString()}
                      {', '}
                      {new Date(el.createdAt).toLocaleTimeString()}
                    </p>
                  </div>
                  <p
                    style={{
                      fontWeight: 'bold',
                      color: el.status === 'add' ? '#090' : '#d00',
                      fontSize: 20,
                    }}
                  >
                    {el.cash}$
                  </p>
                </div>
              ))
            ) : stage === 'premium' ? (
              <div
                style={{
                  width: '90%',
                  margin: 'auto',
                  backgroundColor: 'white',
                  boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.2)',
                  borderRadius: 25,
                  paddingLeft: 40,
                }}
              >
                <Divider height={30} />

                <ValueText
                  style={{ textDecoration: 'none', color: 'black' }}
                  dangerouslySetInnerHTML={{
                    __html: enums?.pages?.premium,
                  }}
                />

                <Divider height={40} />
              </div>
            ) : (
              <></>
            )}
          </div>

          <div
            style={{
              width: '15%',
              backgroundColor: 'white',
              boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.2)',
              borderRadius: 15,
              height: 'max-content',
              padding: '20px 40px',
            }}
          >
            <Label>
              {t('finances')}{' '}
              <span style={{ color: '#090', marginLeft: 20 }}>
                {(user?.cash ?? 0).toFixed(2)}$
              </span>
            </Label>

            <Divider height={10} />

            <Stage onClick={() => setStage('add')} active={stage === 'add'}>
              {t('add2')}
            </Stage>
            <Stage
              onClick={() => setStage('withdraw')}
              active={stage === 'withdraw'}
            >
              {t('withdraw')}
            </Stage>
            <Stage
              onClick={() => setStage('history')}
              active={stage === 'history'}
            >
              {t('history')}
            </Stage>
            <Stage
              onClick={() => setStage('premium')}
              active={stage === 'premium'}
            >
              <span style={{ color: '#f00' }}>Профi/Новачок</span>
            </Stage>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default FinancesPage
