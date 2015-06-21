'use strict';
var test = require('ava');
var plur = require('./');

test(function (t) {
	t.assert(plur('unicorn', 0) === 'unicorns');
	t.assert(plur('unicorn', 1) === 'unicorn');
	t.assert(plur('unicorn', 2) === 'unicorns');
	t.assert(plur('unicorn', 'horse', 0) === 'horse');
	t.assert(plur('unicorn', 'horse', 1) === 'unicorn');
	t.assert(plur('unicorn', 'horse', 2) === 'horse');
	t.end();
});
