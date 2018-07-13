import React, { Component } from 'react'
import locale from './locale'

import { GsdForm } from './lib'

const json = {
  form: {
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
      format: 'phone',
      validate: [
        'string',
        ['max', 15],
        ['min', 3],
        'required'
      ],
    },
    country: {
      label: 'País',
      component: 'select',
      name: 'country',
      value: [],
      options: [],
      placeholder: 'Selecione um país',
      noOptionsMessage: 'Nenhum país encontrado',
      validate: [
        'string',
        'required'
      ],
    },
    state: {
      label: 'Estado',
      component: 'select',
      name: 'state',
      value: [],
      options: [],
      placeholder: 'Selecione um estado',
      noOptionsMessage: 'Nenhum estado encontrado',
      validate: [
        'string',
        'required'
      ],
    },
  },
  recaptcha: {
    size: 'invisible',
    sitekey: '6LcXrl8UAAAAAI_JQD14ud3VM9IXLTEr02gX_7QL',
  },
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: {},
    }
  }

  componentDidMount() {
    const country = locale.map(item => ({
      value: item.countryShortCode,
      label: item.countryName,
    }))
    this.setState({
      ...json,
      data: {
        ...json,
        form: {
          ...json.form,
          country: {
            ...json.form.country,
            options: country
          }
        }
      }
    })
  }

  setStatesByCountry (value) {
    const states = locale
      .filter(item => value.label ? item.countryName === value.label : true)
      .reduce((acc, item) => item.regions.map(item => ({
        value: item.shortCode,
        label: item.name,
      })), [])

    this.setState(prevState => ({
      ...prevState,
      data: {
        ...prevState.data,
        form: {
          ...prevState.data.form,
          state: {
            ...prevState.data.form.state,
            options: states
          }
        }
      }
    }))
  }

  handleSubmit (value) {
    console.log('onSubmit', value)
  }

  handleChanges (name, value) {
    console.log('handleChanges', name, value)
    this.setStatesByCountry(value)
  }

  render() {
    return (
      <GsdForm
        data={this.state.data}
        handleSubmit={this.handleSubmit}
        handleChanges={(name, value) => this.handleChanges(name, value)}
      />
    )
  }
}

export default App
