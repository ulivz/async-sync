const { getFileList, changeFile } = require('./utils')
const { handle } = require('./handle')

/**
 * 同步遍历文件
 * @param pathList
 * @param callback
 */
function* syncChangeFile(pathList, callback) {
	let count = 0;
	for (let _path of pathList) {
		console.log(`Start handle No.${count}`)
		yield changeFile(_path, handle).then(() => {
			console.log(`Successfully handle No.${count}`)
			count++;
			callback && callback()
		})
	}
}

/**
 * 同步修改
 * @param dir
 */
function handleSync(dir) {
	return getFileList(dir)
		.then(pathList => {
			return new Promise((resolve, reject) => {
				try {
					let process = syncChangeFile(pathList, () => {
						let _nextState = process.next();
						if (_nextState.done) {
							resolve()
						}
					})
					// 触发第一次运行
					process.next()
				} catch (err) {
					reject(err)
				}
			})
		})
}

module.exports = {
	handleSync
}