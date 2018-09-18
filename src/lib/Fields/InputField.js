import React from 'react'
import { Field } from 'formik'

const InputField = props => {
  const { value, onChanges, item: { component, type, name, disabled } } = props
  return (
    <Field
      disabled={disabled}
      className={error ? 'gsd-form-error' : ''}
      component={component}
      type={type}
      name={name}
      onChange={e => onChanges(e.target.value)}
      value={value}
    />
  )
}

export default InputField
