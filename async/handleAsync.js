const { getFileList, changeFile } = require('./utils')
const { handle } = require('./handle')

/**
 * 非阻塞的异步遍历
 * @param path
 */
function handleAsync(dir) {
	return getFileList(dir)
		.then(pathList => {
			return Promise.all(
				pathList.map(path => changeFile(path, handle))
			)
		})
}

module.exports = {
	handleAsync
}