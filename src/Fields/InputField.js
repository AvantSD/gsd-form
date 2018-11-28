import React from 'react'
import { Field } from 'formik'

const InputField = props => {
  const {
    value,
    onChanges,
    item: {
      component,
      type,
      name,
      disabled,
      placeholder,
    }
  } = props

  return (
    <Field
      disabled={disabled}
      component={component}
      type={type}
      name={name}
      onChange={e => onChanges(e.target.value)}
      value={value}
      placeholder={placeholder}
    />
  )
}

export default InputField
