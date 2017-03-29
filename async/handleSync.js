const { getFileList, readFile, writeFile } = require('./utils')
const { handle } = require('./handle')


function* syncChangeFile(fileList) {
	for (let file of fileList) {
		yield
	}
}


/**
 * 同步修改
 * @param dir
 */
function handleSync(dir) {
	getFileList(dir)
		.then(pathList => {

		})
}