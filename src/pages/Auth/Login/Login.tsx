import React, { FC, useCallback, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import ReCAPTCHA from 'react-google-recaptcha'
import { Footer, HeaderWrapper } from '../../../components'
import {
  Container,
  Form,
  Label,
  LoginBtn,
  LoginText,
  TextInput,
} from './styled'
import { loginSchema } from '../../../store/user/types'
import { useDispatch } from 'react-redux'
import { loginUserAction, sendCodeAction } from '../../../store'
import { useValidation } from '../../../hooks/useValidation'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import { useTranslation } from 'react-i18next'

const LoginPage: FC = () => {
  const dispatch = useDispatch()

  const [form, setForm] = useState<loginSchema>({
    login: '',
    password: '',
  })
  const [formValid, setFormValid] = useState({
    google: true,
  })
  const onPressLogin = () => {
    try {
      validation()
      errors.length && toogleIsAlertOpen(true)

      !errors.length && dispatch(loginUserAction.request({ ...form }))
    } catch (error) {
      console.log(error)
    }
  }

  const inputHandler = useCallback((field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }, [])

  const [isAlertOpen, toogleIsAlertOpen] = useState<boolean>(false)

  const schema = useMemo<any>(
    () => ({
      login: {
        condition: form.login.length >= 4,
        error: `Логiн:Довжина бiльше 4 символiв`,
      },
      password: {
        condition: form.password.length >= 6,
        error: `Пароль:Довжина бiльше 6 символiв`,
      },
      google: {
        condition: formValid.google,
        error: `Google-Accept:Пiдтвердiть,що ви не робот`,
      },
    }),
    [form, formValid],
  )

  const { errors, validation } = useValidation(schema)

  const { t } = useTranslation()
  return (
    <>
      <Container>
        <HeaderWrapper />
        <LoginText>{t('auth')}</LoginText>
        <Form>
          <Label>{t('login2')}</Label>
          <TextInput
            placeholder={t('login2')}
            onChange={e => inputHandler('login', e.target.value)}
          ></TextInput>
        </Form>

        <Form>
          <Label>{t('password')}</Label>
          <TextInput
            placeholder={t('password')}
            type="password"
            onChange={e => inputHandler('password', e.target.value)}
          ></TextInput>
        </Form>
        <div style={{ width: '50%', margin: 'auto', textAlign: 'right' }}>
          <Link
            to="/forgot"
            style={{ fontSize: 14 }}
            onClick={() => {
              if (form.login && form.login.includes('@'))
                dispatch(sendCodeAction.request({ email: form.login }))
              else alert('Введiть пошту!')
            }}
          >
            {t('forgot')}
          </Link>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            width: '46%',
            margin: 'auto',
            marginTop: 20,
          }}
        >
          <ReCAPTCHA
            sitekey="6LdTBMgcAAAAAK_NJuSmM8jWs65qQuWH8ub96bwS"
            onChange={() => {
              setFormValid(prev => ({ ...prev, google: true }))
            }}
          />
          <LoginBtn onClick={() => onPressLogin()}>Увiйти</LoginBtn>
        </div>
        <div
          style={{
            width: '50%',
            margin: 'auto',
            textAlign: 'center',
            marginTop: 20,
          }}
        >
          <Link to="/registration" style={{ fontSize: 14 }}>
            {t('unreg')}
          </Link>
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
      </Container>
      <Footer />
    </>
  )
}

export default LoginPage
