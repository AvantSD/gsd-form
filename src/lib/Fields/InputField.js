import React from 'react'
import { Field } from 'formik'

const InputField = props => {
  const { value, error, onChanges, item: { component, type, name } } = props
  return (
    <Field
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
