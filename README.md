<h1 align="center">AngaBlue Eslint Config 🧑🏻‍💻</h1>
<p align="center">
  <a href="https://www.npmjs.com/package/@angablue/eslint-config" target="_blank">
    <img alt="Downloads" src="https://img.shields.io/npm/dm/@angablue/eslint-config.svg?color=blue">
  </a>
  <a href="https://www.npmjs.com/package/@angablue/eslint-config" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@angablue/eslint-config.svg">
  </a>
  <a href="https://github.com/AngaBlue/eslint/blob/master/LICENSE" target="_blank">
    <img alt="License: LGPL--3.0--or--later" src="https://img.shields.io/npm/l/@angablue/eslint-config?color=green" />
  </a>
</p>

A comprehensive Eslint configuation package for JavaScript & TypeScript projects, with support for React.

### 🏠 [Homepage](https://github.com/AngaBlue/eslint-config#readme)

## Install

Install this package and it's peer dependencies with your package manager of choice.

```sh
npm i -D @angablue/eslint-config eslint prettier
```

or

```sh
yarn add -D @angablue/eslint-config eslint prettier
```

## Usage
Then create the file `.eslintrc.js` in the root directory of your project with the contents:

```js
module.exports = {
  extends: '@angablue',
};
```

You may also want to add a script to your `package.json` in order to quickly lint and fix problems with your code.

```json
"scripts": {
    "lint": "eslint . --ext js,jsx,ts,tsx --fix"
}
```

Now you can, manually lint using the command `npm run lint` or `yarn lint`, while also receiving inline suggestions and warnings in your editor with the appropriate `eslint` extension installed.
## Author

👤 **AngaBlue <contact@anga.blue>**

* Website: https://anga.blue
* Github: [@AngaBlue](https://github.com/AngaBlue)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/AngaBlue/eslint-config/issues). You can also take a look at the [contributing guide]( ).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [AngaBlue <contact@anga.blue>](https://github.com/AngaBlue).<br />
This project is [LGPL--3.0--or--later](https://github.com/AngaBlue/eslint/blob/master/LICENSE) licensed.
