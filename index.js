'use strict';
module.exports = function (str, plural, count) {
	if (typeof plural === 'number') {
		count = plural;
		plural = str.replace(/(s|x|z|ch|sh)$/i, '$1e').replace(/y$/i, 'ie') + 's';
	}

	return count === 1 ? str : plural;
};
