const gulp = require('gulp');
const path = require('path');
const {createTest} = require('./async/createTest.js');
const {handleAsync} = require('./async/handleAsync.js');
const {handleSync} = require('./async/handleSync.js');

gulp.task('copy', function (callback) {
	createTest(
		path.resolve(__dirname, 'async/raw.txt'),
		path.resolve(__dirname, 'test'),
		1000
	)
		.then(data => {
			callback()
		}, err => {
			console.log('ERR')
		})
		.catch(err => {
			console.log(err)
		})
});


gulp.task('async', function (callback) {
	handleAsync(
		path.resolve(__dirname, 'test')
	)
		.then(info => {
			console.log('Success!')
			callback()
		})
});