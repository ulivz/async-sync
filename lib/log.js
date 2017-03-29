var colors = require('colors');

/**
 *
 * @param msg
 * @param type
 * @private
 */
function _log(msg, type) {
	if (typeof msg === 'string') {
		console.log(colors[type]('%s'), msg);
	}
	else if (Object.prototype.toString.call(msg) === '[object Array]') {
		msg.forEach(function (value) {
			console.log(colors[type]('%s'), value);
		})
	}
}

module.exports = {
	warn: function (title, content) {
		console.log(colors.bgRed(title), colors.red(content));
	},
	inline: function (title, content) {
		console.log(colors.bgGreen(title), colors.green(content));
	},
	title: function (msg) {
		_log(msg, 'bgGreen');
	},
	log: function (msg) {
		_log(msg, 'white');
	},
	cyan: function (msg) {
		_log(msg, 'cyan');
	},
	green: function (msg) {
		_log(msg, 'green');
	},
	red: function (msg) {
		_log(msg, 'red');
	},
	blue: function (msg) {
		_log(msg, 'blue');
	},
};
