export default function loadImage(path) {
  return new Promise(function (resolve, reject) {
    var image = new Image()
    image.src = path
    image.onload = function () {
      resolve(image)
    }
    image.onerror = function () {
      reject(new Error("Failed to load image `" + path + "`"))
    }
  })
}
