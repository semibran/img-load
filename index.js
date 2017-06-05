module.exports = function load(path, callback) {
	var image = new Image()
	if (callback) {
		image.onload = function () {
			callback(null, image)
		}
		image.onerror = function () {
			callback(new Error("Failed to load image '" + path + "'"), image)
		}
	}
	image.src = path
	return image
}
