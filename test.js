import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import plur from './index.js';

test('main', () => {
	assert.equal(plur('unicorn'), 'unicorns');
	assert.equal(plur('unicorn', 0), 'unicorns');
	assert.equal(plur('unicorn', 1), 'unicorn');
	assert.equal(plur('unicorn', 2), 'unicorns');
	assert.equal(plur('unicorn', 'horse', 0), 'horse');
	assert.equal(plur('unicorn', 'horse', 1), 'unicorn');
	assert.equal(plur('unicorn', 'horse', 2), 'horse');
	assert.equal(plur('bus', 2), 'buses');
	assert.equal(plur('box', 2), 'boxes');
	assert.equal(plur('fizz', 2), 'fizzes');
	assert.equal(plur('batch', 2), 'batches');
	assert.equal(plur('bush', 2), 'bushes');
	assert.equal(plur('Bush', 2), 'Bushes');
	assert.equal(plur('guppy', 2), 'guppies');
	assert.equal(plur('UNICORN', 2), 'UNICORNS');
	assert.equal(plur('puppY', 2), 'puppIES');
	assert.equal(plur('man', 2), 'men');
	assert.equal(plur('woman', 2), 'women');
	assert.equal(plur('fish', 2), 'fish');
	assert.equal(plur('sheep', 2), 'sheep');
	assert.equal(plur('tooth', 2), 'teeth');
	assert.equal(plur('tomato', 2), 'tomatoes');
	assert.equal(plur('wife', 2), 'wives');
	assert.equal(plur('shelf', 2), 'shelves');
	assert.equal(plur('day', 2), 'days');
	assert.equal(plur('diy', 2), 'diys');
	assert.equal(plur('child', 2), 'children');
	assert.equal(plur('child', 1), 'child');
	assert.equal(plur('unicorn', -1), 'unicorn');
	assert.equal(plur('unicorn', -2), 'unicorns');
	assert.equal(plur('shelf', 1), 'shelf');
	assert.equal(plur('shelf', 2), 'shelves');
	assert.equal(plur('Shelf', 1), 'Shelf');
	assert.equal(plur('Shelf', 2), 'Shelves');
	assert.equal(plur('SHELF', 1), 'SHELF');
	assert.equal(plur('SHELF', 2), 'SHELVES');
});

test('irregular words come from the irregular list', () => {
	// The readme claimed `plur('cactus', 2)` was `cacti`, but `cactus` is in the irregular list as `cactuses`.
	assert.equal(plur('cactus', 2), 'cactuses');
	assert.equal(plur('radius', 2), 'radii');
	assert.equal(plur('Cactus', 2), 'Cactuses');
});

test('explicit plural overrides the irregular list', () => {
	assert.equal(plur('medium', 'mediums', 2), 'mediums');
	assert.equal(plur('medium', 'mediums', 1), 'medium');
	assert.equal(plur('medium', 2), 'media');
});
