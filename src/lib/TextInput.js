import React from 'react'
import './TextInput.css'

const TextInput = ({ type = 'text', label, value, onChange }) => (
  <div className="simple-form-group">
    { label && <label className="simple-text-label">{ label }</label> }
    <input
      className="simple-text-input"
      type={type}
      value={value}
      onChange={e => onChange && onChange(e.target.value)}
    />
  </div>
)

export default TextInput
