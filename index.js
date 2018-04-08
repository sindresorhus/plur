'use strict';
const irregularPlurals = require('irregular-plurals');

module.exports = (word, plural, count) => {
	if (typeof plural === 'number') {
		count = plural;
	}

	if (irregularPlurals.has(word)) {
		plural = irregularPlurals.get(word);
	} else if (typeof plural !== 'string') {
		plural = (word.replace(/(?:s|x|z|ch|sh)$/i, '$&e').replace(/([^aeiou])y$/i, '$1ie') + 's')
			.replace(/i?e?s$/i, m => {
				const isTailLowerCase = word.slice(-1) === word.slice(-1).toLowerCase();
				return isTailLowerCase ? m.toLowerCase() : m.toUpperCase();
			});
	}

	return Math.abs(count) === 1 ? word : plural;
};
