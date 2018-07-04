# GsdForm

## Instalação
```
yarn add gsd-form
```

## Usando no projeto
```
import GsdForm from 'gsd-form'

<GsdForm data={<[OBJECT]>}/>
```

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
