# img-load
> Load an image for the browser from a given path

## install
```sh
npm install img-load
```

## usage
```js
const load = require('img-load')

load('images/foo.png', (error, image) => {
  if (error) throw error
  document.body.appendChild(image)
})
```

### `image = load(path, callback)`
Creates an [`HTMLImageElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image) instance using the given `path`. Typically, `image` will be updated with the requested data right before `callback` is executed.

- `path`: The URL of the desired image
- `callback`: The callback to be executed upon completion

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)