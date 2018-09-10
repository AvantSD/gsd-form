import React, { Component } from 'react'
import { Formik } from 'formik'
import ReCAPTCHA from 'react-google-recaptcha'

import { FieldComponent } from '../Fields'
import schema from '../validate'

const ShowFormState = props =>
  <div style={{ margin: '1rem 0' }}>
    <pre
      style={{
        background: '#f6f8fa',
        fontSize: '.8rem',
        padding: '1rem',
      }}
    >
      <strong>props</strong> = { JSON.stringify(props, null, 2) }
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
  state = {
    isSpam: false
  }

  onSubmit (e) {
    e.preventDefault()
    if (this.refs.recaptcha) {
      this.refs.recaptcha.execute()
    } else if (!this.props.data.recaptcha && !this.state.isSpam) {
      this.props.submitForm()
    }
  }

  formatValuesSubmit (recaptcha) {
    if (this.state.isSpam) {
      return
    }
    
    const params = {
      ...this.props.values,
      recaptcha,
    }
    this.props.setValues(params)
    this.props.submitForm()
    this.refs.recaptcha.reset()
  }

  handleHoneypot () {
    this.setState({ isSpam: true })
  }

  render () {
    const {
      values,
      errors,
      touched,
      isSubmitting,
      data,
      buttonProps,
    } = this.props

    const { form: { submitButton }, recaptcha } = data

    let ButtonComponent
    if (submitButton.component) {
      ButtonComponent = submitButton.component
    }

    const btnProps = {
      type: 'submit',
      disabled: isSubmitting,
      onClick: e => this.onSubmit(e),
      ...buttonProps(this.props),
    }

    return (
      <form className="gsd-form">
        {
          formatData(data.form.fields).map((item, key) =>
            <FieldComponent
              key={key}
              item={item}
              value={values[item.field]}
              error={touched[item.field] && errors[item.field]}
              {...this.props}
            />
          )
        }
        {
          data.honeypot &&
            <input
              onChange={() => this.handleHoneypot()}
              type="checkbox"
              name="user-terms"
              value="true"
              tabIndex="-1"
              style={{ display: 'none' }}
              autoComplete="nope">
            </input>
        }
        {
          (submitButton && submitButton.component) ?
            <ButtonComponent {...btnProps} /> :
            <button className="gsd-form-button" {...btnProps}>
              { submitButton.text || 'Submit' }
            </button>
        }
        {
          recaptcha && recaptcha.sitekey &&
          <ReCAPTCHA
            ref="recaptcha"
            size={recaptcha.size || 'invisible'}
            sitekey={recaptcha.sitekey}
            onChange={captcha => this.formatValuesSubmit(captcha)}
          />
        }
        {
          data.showFormState &&
          <ShowFormState {...this.props} />
        }
      </form>
    )
  }
}

const GsdForm = ({
  data,
  handleSubmit,
  handleChanges,
  buttonProps,
}) => (
  data && data.form ?
    <Formik
      initialValues={{ ...formInitialValues(data.form.fields) }}
      validationSchema={schema(data.form.fields)}
      onSubmit={(values, setters) => handleSubmit(values, setters)}
      render={props =>
        <InnerForm
          data={data}
          handleChanges={handleChanges || (() => {})}
          buttonProps={buttonProps || (() => {})}
          {...props}
        />
      }
    /> : <div />
)

export default GsdForm
