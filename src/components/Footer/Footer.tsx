import React, { FC, useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useTypedSelector } from '../../hooks'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import {
  CreateBtn,
  DescriptionInput,
  DescriptionWrapper,
  Input,
} from '../../pages/Order/styled'
import { Divider } from '../Divider'
import {
  Logo,
  StyledContainer,
  StyledLink,
  StyledWrapper,
  ValueText,
} from './styled'
import { useValidation } from '../../hooks/useValidation'
import { createSupportAction } from '../../store'
import { useDispatch } from 'react-redux'

const Footer: FC = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()

  const { enums } = useTypedSelector((store) => store.user)

  const [modalShown, setModalShown] = useState<boolean>(false)

  const [form, setForm] = useState({
    login: '',
    email: '',
    title: '',
    description: '',
  })

  const inputHandler = useCallback((field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }, [])

  const [isAlertOpen, toogleIsAlertOpen] = useState<boolean>(false)

  const schema = useMemo<any>(
    () => ({
      email: {
        condition: form.email.length >= 2,
        error: `Почта: Длина более 2 символов`,
      },
      login: {
        condition: form.login.length >= 2,
        error: `Логин: Длина более 2 символов`,
      },
      title: {
        condition: form.title.length >= 2,
        error: `Тема: Длина более 2 символов`,
      },
      description: {
        condition: form.description.length >= 2,
        error: `Описание: Длина более 2 символов`,
      },
    }),
    [form]
  )

  const { errors, validation } = useValidation(schema)

  return (
    <>
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
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <Divider height={10} />
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              <p style={{ fontSize: 16, flexBasis: '25%' }}>{t('login2')}:</p>
              <div style={{ display: 'flex', flexBasis: '75%' }}>
                <Input
                  value={form.login}
                  style={{ width: '100%', padding: 10, margin: 0 }}
                  placeholder={t('login2')}
                  onChange={(v) => inputHandler('login', v.target.value)}
                />
              </div>
            </div>
            <Divider height={10} />

            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              <p style={{ fontSize: 16, flexBasis: '25%' }}>{t('email')}:</p>
              <div style={{ display: 'flex', flexBasis: '75%' }}>
                <Input
                  style={{ width: '100%', padding: 10, margin: 0 }}
                  value={form.email}
                  placeholder={t('email')}
                  onChange={(v) => inputHandler('email', v.target.value)}
                />
              </div>
            </div>
            <Divider height={10} />

            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              <p style={{ fontSize: 16, flexBasis: '25%' }}>{t('title')}:</p>
              <div style={{ display: 'flex', flexBasis: '75%' }}>
                <Input
                  style={{ width: '100%', padding: 10, margin: 0 }}
                  value={form.title}
                  placeholder={t('title')}
                  onChange={(v) => inputHandler('title', v.target.value)}
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
                  onChange={(v) => inputHandler('description', v.target.value)}
                />
              </div>
            </div>
            <Divider height={15} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p style={{ fontSize: 16, color: '#c00' }}>
                Ожидайте ответа на почте, с вами скоро свяжутся!
              </p>
              <CreateBtn
                onClick={() => {
                  try {
                    validation()
                    errors.length && toogleIsAlertOpen(true)
                    !errors.length && setModalShown(false)
                    !errors.length &&
                      dispatch(createSupportAction.request(form))
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
        <Alert severity='error'>
          {errors.map((error) => (
            <p key={`error-item-${error}`}>- {error}</p>
          ))}
        </Alert>
      </Snackbar>
    </>
  )
}

export default Footer
