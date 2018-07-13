import React from 'react'
import Select from 'react-select'

const SelectField = props => {
  const {
    value,
    onChanges,
    item: {
      name,
      options,
      placeholder,
      noOptionsMessage,
    }
  } = props
  return (
    <Select
      className="select-wrap"
      classNamePrefix="select"
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
