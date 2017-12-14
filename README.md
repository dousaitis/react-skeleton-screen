# react-skeleton-screen [![Travis][build-badge]][build] [![npm package][npm-badge]][npm]

[build-badge]: https://img.shields.io/travis/johndous/react-skeleton-screen/master.svg?style=flat-square
[build]: https://travis-ci.org/johndous/react-skeleton-screen

[npm-badge]: https://img.shields.io/npm/v/react-skeleton-screen.svg?style=flat-square
[npm]: https://www.npmjs.com/package/react-skeleton-screen

[`react-skeleton-screen`](https://www.npmjs.com/package/react-skeleton-screen) is essentially a blank 
version of a page into which information is gradually loaded.

|Skeleton screen | Loaded screen |
|----------------|---------------|
|![Screen Shot 2017-12-14 at 00.31.35.png](https://s3.eu-central-1.amazonaws.com/johndous.com/e03c007c472460fbe60f3cddd0b45a4d1513206061074.png)|![loaded.png](https://s3.eu-central-1.amazonaws.com/johndous.com/d24496f04965f728fa453c6779f185d91513213794777.png)|

## Installation

Using [yarn](https://yarnpkg.com/):

    $ yarn add react-skeleton-screen

Then, use as you would anything else:

```js
// using ES6 modules
import { Skeleton } from 'react-skeleton-screen'

// using CommonJS modules
var Skeleton = require('react-skeleton-screen').Skeleton
```


## Usage

```js
import React from 'react'
import { Skeleton } from 'react-skeleton-screen'
import 'react-skeleton-screen/build/skeleton.css'
// using scss
//import 'react-skeleton-screen/scss/Skeleton.scss'

const App = ({ isLoading }) => (
  isLoading
    ? <div>
        <Skeleton width="160px" height="30px" />
        <Skeleton width="70%" height="25px" marginLeft="30px" />
        <Skeleton width="60%" height="25px" marginLeft="30px" />
        <Skeleton width="110px" height="30px" />
        <Skeleton width="55%" height="25px" marginLeft="30px" />
        <Skeleton width="140px" height="30px" />
        <Skeleton width="55%" height="25px" marginLeft="30px" />
        <Skeleton width="65%" height="25px" marginLeft="30px" />
        <Skeleton width="90px" height="30px" />
        <Skeleton width="80%" height="25px" marginLeft="30px" />
        <Skeleton width="65%" height="25px" marginLeft="30px" />
      </div>
    : <div>Your app has been loaded!</div>
)

export default App
```
## API
| Prop  | Type   | Default | Description |
|-------|--------|---------|-----------------|
| width | string | `100%`  | The width of the Skeleton. Eg: `100px` or `20%` or `10em` |
| height| string | `100%`  | The height of the Skeleton. Eg: `40px` |
| marginTop | string | `0` | The margin-top of the Skeleton. Eg: `5px` |
| marginRight | string | `0` | The margin-right of the Skeleton. Eg: `5px` |
| marginBottom | string | `0` | The margin-bottom of the Skeleton. Eg: `10px` |
| marginLeft | string | `0` | The margin-left of the Skeleton. Eg: `30px` |
