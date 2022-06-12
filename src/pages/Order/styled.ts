import { FLEX } from '../../utils/css'
import styled from 'styled-components'
import { COLORS } from '../../assets'
import { FONT } from '../../utils'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  background-color: ${COLORS.background};

  margin-bottom: 50px;
`

export const OptionsWrapper = styled.div`
  background-color: ${COLORS.white};
  ${FLEX({ justify: 'space-between' })};
  /* height: 90px; */
  margin: auto;
  padding: 0 20px;

  width: 90%;
  border-radius: 25px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  ${FONT({ size: '20px' })}
`

export const FinishWrapper = styled.div`
  ${FLEX({ justify: 'space-between' })};
  height: 90px;
  margin: auto;

  margin-top: 20px;

  width: 87%;
  ${FONT({ size: '20px' })}
`

export const CancelBtn = styled(Link)`
  cursor: pointer;

  padding: 15px 85px;

  border-radius: 70px;

  background-color: red;

  ${FONT({ size: '20px', color: '#FFF', weight: '700' })};
  letter-spacing: 0.5px;

  text-transform: uppercase;
  text-decoration: none;
`

export const CreateBtn = styled.div`
  cursor: pointer;

  padding: 15px 45px;

  border-radius: 70px;

  background: ${COLORS.green};

  ${FONT({ size: '18px', color: COLORS.white, weight: '700' })};
  letter-spacing: 0.5px;

  text-transform: uppercase;
`

export const DescriptionWrapper = styled.div`
  background-color: ${COLORS.white};

  width: 80%;
  margin: auto;
  height: 500px;
  padding: 20px 40px;

  border-radius: 25px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
`

export const DescriptionInput = styled.textarea`
  background-color: ${COLORS.white};
  border: 1px solid gray;

  padding: 10px;
  margin: 10px 0;

  width: 100%;
  min-height: 200px;
  max-height: 100%;
  resize: none;

  ${FONT({ size: '18px' })}

  &:focus {
    outline: none;
  }
`

export const Input = styled.input`
  background-color: ${COLORS.white};
  border: 1px solid gray;
  margin: 10px 20px;
  padding: 2px 7px;
  width: 50px;

  ${FLEX({})}

  ${FONT({ size: '18px' })}

  &:focus {
    outline: none;
  }
`
