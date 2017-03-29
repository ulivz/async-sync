const fs = require('fs')
const path = require('path')

/**
 * 获取文件夹中的所有文件
 * @param path
 * @returns {Promise}
 */
function getFileList(dir) {
	return new Promise(function (resolve, reject) {
		fs.readdir(dir, function (err, files) {
			if (err) {
				reject(err)
			} else {
				resolve(
					files.map(file => {
						return path.resolve(dir, file)
					})
				)
			}
		})
	})
}

/**
 * 读文件
 * @param path
 * @returns {Promise}
 */
function readFile(filePath) {
	return new Promise((resolve, reject) => {
		var reader = fs.createReadStream(filePath, 'utf-8')
		let _content = '';
		reader.on('data', chunk => _content += chunk)
		reader.on('end', () => {
			resolve(_content)
		})
		reader.on('error', (err) => {
			reject(err)
		})
	})
}

/**
 * 写文件
 * @param filePath
 * @param content
 * @returns {Promise}
 */
function writeFile(filePath, content) {
	return new Promise((resolve, reject) => {
		let writer = fs.createWriteStream(filePath, 'utf-8')
		writer.write(content)
		writer.end('')
		writer.on('finish', () => {
			resolve()
		})
		writer.on('error', () => {
			reject('Error')
		})
	})
}


/**
 * 修改文件的方法
 * @param path
 * @param handle
 * @returns {Promise.<TResult>}
 */
function changeFile(path, handle) {
	return readFile(path)
		.then(content => {
			return writeFile(path, handle(content))
		})
}


module.exports = {
	getFileList,
	readFile,
	writeFile,
	changeFile
}