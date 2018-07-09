import React from 'react'

const Feedback = ({ errors }) => (
  errors
    ? <span className="feedback">{ errors }</span>
    : null
)

export default Feedback
