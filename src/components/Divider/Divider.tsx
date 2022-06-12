import React, { FC } from 'react'
import { TDividerProps } from './types'
import { COLORS } from '../../assets'
import { Block } from './styled'

const Divider: FC<TDividerProps> = ({ width, height, background }) => {
  return (
    <Block
      styledWidth={width ?? 0}
      styledHeight={height ?? 0}
      background={background ?? COLORS.white}
    />
  )
}

export default Divider
