import React, { Component } from 'react'

import InputField from './InputField'
import SelectField from './SelectField'

class Fields extends Component {

  constructor (props) {
    super(props)
    switch (props.item.component) {
      case 'select':
        this.component = SelectField
        break
      default:
        this.component = InputField
        break
    }
  }

  render() {
    const Component = this.component
    return <Component {...this.props} />
  }
}

export default Fields
