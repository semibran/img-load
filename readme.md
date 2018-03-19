# img-load
> minimal node-style `<img>` loader for the browser

```js
import loadImage from "img-load"

loadImage("images/foo.png", (err, image) => {
  if (err) throw err
  document.body.appendChild(image)
})
```

## usage
[![npm badge]][npm package]

### `load(path, callback(err, image))`
Asynchronously loads an [`HTMLImageElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image) using the given `path`, then executes `callback` upon completion.

* `path`: The URL of the desired image
* `callback`: The callback function to be executed upon completion

[npm package]: https://www.npmjs.com/package/img-load
[npm badge]:   https://nodei.co/npm/img-load.png?mini
