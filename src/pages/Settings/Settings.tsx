import React, {
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
} from 'react'
import { useDispatch } from 'react-redux'
import { Divider, Footer, HeaderWrapper } from '../../components'
import { useTypedSelector } from '../../hooks'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import './styles.css'
import {
  CardWrapper,
  Container,
  EditButton,
  Form,
  Label,
  Online,
  Stage,
  TextArea,
  TextInput,
} from './styled'
import { LoginBtn } from '../Auth/Login/styled'
import { updateUserAction, updateUserPasswordAction } from '../../store'
import { useValidation } from '../../hooks/useValidation'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import { useTranslation } from 'react-i18next'

const SettingsPage: FC = () => {
  const dispatch = useDispatch()
  const { user, enums } = useTypedSelector(state => state.user)
  const hiddenFileInput = useRef<HTMLInputElement>(null)

  const [avatar, setAvatar] = useState<File | null | undefined>(null)

  const [stage, setStage] = useState<'settings' | 'password' | 'verify'>(
    'settings',
  )

  const options2 = enums.categories.map((el: string) => {
    return {
      value: el,
      label: el,
    }
  })

  const [form, setForm] = useState({
    login: '',
    name: '',
    email: '',
    phone: '',
    role: '',
    status: '',
    birthDay: '',
    country: '',
    city: '',
    description: '',
  })

  const [password, setPasswordForm] = useState({
    current: '',
    new: '',
    repeated: '',
  })
  const inputHandler = useCallback((field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }, [])

  const inputPasswordHandler = useCallback((field: string, value: string) => {
    setPasswordForm(prev => ({ ...prev, [field]: value }))
  }, [])

  const onPressSave = () => {
    try {
      validation()
      errors.length && toogleIsAlertOpen(true)

      const data = new FormData()
      data.append('name', form.name)
      data.append('login', form.login)
      data.append('email', form.email)
      data.append('phone', form.phone)
      data.append('role', form.role)
      data.append('status', form.status)
      data.append('birthDay', form.birthDay)
      data.append('country', form.country)
      data.append('city', form.city)
      data.append('description', form.description)

      avatar && data.append('avatar', avatar)

      dispatch(updateUserAction.request(data))

      alert('Данные успешно изменены')
    } catch (error) {
      console.log(error)
    }
  }

  const handleClick = () => {
    hiddenFileInput.current?.click()
  }

  const onPressChangePassword = () => {
    try {
      validationPass()
      errorsPass.length && toogleIsAlertOpenPass(true)
      if (password.new && password.new === password.repeated) {
        dispatch(
          updateUserPasswordAction.request({
            oldPassword: password.current,
            password: password.new,
          }),
        )

        alert('Пароль успешно изменён')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    user &&
      setForm({
        name: user.name,
        login: user.login,
        email: user.email,
        phone: user.phone,
        role: user.role,
        status: user.status,
        birthDay: user.birthDay,
        country: user.country,
        city: user.city,
        description: user.description,
      })
  }, [user])

  const [isAlertOpen, toogleIsAlertOpen] = useState<boolean>(false)

  const schema = useMemo<any>(
    () => ({
      birthDay: {
        condition: new Date(form.birthDay) < new Date(),
        error: `Дата народження:Оберiть коректну дату`,
      },
      country: {
        condition: form.country,
        error: `Країна:Введiть країну`,
      },
      city: {
        condition: form.city,
        error: `Мiсто:Введiть Мiсто`,
      },
      login: {
        condition: form.login.length >= 4,
        error: `Логiн:Довжина бiльше 4 символiв`,
      },

      name: {
        condition: form.name.length >= 2 && form.name.length <= 40,
        error: `Имя: Довжина бiльше 2 и менше 40 символiв`,
      },
      /* eslint-disable */
      email: {
        condition: form.email.match(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        ),
        error: `Email: Введiть коректний email`,
      },
      status: {
        condition: form.status,
        error: `Сфера: Оберiть сферу`,
      },
      phone: {
        condition: form.phone.match(
          /^[\+]?\(?(\d{3,5})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
        ),
        error: `Телефон: Введiть коректний телефон`,
      },
      role: {
        condition: form.role,
        error: `Роль: Оберiть роль`,
      },
    }),
    [form],
  )

  const { errors, validation } = useValidation(schema)

  const [isAlertOpenPass, toogleIsAlertOpenPass] = useState<boolean>(false)

  const schemaPass = useMemo<any>(
    () => ({
      password: {
        condition: password.current.length >= 6,
        error: `Текущий пароль:Длина более 6 символов`,
      },

      new: {
        condition: password.new.length >= 6,
        error: `Новый пароль:Длина более 6 симолов`,
      },
      repeated: {
        condition: password.repeated === password.new,
        error: `Пароли должны совпадать`,
      },
    }),
    [password],
  )

  const { errors: errorsPass, validation: validationPass } =
    useValidation(schemaPass)

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
          }}
        >
          <div style={{ width: '95%' }}>
            {stage === 'settings' ? (
              <div
                style={{
                  width: '90%',
                  margin: 'auto',
                  backgroundColor: 'white',
                  boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.2)',
                  borderRadius: 25,
                }}
              >
                <Divider height={40} />

                <CardWrapper>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
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
                  </div>

                  <Divider width={40} />

                  <EditButton onClick={handleClick}>
                    {t('uploadphoto')}
                  </EditButton>
                  <input
                    ref={hiddenFileInput}
                    type="file"
                    id="avatar"
                    name="avatar"
                    accept="image/png, image/jpeg, image/svg"
                    onChange={v => {
                      setAvatar(v.target.files?.[0])
                    }}
                    style={{ display: 'none' }}
                  />
                </CardWrapper>

                <Divider height={20} />

                <CardWrapper>
                  <Form>
                    <Label>
                      {t('fio')}
                      <span style={{ color: 'red' }}>*</span>
                    </Label>
                    <TextInput
                      placeholder={t('fio')}
                      type="text"
                      value={form.name}
                      onChange={e =>
                        inputHandler('name', e.target.value as any)
                      }
                    ></TextInput>
                  </Form>
                </CardWrapper>
                <Divider height={20} />

                <CardWrapper>
                  <Form>
                    <Label>
                      {t('login2')}
                      <span style={{ color: 'red' }}>*</span>
                    </Label>
                    <TextInput
                      placeholder={t('login2')}
                      value={form.login}
                      type="text"
                      onChange={e =>
                        inputHandler('login', e.target.value as any)
                      }
                    ></TextInput>
                  </Form>
                </CardWrapper>
                <Divider height={20} />

                <CardWrapper>
                  {/* <Form>
                    <Label>
                      Кто вы <span style={{ color: 'red' }}>*</span>
                    </Label>
                    <Dropdown
                      options={options}
                      className="dropdown"
                      value={form.role}
                      menuClassName="dropdownMenu"
                      controlClassName="dropdownControl"
                      onChange={v => inputHandler('role', v.value as any)}
                      placeholder="Кто вы"
                    />
                  </Form> */}

                  <Form>
                    <Label>
                      {t('sphere')}
                      <span style={{ color: 'red' }}>*</span>
                    </Label>
                    <Dropdown
                      options={options2}
                      className="dropdown"
                      value={form.status}
                      menuClassName="dropdownMenu"
                      controlClassName="dropdownControl"
                      onChange={v => inputHandler('status', v.value as any)}
                      placeholder={t('sphere')}
                    />
                  </Form>
                </CardWrapper>
                <Divider height={20} />

                <CardWrapper>
                  <Form>
                    <Label>
                      {t('dateofbirth')} <span style={{ color: 'red' }}>*</span>
                    </Label>
                    <TextInput
                      placeholder={t('dateofbirth')}
                      type="date"
                      value={form.birthDay}
                      onChange={e =>
                        inputHandler('birthDay', e.target.value as any)
                      }
                    ></TextInput>
                  </Form>
                </CardWrapper>
                <Divider height={20} />

                <CardWrapper>
                  <Form>
                    <Label>
                      {t('country')} <span style={{ color: 'red' }}>*</span>
                    </Label>
                    <TextInput
                      placeholder={t('country')}
                      value={form.country}
                      type="text"
                      onChange={e =>
                        inputHandler('country', e.target.value as any)
                      }
                    ></TextInput>
                  </Form>

                  <Form>
                    <Label>
                      {t('city')} <span style={{ color: 'red' }}>*</span>
                    </Label>
                    <TextInput
                      value={form.city}
                      placeholder={t('city')}
                      type="text"
                      onChange={e =>
                        inputHandler('city', e.target.value as any)
                      }
                    ></TextInput>
                  </Form>
                </CardWrapper>
                <Divider height={20} />
                <CardWrapper>
                  <Form>
                    <Label>
                      {t('email')} <span style={{ color: 'red' }}>*</span>
                    </Label>
                    <TextInput
                      placeholder={t('email')}
                      value={form.email}
                      type="text"
                      onChange={e =>
                        inputHandler('email', e.target.value as any)
                      }
                    ></TextInput>
                  </Form>
                </CardWrapper>
                <Divider height={20} />
                <CardWrapper>
                  <Form>
                    <Label> {t('phone')}</Label>
                    <TextInput
                      placeholder={t('phone')}
                      value={form.phone}
                      type="text"
                      onChange={e =>
                        inputHandler('phone', e.target.value as any)
                      }
                    ></TextInput>
                  </Form>
                </CardWrapper>
                <Divider height={20} />
                <CardWrapper>
                  <div style={{ width: '100%' }}>
                    <Label> {t('aboutme')}</Label>
                    <TextArea
                      value={form.description}
                      placeholder={t('aboutme')}
                      onChange={e =>
                        inputHandler('description', e.target.value as any)
                      }
                    ></TextArea>
                  </div>
                </CardWrapper>
                <Divider height={40} />

                <div
                  style={{
                    width: '90%',
                    display: 'flex',
                    margin: 'auto',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ width: '1%' }}></div>
                  <LoginBtn
                    style={{ width: 'max-content' }}
                    onClick={() => onPressSave()}
                  >
                    {t('save')}
                  </LoginBtn>
                </div>

                <Divider height={40} />
              </div>
            ) : stage === 'password' ? (
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

                <CardWrapper>
                  <Form>
                    <Label>{t('activepass')}</Label>
                    <TextInput
                      placeholder={t('activepass')}
                      type="password"
                      value={password.current}
                      onChange={e =>
                        inputPasswordHandler('current', e.target.value as any)
                      }
                    ></TextInput>
                  </Form>
                </CardWrapper>
                <Divider height={20} />
                <CardWrapper>
                  <Form>
                    <Label>{t('newpass')}</Label>
                    <TextInput
                      placeholder={t('newpass')}
                      type="password"
                      value={password.new}
                      onChange={e =>
                        inputPasswordHandler('new', e.target.value as any)
                      }
                    ></TextInput>
                  </Form>
                </CardWrapper>
                <Divider height={20} />
                <CardWrapper>
                  <Form>
                    <Label>{t('repeatpassword')}</Label>
                    <TextInput
                      placeholder={t('repeatpassword')}
                      type="password"
                      value={password.repeated}
                      onChange={e =>
                        inputPasswordHandler('repeated', e.target.value as any)
                      }
                    ></TextInput>
                  </Form>
                </CardWrapper>
                <Divider height={20} />

                <div
                  style={{
                    width: '90%',
                    display: 'flex',
                    margin: 'auto',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ width: '1%' }}></div>
                  <LoginBtn
                    style={{ width: 'max-content' }}
                    onClick={() => onPressChangePassword()}
                  >
                    {t('save')}
                  </LoginBtn>
                </div>
                <Divider height={40} />
              </div>
            ) : (
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

                <CardWrapper>
                  <Form>
                    <Label>В стадии разработки...</Label>
                  </Form>
                </CardWrapper>

                <Divider height={40} />
              </div>
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
            <Label>{t('settings2')}</Label>

            <Divider height={10} />

            <Stage
              onClick={() => setStage('settings')}
              active={stage === 'settings'}
            >
              {t('settings3')}
            </Stage>
            {/* <Stage
              onClick={() => setStage('verify')}
              active={stage === 'verify'}
            >
              {t('verif')}
            </Stage> */}
            <Stage
              onClick={() => setStage('password')}
              active={stage === 'password'}
            >
              {t('changepass')}
            </Stage>
          </div>
        </div>
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
        <Snackbar
          open={isAlertOpenPass}
          autoHideDuration={10000}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          onClose={() => toogleIsAlertOpenPass(false)}
        >
          <Alert severity="error">
            {errorsPass.map(error => (
              <p key={`error-item-${error}`}>- {error}</p>
            ))}
          </Alert>
        </Snackbar>
      </Container>
      <Footer />
    </>
  )
}

export default SettingsPage
