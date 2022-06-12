/* useValidation */
export type TUseValidationHook = <K extends string = string>(
  schema: TUseValidation<K>['input']['schema'],
  isEnabled?: TUseValidation<K>['input']['isEnabled'],
) => TUseValidation<K>['output']

export type TUseValidation<K extends string = string> = {
  input: {
    schema: TSchema<K>
    isEnabled: boolean
  }
  output: {
    errors: Array<TUseValidation['input']['schema'][0]['error']>
    isValid: boolean
    isEnabled: boolean
    validationSchema: TValidationSchema<K>
    validation: () => Promise<void>
    clearError: () => void
    enableValidation: () => void
    disableValidation: () => void
  }
}

type TSchema<K extends string> = {
  [key in K]: {
    condition: boolean
    error: string
  }
}

type TValidationSchema<K extends string> = {
  [key in K]: boolean
}

export type TConfigurateValidationSchema = <K extends string = string>(
  schema: TSchema<K>,
) => TValidationSchema<K>

export type TUsePagination<T = any> = {
  input: {
    data: Array<T>
    initialPage: number
    initialPerPage: number
  }
  output: {
    previousPage: () => void
    nextPage: () => void
    perPage: number
    isEnd: boolean
    list: Array<T>
    page: number
  }
}

export type TUsePaginationHook = <T = any>(
  input: TUsePagination<T>['input'],
) => TUsePagination<T>['output']
