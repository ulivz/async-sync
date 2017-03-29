const { getFileList, changeFile } = require('./utils')
const { handle } = require('./handle')


function* syncChangeFile(pathList) {
	for (let path of pathList) {
		yield changeFile(path)
	}
}

/**
 * 同步修改
 * @param dir
 */
function handleSync(dir) {
	getFileList(dir)
		.then(pathList => {
			let process = syncChangeFile(pathList)
			process.next()
				.then()
		})
}

module.exports = {
	handleSync
}