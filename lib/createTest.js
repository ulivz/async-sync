const path = require('path')
const fs = require('fs')

function createDir(dir) {
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir)
	}
}

/**
 * 判断路径是否存在且路径是否指向文件
 * @param {String} path
 * @return {Boolean} result
 */
function isFile(path) {
	return fs.existsSync(path) && fs.statSync(path).isFile();
}

function createTest(sourceFile, targetPath, cloneCount) {

	createDir(targetPath)

	if (!isFile(sourceFile)) {
		throw new Error('给定的源文件不存在')
	}

	let _arr = [],
		_count = 0,
		_ext = path.parse(sourceFile).ext;

	while (_count < cloneCount) {
		_arr.push(_count)
		_count++
	}

	_arr = _arr.map(i => path.resolve(targetPath, `TEST(${i})${_ext}`))

	let reader = fs.readFileSync(sourceFile, 'utf-8')

	return Promise.all(
		_arr.map(_p => {
			return new Promise((resolve, reject) => {

				let writer = fs.createWriteStream(_p)
				try {
					writer.write(reader)
					writer.end('')
					writer.on('finish', () => resolve('OK'))
						.on('error', () => reject('Error'))
				} catch (err) {
					reject('Error')
				}
			})
		})
	);

}

module.exports = {
	createTest
}