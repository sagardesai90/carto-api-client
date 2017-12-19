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
var Carto = require('carto-api-client');
var client = Carto.AuthenticatedClient.setStaticConfig({
  baseUrl: 'foobar.com'
});

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
import Carto from 'carto-api-client';
const client = Carto.AuthenticatedClient.setStaticConfig({
  baseUrl: 'foobar.com'
});

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
<script type="text/javascript" src="/carto-api-client/dist/carto-api-client.js"></script>
```

## Browser Support

This library uses a **fetch** polyfill: [whatwg-fetch](https://github.com/github/fetch)

## Documentation

### Config

### Visualization

```js
client.getVisualization('myVizId', {} /* optional params */)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

#### Params

##### Filters

- with_id_or_name
- only_liked (default: true)
- only_shared (default: true)
- exclude_shared (default: true)
- exclude_raster (default: true)
- locked
- shared
- tags
- bbox
- privacy
- only_with_display_name (default: true)
- per_page
- page
- type
- types
- order

##### Options

* related
* load_related_canonical_visualizations
* show_user
* show_stats
* show_likes
* show_liked
* show_table
* show_permission
* show_synchronization
* show_uses_builder_features
* show_table_size_and_row_count
* password

Example:

```js
client.getVisualization('myVizId', {
    privacy: 'PUBLIC',
    per_page: '3',
    show_stats: true,
    show_table_size_and_row_count: true
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```
