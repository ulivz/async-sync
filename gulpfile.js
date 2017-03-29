const gulp = require('gulp');
const path = require('path');
const { createTest } = require('./lib/createTest.js');
const { handleAsync } = require('./lib/handleAsync.js');
const { handleSync } = require('./lib/handleSync.js');

gulp.task('copy', function (callback) {
	createTest(
		path.resolve(__dirname, 'async/raw.txt'),
		path.resolve(__dirname, 'test'),
		2000
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

gulp.task('sync', function (callback) {
	handleSync(
		path.resolve(__dirname, 'test')
	)
		.then(info => {
			console.log('Success!')
			callback()
		})
});