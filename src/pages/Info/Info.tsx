import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { COLORS } from '../../assets'
import { Divider, Footer, HeaderWrapper } from '../../components'
import { Container, Wrapper } from './styled'

const InfoPage: FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <Container>
        <HeaderWrapper />
        <Divider height={30} />
        <Wrapper>
          <p
            style={{
              fontSize: 30,
              fontWeight: 500,
              color: '#333',
              lineHeight: 0,
            }}
          >
            {t('questions')}:
          </p>
          <Divider height={40} />
          <div>
            <p
              style={{
                color: COLORS.green,
                fontSize: 18,
                fontWeight: 500,
                lineHeight: 0,
              }}
            >
              Какая комисия ?
            </p>
            <p style={{ color: '#777', fontSize: 18, fontWeight: 500 }}>
              Наш сервис предоставляет минимальный процент от пополнения,который
              составляет 99% от всей сумы
            </p>
            <Divider height={20} />
            <p
              style={{
                color: COLORS.green,
                fontSize: 18,
                fontWeight: 500,
                lineHeight: 0,
              }}
            >
              Какая комисия ?
            </p>
            <p style={{ color: '#777', fontSize: 18, fontWeight: 500 }}>
              Наш сервис предоставляет минимальный процент от пополнения,который
              составляет 99% от всей сумы
            </p>
            <Divider height={20} />

            <p
              style={{
                color: COLORS.green,
                fontSize: 18,
                fontWeight: 500,
                lineHeight: 0,
              }}
            >
              Какая комисия ?
            </p>
            <p style={{ color: '#777', fontSize: 18, fontWeight: 500 }}>
              Наш сервис предоставляет минимальный процент от пополнения,который
              составляет 99% от всей сумы
            </p>
          </div>
        </Wrapper>
      </Container>
      <Footer />
    </>
  )
}

export default InfoPage
