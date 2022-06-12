import { FLEX } from './../../../utils/css'
import styled from 'styled-components'
import { COLORS } from '../../../assets'
import { FONT } from '../../../utils'

export const Container = styled.div`
  background-color: ${COLORS.background};

  height: 100vh;

  overflow: hidden;
`

export const LoginText = styled.p`
  ${FONT({ size: '35px', weight: '600', color: '#444' })}
  text-align: center;
  letter-spacing: 0.5px;
  line-height: 0px;
`

export const Form = styled.div`
  padding: 20px;
  width: 50%;
  margin: auto;
  ${FLEX({ justify: 'center' })}
`

export const Label = styled.p`
  width: 40%;
  margin: auto;
`

export const TextInput = styled.input`
  height: 30px;
  border: none;
  background-color: ${COLORS.background};
  border-bottom: 2px solid rgba(90, 90, 90, 0.3);
  &:focus {
    outline: none;
  }

  width: 50%;
`

export const LoginBtn = styled.div`
  cursor: pointer;

  padding: 15px 85px;

  border-radius: 70px;

  background-color: ${COLORS.green};

  ${FONT({ size: '20px', color: '#FFF', weight: '700' })};
  letter-spacing: 0.5px;

  text-transform: uppercase;
`
