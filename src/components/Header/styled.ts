import { FLEX, FONT } from './../../utils/css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { COLORS } from '../../assets'

export const StyledContainer = styled.div`
  // width: 80%;
  margin: auto;

  ${FLEX({ justify: 'space-between' })};
`

export const StyledWrapper = styled.div`
  margin: 20px 0 px;
  padding: 20px 20px;
  width: 100%;
  // height: 40px;

  // background: center bottom / cover no-repeat url('./header.png');
`

export const Wrapper = styled.div`
  ${FLEX({ justify: 'space-between' })}
`

export const Logo = styled.img``

export const StyledLink = styled(Link)`
  ${FONT({ size: '20px', color: 'black' })}

  text-decoration: none;
`

export const DealBtn = styled.div`
  cursor: pointer;

  padding: 5px 15px;

  border-radius: 20px;

  ${FONT({ size: '15px', color: COLORS.white, weight: '600' })}

  text-transform: uppercase;

  border: 1.8px solid ${COLORS.white};
`

export const LoginBtn = styled(Link)`
  cursor: pointer;

  padding: 5px 45px;

  border-radius: 20px;

  background-color: ${COLORS.white};

  ${FONT({ size: '18px', color: '#777' })};

  text-transform: uppercase;

  border: 1px solid ${COLORS.white};

  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  text-decoration: none;
`

export const PopText = styled.p`
  ${FONT({ size: '14px', color: '#444' })};

  text-transform: uppercase;
  line-height: 0;
`

export const ValueText = styled.p`
  ${FONT({ size: '14px', color: '#777' })};
  line-height: 0;

  text-transform: uppercase;
`

export const TextWrapper = styled(Link)`
  ${FLEX({ justify: 'space-between' })}
  text-decoration: none;
`

export const Online = styled.div<{ isOnline: boolean }>`
  height: ${({ isOnline }) => (isOnline ? 15 : 10)}px;
  width: ${({ isOnline }) => (isOnline ? 15 : 10)}px;
  border-radius: 10px;
  background-color: ${({ isOnline }) => (isOnline ? COLORS.green : 'gray')};
`
