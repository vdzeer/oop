import React, { FC } from 'react'
import { useParams } from 'react-router'
import { Container, PageTitle } from './styled'
import { Divider, Footer, HeaderWrapper } from '../../components'
import { useTranslation } from 'react-i18next'

const InfoPage: FC = () => {
  return (
    <Container>
      <HeaderWrapper />

      <Divider height={50} />

      <div style={{ paddingLeft: 20 }}>за день делаем сайт</div>
    </Container>
  )
}

export default InfoPage
