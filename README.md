<div align="center">
    <h1>🧑🏻‍💻 AngaBlue Eslint Config</h1>
    <p>
    <a href="https://www.npmjs.com/package/@angablue/eslint-config">
        <img alt="downloads" src="https://img.shields.io/npm/v/@angablue/eslint-config.svg?orange=blue" target="_blank" />
    </a>
    <a href="https://www.npmjs.com/package/@angablue/eslint-config">
        <img alt="downloads" src="https://img.shields.io/npm/dm/@angablue/eslint-config.svg?color=blue" target="_blank" />
    </a>
    <a href="https://github.com/kefranabg/@angablue/eslint-config/blob/master/LICENSE">
        <img alt="License" src="https://img.shields.io/npm/l/@angablue/eslint-config?color=green" target="_blank" />
    </a>
    </p>
    <p>A comprehensive Eslint configuation package for JavaScript & TypeScript projects, with support for React.</p>
    </div>
    
# Installation
Install this package and it's peer dependencies with your package manager of choice.

```sh
npm i -D @angablue/eslint-config eslint prettier
```

or

```sh
yarn add -D @angablue/eslint-config eslint prettier
```

Then create the file `.eslintrc.js` in the root director of your project with the contents:

```js
module.exports = {
  extends: "@angablue",
};
```

You may also want to add a script to your `package.json` in order to quickly lint and fix problems with your code.

```json
"scripts": {
    "lint": "eslint . --ext js,jsx,ts,tsx --fix"
}
```

Now you can, manually lint using the command `npm run lint` or `yarn lint`, while also receiving inline suggestions and warnings in your editor with the appropriate `eslint` extension installed.
