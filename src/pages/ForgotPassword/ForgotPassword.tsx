import React, { FC, useCallback, useMemo, useState } from 'react'
import {
  Container,
  Form,
  Label,
  LoginBtn,
  LoginText,
  TextInput,
  Wrapper,
} from './styled'
import { useDispatch } from 'react-redux'
// import { forgotPassword } from "../../store";
import { useValidation } from '../../hooks/useValidation'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import { forgotPasswordAction } from '../../store'

const ForgotPassword: FC = () => {
  const dispatch = useDispatch()

  const [form, setForm] = useState<any>({
    email: '',
    password: '',
    code: '',
  })

  const inputHandler = useCallback((field: string, value: string) => {
    //@ts-ignore
    setForm(prev => ({ ...prev, [field]: value }))
  }, [])

  const [isAlertOpen, toogleIsAlertOpen] = useState<boolean>(false)

  const schema = useMemo<any>(
    () => ({
      email: {
        condition: form.email.length >= 4,
        error: `Логин:Длина более 4 символов`,
      },
      password: {
        condition: form.password.length >= 6,
        error: `Пароль:Длина более 6 символов`,
      },
    }),
    [form],
  )

  const { errors } = useValidation(schema)
  return (
    <>
      <Container>
        <Wrapper
          style={{
            margin: 'auto',
            width: '50%',
          }}
        >
          <LoginText>Вiдновлення паролю</LoginText>
          <LoginText>Перевiрте код на почтi</LoginText>

          <Form>
            <Label>Почта</Label>
            <TextInput
              placeholder="Почта"
              onChange={e => inputHandler('email', e.target.value)}
            ></TextInput>
          </Form>
          <Form>
            <Label>Код</Label>
            <TextInput
              placeholder="Код"
              onChange={e => inputHandler('code', e.target.value)}
            ></TextInput>
          </Form>

          <Form>
            <Label>Пароль</Label>
            <TextInput
              placeholder="Пароль"
              type="password"
              onChange={e => inputHandler('password', e.target.value)}
            ></TextInput>
          </Form>

          <LoginBtn
            to="/"
            onClick={() => {
              dispatch(forgotPasswordAction.request(form))
            }}
          >
            Вiдправити
          </LoginBtn>
          <div
            style={{
              width: '50%',
              margin: 'auto',
              textAlign: 'center',
              marginTop: 20,
            }}
          ></div>
        </Wrapper>
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
    </>
  )
}

export default ForgotPassword
