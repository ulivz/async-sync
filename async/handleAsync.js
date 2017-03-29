const { getFileList, readFile, writeFile, changeFile} = require('./utils')


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