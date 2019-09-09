# ReactJS Vanilla

A React JS + Core UI + Bootstrap, boilerplate starter kit.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [What's included](#whats-included)

## Installation

``` bash
# clone the repo
$ git clone https://github.com/dwisetiyadi/react-js-vanilla.git my-project

# go into app's directory
$ cd my-project

# copy and rename .env.example to .env
# edit .env file based on your needs

# install app's dependencies
$ npm install
```

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

see also:
[User Guide](CRA.md)

### Basic usage

``` bash
# running dev server with hot reload at http://localhost:3000
$ npm start
```

Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files.

### Unit Testing

``` bash
# running unit testing with hot reload (don't close your Terminal or any Command Line Tools)
$ npm test
```

On your Terminal, The app will automatically run unit testing if you change any of the source files. We used Jest for unit testing, [for further documentation](https://jestjs.io/docs/en/getting-started).

### Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
# build for production with minification
$ npm run build
```

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
App
├── public/          #static files
│   ├── assets/      #assets
│   └── index.html   #html template
│
├── src/             #project root
│   ├── assets/
│   ├── bootstrap/
│   ├── components/
│   ├── config/
│   ├── css/
│   ├── modules/
│   ├── scss/
│   ├── utilities/
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── serviceWorker.ts
│   └── setupTests.js
│
└── package.json
```

## Credits

* [CoreUI](https://coreui.io)
* [ReactJS](https://reactjs.org/)
* [Bootstrap](https://getbootstrap.com/)
