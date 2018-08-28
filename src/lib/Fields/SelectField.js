import React from 'react'
import Select from 'react-select'

const SelectField = props => {
  const {
    value,
    onChanges,
    error,
    item: {
      component,
      field,
      label,
      validate,
      noOptionsMessage,
      ...rest,
    }
  } = props

  return (
    <Select
      {...rest}
      className={`gsd-form-select-wrap ${error ? 'gsd-form-error' : ''}`}
      classNamePrefix="gsd-form-select"
      noOptionsMessage={() => noOptionsMessage}
      value={value}
      onChange={e => onChanges(e)}
    />
  )
}

export default SelectField
