import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { COLORS } from '../../assets'
import { FLEX, FONT } from '../../utils'

export const Container = styled.div`
  background-color: ${COLORS.background};

  height: 100vh;
  ${FLEX({})}

  overflow: hidden;
`

export const Wrapper = styled.div`
  background-color: ${COLORS.background};

  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);

  overflow: hidden;
  padding: 20px 0px;
  border-radius: 50px;
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

export const LoginBtn = styled(Link)`
  cursor: pointer;

  width: 200px;
  margin: auto;

  border-radius: 70px;
  padding: 15px 10px;

  background-color: ${COLORS.green};
  ${FLEX({})}

  ${FONT({ size: '20px', color: '#FFF', weight: '700' })};
  letter-spacing: 0.5px;

  text-transform: uppercase;
`

export const DeleteBtn = styled.div`
  cursor: pointer;

  width: 200px;
  margin: auto;

  border-radius: 70px;
  padding: 15px 10px;

  background-color: red;
  ${FLEX({})}

  ${FONT({ size: '20px', color: '#FFF', weight: '700' })};
  letter-spacing: 0.5px;

  text-transform: uppercase;
`

export const BlockBtn = styled.div`
  cursor: pointer;

  width: 200px;
  margin: auto;

  border-radius: 70px;
  padding: 15px 10px;

  background-color: ${COLORS.black};
  ${FLEX({})}

  ${FONT({ size: '20px', color: '#FFF', weight: '700' })};
  letter-spacing: 0.5px;

  text-transform: uppercase;
`
