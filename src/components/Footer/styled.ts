import { FLEX, FONT } from '../../utils/css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledContainer = styled.div`
  width: 80%;
  margin: auto;

  ${FLEX({ justify: 'space-between', direction: 'row', align: 'flex-start' })};
`

export const StyledWrapper = styled.div`
  padding: 20px 0;
  width: 100%;
  background: center top / cover no-repeat url('./footer.png');
`

export const Wrapper = styled.div`
  ${FLEX({ justify: 'space-between' })}
`

export const Logo = styled.img`
  height: 40px;
`

export const StyledLink = styled(Link)`
  ${FONT({ size: '16px', color: 'rgba(255, 255, 255, 1)' })}

  text-decoration: underline;
`

export const ValueText = styled.p`
  ${FONT({ size: '16px', color: '#fff' })};
  margin: 0;
  /* line-height: 0; */
`

export const TextWrapper = styled(Link)`
  ${FLEX({ justify: 'space-between' })}
  text-decoration: none;
`
