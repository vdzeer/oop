import { TMediaQueryBreakpoints } from "../../helpers/types"

export type TAdaptiveDividerProps = {
  initial: number
  unit?: TUnitTypes
} & {
  breakpoints?: {
    [breakpoint in TMediaQueryBreakpoints]?: number
  }
}

export type TUnitTypes = '%' | 'px'
