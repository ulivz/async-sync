const { getFileList, readFile, writeFile } = require('./utils')
const { handle } = require('./handle')

/**
 *
 * @param path
 */
function changeFile(path) {
	return readFile(path)
		.then(content => {
			// 修改文件的值
			return writeFile(path, handle(content))
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
				pathList.map(path => changeFile(path))
			)
		})
}

module.exports = {
	handleAsync
}