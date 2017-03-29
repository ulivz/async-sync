var fs = require('fs')
var path = require('path')

function readDir(path) {
	return new Promise(function (resolve, reject) {
		fs.readdir(path, function (err, files) {
			if (err) {
				reject(err)
			} else {
				resolve(files)
			}
		})
	})
}


function readFile(pathList) {
	return Promise.all(
		pathList.map(path => {
			return new Promise((resolve, reject) => {
				fs.readFile(path, 'utf-8', (err, content) => {
					if (err) reject(err)
					else resolve({path, content})
				})
			})
		})
	)
}

function changeFile(data) {
	return Promise.all(
		data.map(file => {
			return new Promise((resolve, reject) => {
				file.content = file.content.replace(/\.\.\/([a-zA-Z_/.])*img([a-zA-Z_/.])*\//g, 'img/')
				const writer = fs.createWriteStream(file.path);
				console.log(writer)
				console.log(writer)
				writer.write(file.content)
				writer.end('')
				writer
					.on('finish', () => {resolve('Finish')})
					.on('error', () => {reject('Error')})
			})
		})
	)
}

// 如果不处理reject的情况，node会报错：
// (node:6968) DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate(终止) the Node.js process with a non-zero exit code（非零退出代码）.

const DIR = path.resolve(__dirname, 'docs')
//  D:\Work\Coding\NodeJS\Node_Test\async\docs
console.log(path.resolve(__dirname, '/docs'))
// D:\docs
console.log(path.resolve(__dirname, '../docs'))
//  D:\Work\Coding\NodeJS\Node_Test\docs


readDir(DIR)
	.then(function (list) {
		return readFile(list.map(file => path.resolve(DIR, file)))
	})
	.then(function (data) {
		return changeFile(data)
	})
	.then(function (info) {
		console.log(info)
	})



