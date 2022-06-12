import { DefaultStateProps } from '../types'

export type TInitialState = DefaultStateProps & {
  orders: Array<any> | null
  currentOrder: any | null
}
