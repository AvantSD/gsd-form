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
      item: {
        component,
        field,
        label,
        validate,
        noOptionsMessage,
        options,
        useObject,
        disabled,
        ...rest,
      }
    } = this.props

    return (
      <Select
        {...rest}
        isDisabled={disabled}
        options={options}
        className="gsd-form-select-wrap"
        classNamePrefix="gsd-form-select"
        noOptionsMessage={() => noOptionsMessage}
        value={this.getValue(value, options)}
        onChange={e => onChanges(this.valueChange(e))}
      />
    )
  }
}

export default SelectField
