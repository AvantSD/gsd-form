import React, { Component } from 'react'
import { withFormik } from 'formik'

import { Fields } from '../Fields'
import schema from '../validate'

// TODO: REMOVER
const json = {
  email: {
    label: 'E-mail',
    component: 'input',
    type: 'email',
    name: 'email',
    value: 'teste@email.com',
    validate: [
      'string',
      ['email', 'E-mail inválido'],
      'required'
    ],
  },
  phone: {
    label: 'Telefone',
    component: 'input',
    type: 'text',
    name: 'phone',
    value: '',
    validate: [
      'string',
      ['max', 15],
      ['min', 3],
      'required'
    ],
  },
  subject: {
    label: 'Assunto',
    component: 'select',
    name: 'subject',
    value: '',
    options: ['', 'Elegios', 'Dúvidas'],
    validate: [
      'string',
      'required'
    ],
  }
}

// TODO: REMOVER
const DisplayFormikState = props =>
  <div style={{ margin: '1rem 0' }}>
    <pre
      style={{
        background: '#f6f8fa',
        fontSize: '.8rem',
        padding: '1rem',
      }}
    >
      <strong>props</strong> = {JSON.stringify(props, null, 2)}
    </pre>
  </div>

const formatData = data =>
  Object.entries(data).reduce((res, fieldData) =>
    res.concat({
      ...fieldData.pop(),
      field: fieldData.shift()
    }), [])

const formInitialValues = data =>
  Object.keys(data).reduce((acc, item) => ({
    ...acc,
    [item]: data[item].value
  }), {})

const InnerForm = props => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    data
  } = props
  return (
    <form onSubmit={handleSubmit}>
      {
        formatData(data).map((item, key) =>
          <Fields
            key={key}
            data={item}
            value={values[item.field]}
            errors={touched[item.field] && errors[item.field]}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        )
      }

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>

      {/* // TODO: REMOVER */}
      <DisplayFormikState {...props} />
    </form>
  )
}

const MyForm = withFormik({
  mapPropsToValues: ({ data }) => ({ ...formInitialValues(data) }),
  validationSchema: ({ data }) => schema(data),
  handleSubmit: (
    values,
    {
      props,
      setSubmitting,
      setErrors,
    }
  ) => {
    console.log(values)
  },
})(InnerForm)

class GsdForm extends Component {
  render() {
    return (
      <MyForm data={json} />
    )
  }
}

export default GsdForm
