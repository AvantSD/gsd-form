# GsdForm

Formik-based React library to create forms from plain JS objects (or JSON!)

[Demo](https://codesandbox.io/s/zlrmp3o77l)

## Installing

```
yarn add gsd-form
```

## Usage

```jsx
import GsdForm from 'gsd-form'
import 'gsd-form/style.css' // Optional

class App extends Component {
  render() {
    return <GsdForm data={data} />
  }
}
```

### Form data example

```js
data = {
  form: {
    submitButton: {
      text: 'Send', // Optional. Default : Submit
      component: CustomComponent,
    },
    fields: { ... },
  },
  recaptcha: {
    size: 'invisible', // one of compact, normal, invisible
    sitekey: 'SITEKEY_CODE',
  },
  showFormState: Boolean // Optional
}

```

## Field props
| Property | Type | Description |
|:---- | ---- | ------ |
| label | `String` | Label text |
| name | `String` | Field (HTML input) name |
| component | `String` | Options - `input`, `textarea`, `select` |
| value | `String` | *Initial (default) value* |
| format | `String` | Options - `numeric`, `phone`, `date` |
| validate | `Array<String>` | `[Yup validator, Optional custom error message]`<br>ex.: `validate: [ 'string', ['email', 'Invalid email format'], 'required', ]`<br>[More](https://github.com/jquense/yup) |
| __Field Select__ | - | - |
| options | `Array<Object>` | Options for `select` inputs - `[{ value: 'One', label: 'One' }]` |
| placeholder | `String` | `select` placeholder text' |
| noOptionsMessage | `String` | Fallback text for empty `select` options |

## Method props

```jsx
class App extends Component {
  handleSubmit (value) {
    // send to a REST API ...
    console.log('onSubmit', value)
  }

  handleChanges (name, value) {
    // Called when each field changes
    console.log('handleChanges', name, value)
  }

  buttonProps (form) {
    // Called when each field changes
    console.log('buttonProps', form)
  }

  render() {
    return (
      <GsdForm
        data={data}
        handleSubmit={this.handleSubmit}
        handleChanges={(name, value) => this.handleChanges(name, value)}
        buttonProps={form => this.buttonProps(form)}
      />
    )
  }
}

export default App
```

You can use the `handleChanges` prop to, for example, change the available
options for interdependent `select` inputs, such as country/state/city.

## Dependencies

- [Formik](https://github.com/jaredpalmer/formik)
- [Yup](https://github.com/jquense/yup)
- [React select 2](https://github.com/JedWatson/react-select)
- [React Google Recaptcha](https://github.com/dozoisch/react-google-recaptcha)

## Contributing and developing

The projectwas created using `create-react-library`, so it should have its]
basic structure updated soon. Right now, all the lib content should reside
inside `src/lib`, everything else can be used when developing or as examples.

You can start the dev server running:

```
yarn start
```

A production version can be generated using:

```
yarn build
```
