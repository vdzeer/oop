import styled from 'styled-components'
import { COLORS } from '../../assets'
import { FONT } from '../../utils'

export const Container = styled.div`
  background-color: ${COLORS.background};

  overflow: hidden;

  min-height: 100vh;
`

export const PageTitle = styled.h1`
  ${FONT({ size: '24px', weight: '600', color: COLORS.green })};

  letter-spacing: 1px;

  text-transform: uppercase;

  margin: auto;

  width: 90%;

  line-height: 0px;

  /* margin-bottom: 20px; */
`
