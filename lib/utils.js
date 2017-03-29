const fs = require('fs')
const path = require('path')
const emiiter = require('events').EventEmitter;
const log = require('./log');

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
		let _content = ''
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

/**
 * 删除文件或文件夹
 * @param {String} path
 * @param {Function} callback
 */
function del(path, callback){

	var deleteEvent = new emiiter();
	var rootDir;
	var _dirCount   = 0;
	var _fileCount  = 0;

	// 文件删除结束打印删除日志
	deleteEvent.on('end', function (){
		var title   = ` √ `
		var content = 'successfully delete old ' + _fileCount + ' files, ' + _dirCount + ' directories'
		log.inline(title, content)
		callback && callback();
	})

	/**
	 * 递归删除文件夹
	 * @param {String} path
	 */
	function _recurseDel(path){

		var files = [];

		if ( fs.existsSync(path) ) {
			files = fs.readdirSync(path);
			files.forEach(function (file){
				var curPath = path + "/" + file;
				if ( fs.statSync(curPath).isDirectory() ) {
					// recurse
					_recurseDel(curPath);
				}
				else {
					// delete file
					fs.unlinkSync(curPath);
					_fileCount++;
				}
			});

			fs.rmdirSync(path);

			if ( rootDir === path ) {
				deleteEvent.emit('end');
			}
			else {
				_dirCount++;
			}
		}
	};

	if ( !fs.existsSync(path) ) {
		log.inline('WARN', 'path not exist: ' + path);
		return callback && callback();
	}

	rootDir = path;
	_recurseDel(path);

}


module.exports = {
	getFileList,
	readFile,
	writeFile,
	changeFile,
	del
}