import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { COLORS } from '../../assets'
import { FLEX, FONT } from '../../utils'

export const Container = styled.div`
  background-color: ${COLORS.background};

  /* height: 100vh; */

  min-height: 100vh;
`

export const Wrapper = styled.div`
  width: 95%;
  margin: auto;
`

export const UsersBody = styled.div`
  width: 100%;
  min-height: 40vh;
  background-color: white;
  border-radius: 15px;
  padding: 20px 0px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  ${FLEX({ justify: 'space-around', align: 'flex-start' })}
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

export const UserContainer = styled(Link)`
  width: 25%;
  padding: 35px 20px 5px 20px;
  position: relative;

  background-color: white;

  border-radius: 20px;

  text-decoration: none;
  ${FLEX({ direction: 'row' })}
`
export const Status1 = styled.div`
  position: absolute;
  top: 22px;
  right: 0;
  border: 1.5px solid #444;
  padding: 5px 15px;
  border-radius: 20px;
  ${FONT({ size: '12px', weight: '700' })}

  color: #444;
  text-transform: uppercase;
`

export const Status2 = styled.div`
  position: absolute;
  top: 22px;
  right: 0;
  border: 1.5px solid #090;
  padding: 5px 15px;
  border-radius: 20px;
  ${FONT({ size: '12px', weight: '700' })}

  color: #090;
  text-transform: uppercase;
`

export const Status3 = styled.div`
  position: absolute;
  top: 22px;
  right: 0;
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
  height: 120px;
  width: 120px;
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
  width: 60%;
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
  ${FONT({ size: '12px' })}/* line-height: 0px; */
`

export const Feed = styled.p`
  ${FONT({ size: '12px' })}
`
