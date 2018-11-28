import React from 'react'

const Feedback = ({ errors }) => (
  errors
    ? <span className="gsd-form-feedback">{ errors }</span>
    : null
)

export default Feedback
