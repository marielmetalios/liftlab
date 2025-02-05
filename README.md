# <LiftLab>

https://github.com/marielmetalios/liftlab

## Description

This website was designed to simplify daily workout planning and routine building. To access our website, users must sign in with a username. From there, they are prompted to select a muscle group they want to workout, can browse a variety of exercises displayed as interactive cards. These workouts are stored and retrieved from our PostgreSQL database. Users can build a custom workout routine by clicking on the cards. Want to add your own workouts into our database, and ultimately to your routine? You can do that as well! Once you've finished your workout, you can mark exercises as complete, delete them from your list, or save it as a favorite.

This project was developed as part of our software development bootcamp for academic and practical learning purposes. We have some fun NPM packages included, like React-Confetti to celebrate when you complete a workout, and Quote-Liv to motivate you to start. 

## Installation

N/A

## Usage

## Credits
We used a number of external resources for assitance during this project: Xpert (Columbia EdX) / ChatGPT / Stackoverflow

Deployed through: Render
Frontend: Vite, React, TypeScript
Backend: Express, PostgreSQL

Collaborators
    - Mariel Metalios
    - Oscar Oh
    - Chad B. Webster

## License

MIT License

Copyright (c) [2025]


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
