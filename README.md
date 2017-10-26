# CARTO API

Carto Node API

## Install

```
npm install
```

## Run

* Development

```
npm run dev
```

* Production

```
npm run build
```

* Test

```
npm run test:build && npm run test:server
```

Open http://localhost:8081/tests/


## Usage

JS

```js
var Carto = require('carto-node');
var client = Carto.AuthenticatedClient.setStaticConfig(StaticConfig);

client.getConfig()
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
```

ES6

```js
import Carto from 'carto-node';
const client = Carto.AuthenticatedClient.setStaticConfig(StaticConfig);

client.getConfig()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

Browser

```html
<script type="text/javascript" src="/carto-node/dist/carto-node.js"></script>
```

## Browser Support

This library uses a **fetch** polyfill: (whatwg-fetch)[https://github.com/github/fetch)

## Documentation

### Config

### Visualization

#### Parameters
*
