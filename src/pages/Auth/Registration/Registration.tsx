import React, { FC, useCallback, useMemo, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import Dropdown from 'react-dropdown'
import { Assets } from '../../../assets'
import { Divider } from '../../../components'
import { StyledLink } from '../../../components/Header/styled'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'

import {
  Container,
  Form,
  InfoWrapper,
  Label,
  LoginBtn,
  LoginText,
  Logo,
  LogoWrapper,
  StyledRadio,
  TextInput,
} from './styled'

import 'react-dropdown/style.css'
import './styles.css'
import { useDispatch } from 'react-redux'
import { registerUserAction } from '../../../store'
import { regSchema } from '../../../store/user/types'
import { useValidation } from '../../../hooks/useValidation'
import { useTypedSelector } from '../../../hooks'
import { useTranslation } from 'react-i18next'

const options = [
  {
    value: 'customer',
    label: 'Замовник',
  },
  {
    value: 'worker',
    label: 'Виконавець',
  },
]

const RegistrationPage: FC = () => {
  const dispatch = useDispatch()

  const { enums } = useTypedSelector(state => state.user)

  const [form, setForm] = useState<regSchema>({
    login: '',
    name: '',
    email: '',
    phone: '',
    status: '',
    password: '',
    role: '',
  })

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

  const [formValid, setFormValid] = useState({
    google: false,
    rules: false,
  })

  const [repeated, setRepeated] = useState<string>('')

  const onPressRegister = () => {
    try {
      validation()
      if (errors.length) {
        toogleIsAlertOpen(true)
      } else {
        dispatch(registerUserAction.request({ ...form }))
      }
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
      repeated: {
        condition: repeated === form.password,
        error: `Паролi повиннi спiвпадати`,
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

      google: {
        condition: formValid.google,
        error: `Google-Accept:Пiдтвердiть,що ви не робот`,
      },
      rules: {
        condition: formValid.rules,
        error: `Полiтика конфiденцiальности: Погодьтесь`,
      },
    }),
    [form, formValid, repeated],
  )

  const { errors, validation } = useValidation(schema)

  const { t } = useTranslation()

  return (
    <Container>
      <LogoWrapper>
        <StyledLink to="/">
          <Logo src={Assets.LOGO_ICON} alt="logo" />
        </StyledLink>
      </LogoWrapper>

      <InfoWrapper>
        <LoginText>{t('reg')}</LoginText>

        <Divider height={30} />
        <Form>
          <Label>
            {t('login2')} <span style={{ color: 'red' }}>*</span>
          </Label>
          <TextInput
            placeholder={t('login2')}
            autoComplete="name"
            onChange={e => inputHandler('login', e.target.value)}
          ></TextInput>
        </Form>

        <Form>
          <Label>
            {t('fio')} <span style={{ color: 'red' }}>*</span>
          </Label>
          <TextInput
            placeholder={t('fio')}
            onChange={e => inputHandler('name', e.target.value)}
          ></TextInput>
        </Form>

        <Form>
          <Label>
            {t('who')} <span style={{ color: 'red' }}>*</span>
          </Label>
          <div
            style={{
              width: '50%',
              display: 'flex',
            }}
          >
            <Dropdown
              options={options}
              className="dropdown1"
              menuClassName="dropdownMenu1"
              controlClassName="dropdownControl1"
              onChange={v => inputHandler('role', v.value as any)}
              placeholder={t('who')}
            />
            <Divider width={30} />

            <Dropdown
              options={options2}
              className="dropdown1"
              menuClassName="dropdownMenu1"
              controlClassName="dropdownControl1"
              onChange={v => inputHandler('status', v.value as any)}
              placeholder={t('sphere')}
            />
          </div>
        </Form>

        <Form>
          <Label>{t('phone')}</Label>
          <TextInput
            placeholder={t('phone')}
            onChange={e => inputHandler('phone', e.target.value)}
          ></TextInput>
        </Form>

        <Form>
          <Label>
            {t('email')} <span style={{ color: 'red' }}>*</span>
          </Label>
          <TextInput
            placeholder={t('email')}
            onChange={e => inputHandler('email', e.target.value)}
          ></TextInput>
        </Form>

        <Form>
          <Label>
            {t('password')} <span style={{ color: 'red' }}>*</span>
          </Label>
          <TextInput
            placeholder={t('password')}
            autoComplete="new-password"
            type="password"
            onChange={e => inputHandler('password', e.target.value)}
          ></TextInput>
        </Form>

        <Form>
          <Label>
            {t('repeatpassword')} <span style={{ color: 'red' }}>*</span>
          </Label>
          <TextInput
            placeholder={t('repeatpassword')}
            type="password"
            onChange={e => {
              setRepeated(e.target.value)
            }}
          ></TextInput>
        </Form>

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '78%',
            margin: 'auto',
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          <StyledRadio
            type="radio"
            checked={formValid.rules}
            onChange={value => {
              setFormValid(prev => ({ ...prev, rules: !prev.rules }))
            }}
          />

          <Divider width={35} />
          <p>
            {t('agree')}{' '}
            <a
              href="https://freelhunter.com/#/info/privacy"
              target="_blank"
              style={{ fontSize: 16 }}
            >
              {t('agree2')}.
            </a>
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            width: '80%',
            margin: 'auto',
            marginTop: 20,
          }}
        >
          <ReCAPTCHA
            sitekey="6LeetCAdAAAAAKwfOwm5jeV_VJ4z3gSfALJHgjTK"
            onChange={() => {
              setFormValid(prev => ({ ...prev, google: true }))
            }}
          />
          <LoginBtn onClick={() => onPressRegister()}> {t('reg')}</LoginBtn>
        </div>
      </InfoWrapper>
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
  )
}

export default RegistrationPage
