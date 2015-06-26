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
	t.assert(plur('bus', 2) === 'buses');
	t.assert(plur('box', 2) === 'boxes');
	t.assert(plur('fizz', 2) === 'fizzes');
	t.assert(plur('batch', 2) === 'batches');
	t.assert(plur('bush', 2) === 'bushes');
	t.assert(plur('guppy', 2) === 'guppies');
	t.assert(plur('UNICORN', 2) === 'UNICORNS');
	t.assert(plur('puppY', 2) === 'puppIES');
	t.end();
});
