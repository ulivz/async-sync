function handle(content) {
	return content.replace(/\.\.\/([a-zA-Z_/.])*img([a-zA-Z_/.])*\//g, 'img/')
}

module.exports = {
	handle
}