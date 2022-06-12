import { FLEX, FONT } from '../../utils/css'
import styled from 'styled-components'
import { COLORS } from '../../assets'

export const Container = styled.div`
  background-color: ${COLORS.background};

  min-height: 70vh;
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
  width: 90%;
  display: flex;
  margin: auto;
`

export const EditButton = styled.div`
  width: 200px;
  height: 20px;
  background-color: white;
  border-radius: 25px;
  padding: 12px 0px;
  border: 1.5px solid ${COLORS.green};
  color: ${COLORS.green};
  font-weight: 700;

  cursor: pointer;

  text-decoration: none;
  ${FLEX({})}
`

export const Form = styled.div`
  ${FLEX({ direction: 'column', align: 'flex-start' })}
  width: 50%;
`

export const Label = styled.p`
  margin-bottom: 2px;
  ${FONT({ size: '14px', weight: '700' })}
`

export const TextInput = styled.input`
  height: 30px;
  width: 94%;
  border: 0.6px solid rgba(90, 90, 90, 0.3);
  border-radius: 5px;
  padding: 0 5px;
  background-color: ${COLORS.white};
  font-size: 14px;
  &:focus {
    outline: none;
  }
`

export const TextArea = styled.textarea`
  height: 200px;
  width: 97%;
  resize: none;
  border: 0.6px solid rgba(90, 90, 90, 0.3);
  border-radius: 5px;
  padding: 5px;
  background-color: ${COLORS.white};
  font-size: 14px;
  &:focus {
    outline: none;
  }
`

export const Stage = styled.p<{ active: boolean }>`
  ${FONT({ size: '14px', weight: '500' })}

  opacity: ${({ active }) => (active ? 1 : 0.8)};

  cursor: pointer;
`
