<p>
  <img width="112" alt="screen shot 2016-10-25 at 2 37 27 pm" src="https://cloud.githubusercontent.com/assets/13041/19686250/971bf7f8-9ac0-11e6-975c-188defd82df1.png">
</p>

# Next.js Starter Project

## Features
- [SASS](https://sass-lang.com/)
- [Stylelint](https://stylelint.io/)
- [Eslint](https://eslint.org/)
- [Browserlist](https://github.com/browserslist/browserslist)
- [PostCSS](https://postcss.org/)
- [Jest](https://jestjs.io/)
- [Storybook](https://storybook.js.org/)

## Directory Structure
```
.
├── src/
|   ├── components/                 # Todos os componentes do projeto.
|   |   ├── example/                # Cada componente em sua devida pasta.
|   |   |   ├── index.js            # Cada pasta do seu componente com um index.js para exportar o componente e suas variações.
|   |   |   ├── example.js
|   |   |   ├── example.test.js
|   |   |   ├── example.scss
|   |   |   └── example.story.js    # História do componente montada no Storybook.
|   |   ├── ...
|   |   └── index.js                # Exportação de todos os componentes para se utilizar nas páginas.
|   ├── helpers/                    # Helpers apaixonantes do Edmar.
|   |   └── ...                     # Alguns outros helpers (ex: media, transform...).
|   ├── pages/                      # As paginas que compoem o projeto.
|   |   ├── article/
|   |   |   ├── index.js
|   |   |   └── article.scss        # Estilo para a diagramação da página.
|   |   ├── ...
|   |   └── index.js                # Página inicial.
|   ├── reducers/                   # Todos os reducers vem nesta pasta.
|   |   ├── article/
|   |   └── ...
|   ├── requests/                   # Funções para realizar os requests na API.
|   |   └── ...
|   ├── styles/                     # Estilos globais da aplicação.
|   |   ├── ...
|   |   └── index.scss              # Arquivo de entry para os estilos.
|   └── config.js                   # Arquivo contendo as URL's da API.
├── routes.js
├── server.js
├── README.md
└── ...
```

## Scripts


## VSCode Plugins Suggestions
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)
