import React, { Component } from 'react'
import { Formik } from 'formik'
import ReCAPTCHA from 'react-google-recaptcha'

import { FieldComponent } from '../Fields'
import schema from '../validate'

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

class InnerForm extends Component {

  onSubmit (e) {
    e.preventDefault()
    if (this.refs.recaptcha) {
      this.refs.recaptcha.execute()
    } else if (!this.props.data.recaptcha) {
      this.props.submitForm()
    }
  }

  formatValuesSubmit (recaptcha) {
    const params = {
      ...this.props.values,
      recaptcha,
    }
    this.props.setValues(params)
    this.props.submitForm()
    this.refs.recaptcha.reset()
  }

  render() {
    const {
      values,
      errors,
      touched,
      isSubmitting,
      data
    } = this.props

    return (
      <form>
        {
          formatData(data.form).map((item, key) =>
            <FieldComponent
              key={key}
              item={item}
              value={values[item.field]}
              error={touched[item.field] && errors[item.field]}
              {...this.props}
            />
          )
        }
        <button
          type="submit"
          disabled={isSubmitting}
          onClick={e => this.onSubmit(e)}
        >
          Submit
        </button>
        {
          data.recaptcha && data.recaptcha.sitekey &&
          <ReCAPTCHA
            ref="recaptcha"
            size={data.recaptcha.size || 'invisible'}
            sitekey={data.recaptcha.sitekey}
            onChange={captcha => this.formatValuesSubmit(captcha)}
          />
        }

        {/* // TODO: REMOVER */}
        <DisplayFormikState {...this.props} />
      </form>
    )
  }
}

const GsdForm = ({ data, handleSubmit, handleChanges }) => (
  data && data.form ?
    <Formik
      initialValues={{ ...formInitialValues(data.form) }}
      validationSchema={schema(data.form)}
      onSubmit={values => handleSubmit(values)}
      render={props =>
        <InnerForm handleChanges={handleChanges} data={data} {...props} />
      }
    /> : <div/>
)

export default GsdForm
