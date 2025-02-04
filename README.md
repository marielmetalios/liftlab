# <LiftLab>

https://github.com/marielmetalios/liftlab

## Description

This website was created with the intent to simplify daily workouts. Users can sign in with a username, select a muscle group they want to focus on, and our we provide a variety of workouts generated as cards associated with that muscle group, which are stored and pulled from our postgresSQL database. From there, each card can be clicked to be added to a "routine". Users also have the option to add workouts to our database, in the case that they would like to add their personal workouts to their custom routine as well. This project was built for mostly academic purposes as we progress in our software development bootcamp. The core of this project is built with Vite, Typescript, Express, and React. 

## Installation

N/A

## Usage

## Credits

Collaborators
    - Mariel Metalios
    - Oscar Oh
    - Chad W Broome

## License

MIT License

Copyright (c) [2025]

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
