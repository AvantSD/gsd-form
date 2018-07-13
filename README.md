# GsdForm

## Instalação
```
yarn add gsd-form
```

## Usando no projeto
```jsx
import GsdForm from 'gsd-form'
import 'gsd-form/style.css' // Opcional

class App extends Component {
  render() {
    return <GsdForm data={data} />
  }
}
```

## Exemplo de data
```js
data = {
  form: {
    field1: { ... },
    field2: { ... },
  },
  recaptcha: {
    size: 'invisible', // compact, normal, invisible
    sitekey: 'SITEKEY_CODE',
  }
}

```

## Propriedades dos Fields
| Propriedades | Tipo | Descrição |
|:---- | ---- | ------ |
| label | `String` | Valor da label |
| name | `String` | Nome do campo |
| component | `String` | Opções - `input`, `textarea`, `select` |
| value | `String` | *Adicionar caso tenha valor inicial* |
| format | `String` | Opções - `numeric`, `phone`, `date` |
| validate | `Array<String>` | `[Tipo de validador do Yup, Mensagem de erro]`<br>ex.: `validate: [ 'string', ['email', 'E-mail inválido'], 'required', ]`<br>[Saiba mais](https://github.com/jquense/yup) |
| __Field Select__ | - | - |
| options | `Array<Object>` | Opções do componente `select` - `[{ value: 'One', label: 'One' }]` |
| placeholder | `String` | Texto para o placeholder do `select` |
| noOptionsMessage | `String` | Texto para quando não houver resultados no `select` |

## Metodos
```jsx
class App extends Component {

  handleSubmit (value) {
    // Recebe os valores do formulário para o envio
    console.log('onSubmit', value)
  }

  handleChanges (name, value) {
    // Recebe os valores dos campos quando há mudanças
    console.log('handleChanges', name, value)
  }

  render() {
    return (
      <GsdForm
        data={data}
        handleSubmit={this.handleSubmit}
        handleChanges={(name, value) => this.handleChanges(name, value)}
      />
    )
  }
}

export default App
```

## Libs que usamos

- [Formik](https://github.com/jaredpalmer/formik)
- [Yup](https://github.com/jquense/yup)
- [React select 2](https://github.com/JedWatson/react-select)
- [React Google Recaptcha](https://github.com/dozoisch/react-google-recaptcha)

## Usando no desenvolvimento

Todo o conteúdo que deve ser publicado no registro (NPM ou privado) deve estar em `src/lib`. Fora dessa pasta (mas ainda dentro de `src/`), podem ficar scripts e páginas para desenvolvimento, testes e exemplos.

Para iniciar o servidor de desenvolvimento (iniciado em `src/index.js`):

```
yarn start
```

Para transpilar `src/lib` e criar uma build em `dist`:

```
yarn build
```

Para publicar no registro privado:

```
yarn publish
```

OBS: Apenas o `README.md` e a pasta `dist` são publicadas.
