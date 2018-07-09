import * as yup from 'yup'
import { setLocale } from 'yup/lib/customLocale'

import { ptBR } from '../dictionary/dictionary'

setLocale(ptBR)

const getValidators = data =>
  yup.object().shape(
    Object.entries(data).reduce((acc, obj) => {
      const [ key, field ] = obj
      return {
        ...acc,
        [key]: formatValidate(field.validate)
      }
    }, {})
  )

const formatValidate = data =>
  data.reduce((acc, validate) => {
    const [ type, ...params ] = Array.isArray(validate)
      ? validate
      : [validate]

    return acc[type](...params)
  }, yup)

const schema = data => getValidators(data)

export default schema
