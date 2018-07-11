import * as yup from 'yup'
import { setLocale } from 'yup/lib/customLocale'

import { ptBR } from '../dictionary/dictionary'

setLocale(ptBR)

const getValidators = data => {
  let validate = {}
  return yup.object().shape(
    Object.entries(data).reduce((acc, obj) => {
      const [ key, field ] = obj
      if (key === field.name && field.validate) {
        validate = {
          ...acc,
          [key]: formatValidate(field.validate)
        }
      }
      return validate
    }, {})
  )
}

const formatValidate = data =>
  data && data.reduce((acc, validate) => {
    const [ type, ...params ] = Array.isArray(validate)
      ? validate
      : [validate]

    return acc[type](...params)
  }, yup)

const schema = data => getValidators(data)

export default schema
