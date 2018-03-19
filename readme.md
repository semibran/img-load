# img-load
> tiny promise-based `<img>` loader for the browser

[![npm badge]][npm package]

```js
import loadImage from "img-load"

loadImage("images/foo.png")
  .then(image => document.body.appendChild(image))
```

[npm package]: https://www.npmjs.com/package/img-load
[npm badge]:   https://nodei.co/npm/img-load.png?mini
