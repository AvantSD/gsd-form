import React from 'react'
import { Field } from 'formik'

const InputField = props => {
  const { value, onChanges, item: { component, type, name } } = props
  return (
    <Field
      component={component}
      type={type}
      name={name}
      onChange={e => onChanges(e.target.value)}
      value={value}
    />
  )
}

export default InputField
