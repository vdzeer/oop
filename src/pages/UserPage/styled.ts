import { Link } from 'react-router-dom'
import { FLEX, FONT } from '../../utils/css'
import styled from 'styled-components'
import { COLORS } from '../../assets'

export const Container = styled.div`
  background-color: ${COLORS.background};

  margin-bottom: 50px;
`

export const Wrapper = styled.div`
  width: 90%;
  margin: auto;
`
export const CreateOrder = styled.div`
  cursor: pointer;
  width: 100%;
  height: 200px;
  border: 2px dashed #777;
  border-radius: 15px;
  ${FLEX({})};
  ${FONT({ color: '#777', size: '30px', weight: '600' })};
  line-height: 0px;
  text-transform: uppercase;
  background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_swYbhsWE9v2XSaMK9mUIK4Lkk8tPC40DiQ&usqp=CAU')
    center / cover;
`

export const CabinetItem = styled.div<{ active: boolean }>`
  ${FLEX({})}
  ${FONT({ weight: '700' })}
  color:${({ active }) => (active ? 'black' : '#777')};

  cursor: pointer;
  text-transform: uppercase;
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
export const CardWrapper = styled.div`
  background-color: white;
  width: 90%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin: auto;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
`

export const DescriptionContainer = styled.div`
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
`
export const ProfileText = styled.p`
  ${FONT({ weight: '500', size: '14px', color: '#777' })}
  line-height: 0;
`

export const EditButton = styled(Link)`
  width: 200px;
  background-color: white;
  border-radius: 25px;
  padding: 12px 0px;
  border: 1.5px solid ${COLORS.green};
  color: ${COLORS.green};
  font-weight: 700;

  text-decoration: none;
  ${FLEX({})}
`

export const Order = styled.div`
  width: 100%;
  border-radius: 15px;
  background-color: white;
  ${FLEX({})};
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
`

export const Deal = styled.div<{ done: boolean }>`
  width: 100%;
  border-radius: 15px;
  padding-bottom: 10px;
  background: ${({ done }) =>
    done
      ? `linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 66%, rgba(137,228,131,.3) 96%);`
      : `
  linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 66%,
      rgba(231, 191, 191, .3) 96%
    );`};
  ${FLEX({})};
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
`
