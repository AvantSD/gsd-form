import React, { Component } from 'react'
import { Field } from 'formik'

import Feedback from '../Feedback/Feedback'
import formats from '../format'

class Fields extends Component {

  handleChange (e) {
    const { setFieldValue, item: { name, format } } = this.props
    const value = format ? formats[format](e.target.value) : e.target.value
    setFieldValue(name, value)
  }

  render() {
    const {
      value,
      error,
      item: {
        label,
        component,
        type,
        name,
        options,
      },
    } = this.props

    return (
      <div className="field-group">
        <label>{ label }</label>
        <Field
          component={component}
          type={type}
          name={name}
          onChange={e => this.handleChange(e)}
          value={value}
        >
          {
            component === 'select'
              ? options.map((item, key) =>
                <option value={item} key={key}>{ item }</option>
              )
              : null
          }
        </Field>
        <Feedback errors={error} />
      </div>
    )
  }
}

export default Fields
