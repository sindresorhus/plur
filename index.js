'use strict';

function setCase(type) {
	return function (str) {
		return str['to' + type + 'Case']();
	}
}

module.exports = function (str, plural, count) {
	if (typeof plural === 'number') {
		count = plural;
		var strCase = str.slice(-1) === str.slice(-1).toUpperCase() ? 'Upper' : 'Lower';
		plural = (str.replace(/(s|x|z|ch|sh)$/i, '$1e').replace(/y$/i, 'ie') + 's')
			.replace(/i?e?s$/i, setCase(strCase));
	}

	return count === 1 ? str : plural;
};
