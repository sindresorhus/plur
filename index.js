'use strict';
const irregularPlurals = require('irregular-plurals');

module.exports = function (str, plural, count) {
	if (typeof plural === 'number') {
		count = plural;
	}

	if (str in irregularPlurals) {
		plural = irregularPlurals[str];
	} else if (typeof plural !== 'string') {
		plural = (str.replace(/(?:s|x|z|ch|sh)$/i, '$&e').replace(/([^aeiou])y$/i, '$1ie') + 's')
			.replace(/i?e?s$/i, m => {
				const isTailLowerCase = str.slice(-1) === str.slice(-1).toLowerCase();
				return isTailLowerCase ? m.toLowerCase() : m.toUpperCase();
			});
	}

	return Math.abs(count) === 1 ? str : plural;
};
