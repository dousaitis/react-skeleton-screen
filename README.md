# react-skeleton-screen [![npm package][npm-badge]][npm]

[npm-badge]: https://img.shields.io/npm/v/react-skeleton-screen.svg?style=flat-square
[npm]: https://www.npmjs.com/package/react-skeleton-screen

[`react-skeleton-screen`](https://www.npmjs.com/package/react-skeleton-screen) is essentially a blank 
version of a page into which information is gradually loaded.

## Installation

Using [yarn](https://yarnpkg.com/):

    $ yarn add react-skeleton-screen

Then, use as you would anything else:

```js
// using ES6 modules
import { Skeleton } from "react-skeleton-screen";

// using CommonJS modules
var Skeleton = require("react-broadcast").Skeleton;
```


## Usage

```js
import React from 'react';
import { Skeleton } from 'react-skeleton-screen';
import 'react-skeleton-screen/build/skeleton.css';
//or if you use scss
//import 'react-skeleton-screen/scss/Skeleton.scss';

const App = ({ isLoading }) => (
  isLoading
    ? <Skeleton width="100%" height="60px" />
    : <div>Your app has been loaded!</div>
);

export default App;
```
