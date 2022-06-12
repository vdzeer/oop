import { useState, useCallback, useEffect } from 'react'
import {
  TConfigurateValidationSchema,
  TUseValidationHook,
  TUseValidation,
} from './types'

//@ts-ignore
const configurateValidationSchema: TConfigurateValidationSchema = schema => {
  //@ts-ignore
  return Object.fromEntries<boolean>(
    Object.keys(schema).map<[string, boolean]>(key => [
      key,
      //@ts-ignore
      schema[key].condition,
    ]),
  )
}

export const useValidation: TUseValidationHook = (
  schema,
  initialIsEnabled = false,
) => {
  const [isEnabled, toogleEnabled] =
    useState<TUseValidation['output']['isEnabled']>(initialIsEnabled)
  const [isValid, toggleValid] =
    useState<TUseValidation['output']['isValid']>(false)

  const [validationSchema, setValidationSchema] = useState<
    TUseValidation['output']['validationSchema']
  >(configurateValidationSchema(schema))

  const [errors, setErrors] = useState<TUseValidation['output']['errors']>([])

  const clearError = useCallback<TUseValidation['output']['clearError']>(() => {
    setErrors([])
  }, [setErrors])

  const enableValidation = useCallback(
    () => toogleEnabled(true),
    [toogleEnabled],
  )

  const disableValidation = useCallback(
    () => toogleEnabled(false),
    [toogleEnabled],
  )

  const validation = useCallback<
    TUseValidation['output']['validation']
  >(async () => {
    return new Promise((resolve, reject) => {
      try {
        const errorStrings: TUseValidation['output']['errors'] = []

        for (const key in schema) {
          const { condition, error } = schema[key]
          if (!condition) errorStrings.push(error)
          else continue
        }

        if (errorStrings.length) throw new Error(errorStrings.join(','))

        clearError()
        resolve()
      } catch ({ message }) {
        const errorMessages: TUseValidation['output']['errors'] = [
          ...(message as string).split(','),
        ]
        setErrors(errorMessages)
        reject(errorMessages)
      }
    })
  }, [schema, clearError])

  useEffect(() => {
    toggleValid(Object.values(validationSchema).every(value => value))
  }, [validationSchema, toggleValid])

  useEffect(() => {
    const wrapper = async (cb: any) => {
      try {
        setValidationSchema(configurateValidationSchema(schema))
        await cb()
      } catch {}
    }

    wrapper(validation)
  }, [schema, validation])

  return {
    validationSchema,
    isEnabled,
    isValid,
    errors,
    disableValidation,
    enableValidation,
    validation,
    clearError,
  }
}
