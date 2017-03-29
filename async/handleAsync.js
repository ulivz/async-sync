const { getFileList, readFile, writeFile } = require('./utils')
const { handle } = require('./handle')

/**
 *
 * @param path
 */
function handleAsync(path) {
	return readFile(path)
		.then(content => {
			// 修改文件的值
			console.log(1)
			content = handle(content)
			return writeFile(path, content)
		})
}

/**
 * 非阻塞的异步遍历
 * @param path
 */
function handleAsync(dir) {
	return getFileList(dir)
		.then(pathList => {
			return Promise.all(
				pathList.map(path => handleAsync(path))
			)
		})
}

module.exports = {
	handleAsync
}