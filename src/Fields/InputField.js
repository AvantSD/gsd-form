import React from 'react'
import { Field } from 'formik'

const InputField = props => {
  const { value, onChanges, item } = props
  const {
    validate,
    field,
    fieldClass,
    format,
    ...rest,
  } = item

  return (
    <Field
      {...rest}
      onChange={e => onChanges(e.target.value)}
      value={value}
    />
  )
}

export default InputField
