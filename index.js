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
		plural = str + setCase(plur, strCase);
	}

	return count === 1 ? str : plural;
};
