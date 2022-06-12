export type TCSSConstructor<T> = (props: T) => string

export type TFontConstructorArgs = {
  size?: string
  color?: string
  weight?: TFontWeight
  family?: TFontFamily
  align?: TFontAlign
}

/* eslint-disable */
export type TFontFamily =
  | 'Montserrat'

export type TFontWeight = '300' | '400' | '500' | '600' | '700'

export type TFontAlign =
  | 'center'
  | 'right'
  | 'left'
/* eslint-enable */

export type TFlexConstructorArgs = {
  wrap?: TFlexWrap
  align?: TFlexAlign
  justify?: TFlexJustify
  direction?: TFlexDirection
}

/* eslint-disable */
export type TFlexAlign =
  | 'flex-start'
  | 'flex-end'
  | 'stretch'
  | 'center'
  | 'unset'

export type TFlexJustify =
  | 'space-between'
  | 'space-evenly'
  | 'space-around'
  | 'flex-start'
  | 'flex-end'
  | 'center'

export type TFlexWrap =
  | 'nowrap'
  | 'wrap'

export type TFlexDirection =
  | 'column-reverse'
  | 'row-reverse'
  | 'column'
  | 'row'
/* eslint-enable */

export type TShadowConstructorArgs = {
  x?: number
  y?: number
  blur?: number
  color?: string
}

export type TBorderConstructorArgs = {
  width?: number
  style?: TBorderStyle
  color?: string
}

/* eslint-disable */
export type TBorderStyle =
  | 'none'
  | 'solid'
  | 'inset'
  | 'dashed solid'
  | 'dashed double none'
  | 'dashed groove none dotted'