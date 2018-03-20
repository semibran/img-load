# img-load
> tiny promise-based `<img>` loader for the browser

```js
loadImage("images/foo.png")
  .then(image => document.body.appendChild(image))
```

## usage
[![npm badge]][npm package]

### `loadImage(path)`
Returns a [`Promise`][using promises] which resolves to the image indicated by `path`.

Consider using `loadImage` within an [async function] to further simplify usage.
```js
import loadImage from "img-load"

async function main() {
  let foo = await loadImage("images/foo.png")
  let bar = await loadImage("images/bar.png")
  // use `foo.png` and `bar.png`
}

main()
```

[npm package]:    https://www.npmjs.com/package/img-load
[npm badge]:      https://nodei.co/npm/img-load.png?mini
[using promises]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
[async function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function
