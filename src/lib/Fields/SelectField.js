import React from 'react'
import Select from 'react-select'

const SelectField = props => {
  const {
    value,
    onChanges,
    error,
    item: {
      name,
      options,
      placeholder,
      noOptionsMessage,
    }
  } = props
  return (
    <Select
      className={`gsd-form-select-wrap ${error ? 'gsd-form-error' : ''}`}
      classNamePrefix="gsd-form-select"
      placeholder={placeholder}
      noOptionsMessage={() => noOptionsMessage}
      name={name}
      options={options}
      value={value}
      onChange={e => onChanges(e)}
    />
  )
}

export default SelectField
