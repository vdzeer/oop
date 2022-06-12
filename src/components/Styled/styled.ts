import styled from 'styled-components'
import { TAdaptiveDividerProps } from './types'
import { MediaBreakpoints } from '../../helpers'

export const AdaptiveHeightDivider = styled.div<TAdaptiveDividerProps>(
  ({ initial, unit = 'px', breakpoints }) => {
    const xl = breakpoints?.xl ?? initial
    const lg = breakpoints?.lg ?? xl
    const md = breakpoints?.md ?? lg
    const sm = breakpoints?.sm ?? md

    return `
    height: ${initial}${unit};

    @media (max-width: ${MediaBreakpoints.xl}px) {
      height: ${xl}${unit};
    }

    @media (max-width: ${MediaBreakpoints.lg}px) {
      height: ${lg}${unit};
    }

    @media (max-width: ${MediaBreakpoints.md}px) {
      height: ${md}${unit};
    }

    @media (max-width: ${MediaBreakpoints.sm}px) {
      height: ${sm}${unit};
    }
  `
  },
)

export const AdaptiveWidthDivider = styled.div<TAdaptiveDividerProps>(
  ({ initial, unit = 'px', breakpoints }) => {
    const xl = breakpoints?.xl ?? initial
    const lg = breakpoints?.lg ?? xl
    const md = breakpoints?.md ?? lg
    const sm = breakpoints?.sm ?? md

    return `
    width: ${initial}${unit};

    @media (max-width: ${MediaBreakpoints.xl}px) {
      width: ${xl}${unit};
    }

    @media (max-width: ${MediaBreakpoints.lg}px) {
      width: ${lg}${unit};
    }

    @media (max-width: ${MediaBreakpoints.md}px) {
      width: ${md}${unit};
    }

    @media (max-width: ${MediaBreakpoints.sm}px) {
      width: ${sm}${unit};
    }
  `
  },
)
