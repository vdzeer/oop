import { BORDER, FLEX } from './../../../utils/css'
import styled from 'styled-components'
import { Assets, COLORS } from '../../../assets'
import { FONT } from '../../../utils'

export const Container = styled.div`
  background-color: ${COLORS.background};

  height: 100vh;

  ${FLEX({ justify: 'space-between' })};
`

export const InfoWrapper = styled.div`
  width: 60%;
  height: 90%;
  overflow-y: scroll;
`

export const LogoWrapper = styled.div`
  width: 40%;
  height: 100%;

  background-color: ${COLORS.green};
  ${FLEX({})};
`

export const Logo = styled.img`
  width: 150px;
`

export const LoginText = styled.p`
  ${FONT({ size: '35px', weight: '600', color: '#444' })}
  text-align: center;
  letter-spacing: 0.5px;
  line-height: 0px;
`

export const Form = styled.div`
  padding: 20px;
  width: 85%;
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

export const Checkbox = styled.input`
  width: 30px;
  height: 40px;

  border: 1px solid #fff;
`

export const StyledRadio = styled.input`
  height: 40px;
  width: 40px;

  appearance: none;
  cursor: pointer;

  border-radius: 50%;

  ${BORDER({ color: COLORS.black })}

  &:checked {
    background: url(${Assets.RADIO_ICON}) center no-repeat;
    border: none;
  }
`
