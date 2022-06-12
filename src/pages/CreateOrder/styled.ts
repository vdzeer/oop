import { FLEX } from './../../utils/css'
import styled from 'styled-components'
import { COLORS } from '../../assets'
import { FONT } from '../../utils'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  background-color: ${COLORS.background};

  margin-bottom: 50px;
`

export const Wrapper = styled.div`
  width: 90%;
  margin: auto;

  ${FLEX({ justify: 'space-between' })}
`

export const TitleWrapper = styled.div`
  width: 65%;
  background-color: ${COLORS.white};
  height: 70px;
  padding: 10px 20px;
  border-radius: 25px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);

  ${FLEX({})}
`

export const TitleInput = styled.input`
  border: none;

  background-color: ${COLORS.white};
  width: 100%;

  ${FONT({ size: '30px' })}

  &:focus {
    outline: none;
  }
`

export const PriceWrapper = styled.div`
  background-color: ${COLORS.white};
  ${FLEX({ justify: 'space-between' })};
  height: 70px;

  width: 25%;
  padding: 10px 20px;
  border-radius: 25px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  ${FONT({ size: '20px' })}
`

export const PriceInput = styled.input`
  background-color: ${COLORS.white};
  border: none;

  border-bottom: 1px solid ${COLORS.black};

  width: 60%;

  ${FONT({ size: '20px' })}

  &:focus {
    outline: none;
  }
`

export const DescriptionWrapper = styled.div`
  background-color: ${COLORS.white};

  width: 90%;
  margin: auto;
  min-height: 300px;
  padding: 10px 0;
  border-radius: 25px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
`

export const DescriptionInput = styled.textarea`
  background-color: ${COLORS.white};
  border: none;
  margin: 10px 20px;

  width: 98%;
  min-height: 290px;
  max-height: 100%;
  resize: vertical;

  ${FONT({ size: '24px' })}

  &:focus {
    outline: none;
  }
`

export const OptionsWrapper = styled.div`
  background-color: ${COLORS.white};
  ${FLEX({ justify: 'space-between' })};
  height: 90px;
  margin: auto;

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

  background-color: #c00;

  ${FONT({ size: '20px', color: '#FFF', weight: '700' })};
  letter-spacing: 0.5px;

  text-transform: uppercase;
  text-decoration: none;
`

export const CreateBtn = styled.div`
  cursor: pointer;

  padding: 15px 65px;

  border-radius: 70px;

  border: 3px solid ${COLORS.green};

  ${FONT({ size: '20px', color: COLORS.green, weight: '700' })};
  letter-spacing: 0.5px;

  text-transform: uppercase;
`
