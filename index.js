'use strict';

function setCase(str, strCase) {
	return str['to' + strCase + 'Case']();
}

module.exports = function (str, plural, count) {
	if (typeof plural === 'number') {
		count = plural;

		var plur = 's';
		// get the tail of the string to check if the case should be upper or lower
		var strCase = str.slice(1) === str.slice(1).toUpperCase() ? 'Upper' : 'Lower';
		var end = str.slice(-2);

		if (/s|x|z|ch|sh/i.test(end)) {
			plur = 'es';
		} else if (/y/i.test(end)) {
			str = str.slice(0, -1);
			plur = 'ies';
		}

		plural = str + setCase(plur, strCase);
	}

	return count === 1 ? str : plural;
};
