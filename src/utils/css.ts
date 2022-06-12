import {
  TShadowConstructorArgs,
  TFlexConstructorArgs,
  TFontConstructorArgs,
  TCSSConstructor,
  TBorderConstructorArgs,
} from './types'

import { COLORS } from '../assets'

export const FONT: TCSSConstructor<TFontConstructorArgs> = ({
  color = COLORS.black,
  family = 'Montserrat',
  weight = '400',
  size = '1rem',
  align = 'left',
}) => {
  return `
    text-align: ${align};
    font-family: ${family};
    font-weight: ${weight};
    font-size: ${size};
    color: ${color};
  `
}

export const FLEX: TCSSConstructor<TFlexConstructorArgs> = ({
  direction = 'row',
  justify = 'center',
  align = 'center',
  wrap = 'wrap',
}) => {
  return `
    display: flex;
    align-items: ${align};
    justify-content: ${justify};
    flex-direction: ${direction};
    flex-wrap: ${wrap};
  `
}

export const SHADOW: TCSSConstructor<TShadowConstructorArgs> = ({
  x = 0,
  y = 0,
  blur = 6,
  color = COLORS.black,
}) => {
  return `
    box-shadow: ${x}px ${y}px ${blur}px ${color};
  `
}

export const BORDER: TCSSConstructor<TBorderConstructorArgs> = ({
  width = 1,
  style = 'solid',
  color = COLORS.black,
}) => {
  return `
    border: ${width}px ${style} ${color};
  `
}
