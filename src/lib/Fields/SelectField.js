import React, { Component } from 'react'
import Select from 'react-select'

class SelectField extends Component {
  constructor (props) {
    super(props)
    const { item } = props
    if (item.useObject) {
      this.getValue = value => value
      this.valueChange = option => option
    } else {
      this.getValue = (value, options) =>
        options.find(option => option.value === value) || null
      this.valueChange = option => option.value
    }
  }

  render () {
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
        options,
        useObject,
        ...rest,
      }
    } = this.props

    return (
      <Select
        {...rest}
        options={options}
        className={`gsd-form-select-wrap ${error ? 'gsd-form-error' : ''}`}
        classNamePrefix="gsd-form-select"
        noOptionsMessage={() => noOptionsMessage}
        value={this.getValue(value, options)}
        onChange={e => onChanges(this.valueChange(e))}
      />
    )
  }
}

export default SelectField
