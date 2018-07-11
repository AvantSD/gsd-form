# GsdForm

## Instalação
```
yarn add gsd-form
```

## Usando no projeto
```jsx
import GsdForm from 'gsd-form'

class App extends Component {

  handleSubmit (value) {
    // Recebe os valores do formulário para o envio
    console.log('onSubmit', value)
  }

  render() {
    return (
      <GsdForm data={data} handleSubmit={this.handleSubmit} />
    )
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
| options | `Array` | Opções do componente `select` |
| format | `String` | Opções - `numeric`, `phone`, `date` |
| validate | `Array` | `[Tipo de validador do Yup, Mensagem de erro]`<br>ex.: `validate: [ 'string', ['email', 'E-mail inválido'], 'required', ]`<br>[Saiba mais](https://github.com/jquense/yup) |

## Libs que usamos

- [Formik](https://github.com/jaredpalmer/formik)
- [Yup](https://github.com/jquense/yup)
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
