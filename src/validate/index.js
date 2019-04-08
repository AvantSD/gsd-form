import * as yup from 'yup'
import { setLocale } from 'yup/lib/customLocale'

import { ptBR } from '../dictionary/dictionary'

setLocale(ptBR)

const getValidators = data => {
  let validate = {}
  const dataArray = Array.isArray(data) ? data : [ data ]
  const yupObject = dataArray
    .map(item => item.fields ? item.fields : item)
    .reduce((acc, item) => ({ ...acc, ...item }) , {})

  return yup.object().shape(
    Object.entries(yupObject).reduce((acc, obj) => {
      const [key, field] = obj
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
    const [type, ...params] = Array.isArray(validate)
      ? validate
      : [ validate ]

    return acc[type](...params)
  }, yup)

const schema = data => getValidators(data)

export default schema
