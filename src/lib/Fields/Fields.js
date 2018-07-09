import React from 'react'
import { Field } from 'formik'

import Feedback from '../Feedback/Feedback'

const Fields = ({
  data,
  value,
  handleChange,
  handleBlur,
  errors,
}) => (
  <div className="field-group">
    <label>{ data.label }</label>
    <Field
      component={data.component}
      type={data.type}
      name={data.name}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
    >
      {
        data.component === 'select'
          ? data.options.map((item, key) =>
            <option value={item} key={key}>{ item }</option>
          )
          : null
      }
    </Field>

    <Feedback errors={errors} />
  </div>
)

export default Fields
