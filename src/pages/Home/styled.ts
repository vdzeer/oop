import { BORDER, FLEX } from './../../utils/css'
import styled from 'styled-components'
import { Assets, COLORS } from '../../assets'
import { FONT } from '../../utils'

export const Container = styled.div`
  background-color: ${COLORS.background};

  overflow: hidden;
  min-height: 100vh;
`

export const HeaderText = styled.h1`
  ${FONT({ size: '50px', color: '#fff', weight: '600' })};

  letter-spacing: 1px;

  text-transform: uppercase;

  margin: auto;

  line-height: 0px;

  text-align: center;

  margin-bottom: 80px;
`

export const UserContainer = styled.div`
  padding: 30px 20px 5px 20px;
  position: relative;

  background-color: white;

  border-radius: 20px;
  ${FLEX({ direction: 'row' })}
`

export const Status1 = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
  border: 1.5px solid #444;
  padding: 5px 15px;
  border-radius: 20px;
  ${FONT({ size: '12px', weight: '700' })}

  color: #444;
  text-transform: uppercase;
`

export const Status2 = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
  border: 1.5px solid #090;
  padding: 5px 15px;
  border-radius: 20px;
  ${FONT({ size: '12px', weight: '700' })}

  color: #090;
  text-transform: uppercase;
`

export const Status3 = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
  border: 1.5px solid #090;
  background: #090;
  padding: 5px 15px;
  border-radius: 20px;
  ${FONT({ size: '12px', weight: '600', color: 'white' })}

  text-transform: uppercase;
`
export const InfoWrapper = styled.div`
  width: 100%;
  ${FLEX({ justify: 'space-between', align: 'flex-start' })}
`

export const ImageWrapper = styled.div`
  position: relative;
`

export const ImageStyled = styled.img`
  /* height: 140px;
  width: 140px !important; */
  border-radius: 80px;
`

export const Online = styled.div<{ isOnline: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  height: ${({ isOnline }) => (isOnline ? 15 : 10)}px;
  width: ${({ isOnline }) => (isOnline ? 15 : 10)}px;
  background-color: ${({ isOnline }) => (isOnline ? COLORS.green : 'gray')};
  border-radius: 10px;
`

export const TextWrapper = styled.div`
  width: 65%;
`

export const Name = styled.p`
  ${FONT({ size: '16px', weight: '600' })}

  line-height: 0px;

  margin-bottom: 40px;
`

export const Address = styled.p`
  ${FONT({ size: '14px', weight: '500' })}
  line-height: 0px;
`

export const Spec = styled.p`
  ${FONT({ size: '14px' })}
  line-height: 0px;
`

export const StatusInWork = styled.p`
  ${FONT({ size: '12px' })}
  line-height: 0px;
`

export const Feed = styled.p`
  ${FONT({ size: '12px' })}
`

export const Deal = styled.div<{ index?: number }>`
  width: 70%;
  border-radius: 15px;
  padding-bottom: 10px;
  ${FLEX({})};
  background-color: white;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  margin: auto;

  border: 1px solid
    ${({ index }) =>
      index
        ? index <= 3
          ? COLORS.black
          : index <= 6
          ? COLORS.green
          : 'none'
        : 'none'};
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

export const PaginationContainer = styled.div`
  margin-top: 20px;

  ${FLEX({})}
`

export const PaginationButton = styled.div<{ disabled: boolean }>`
  cursor: pointer;

  padding: 5px 10px;

  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};

  border-radius: 10px;

  ${FONT({
    size: '15px',
    weight: '500',
    align: 'center',
  })}
`

export const PaginationText = styled.span`
  ${FONT({
    size: '16px',
    weight: '500',
    align: 'center',
  })}
`
