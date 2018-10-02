import React, { Component } from 'react'

import Fields from './Fields'
import formats from '../format'
import Feedback from '../Feedback/Feedback'
import classSet from '../util/classSet'

const isRequired = validate => {
  return !!validate.find(item => {
    if (Array.isArray(item)) {
      return item[0] === 'required'
    } else {
      return item === 'required'
    }
  })
}

class FieldComponent extends Component {

  onChanges (value) {
    const { setFieldValue, handleChanges, item: { name, format } } = this.props
    const values = format ? formats[format](value) : value
    setFieldValue(name, values)
    handleChanges(name, values)
  }

  render () {
    const { error, item: { label, fieldClass, validate } } = this.props
    const classes = {
      'gsd-form-field': true,
      'gsd-form-error': error,
      'gsd-form-required': isRequired(validate),
    }

    return (
      <div className={classSet(classes, fieldClass)}>
        { label && <label>{ label }</label> }
        <Fields onChanges={e => this.onChanges(e)} {...this.props} />
        <Feedback errors={error} />
      </div>
    )
  }
}

export default FieldComponent
