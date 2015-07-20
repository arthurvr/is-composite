'use strict';
var assert = require('assert');
var isComposite = require('./');

it('should check if a number is composite', function () {
	[1, -1, 0, 2, 3, 997, 7919, 999983, 4.1, 122.001].forEach(function (number) {
		assert(!isComposite(number));
	});

	[4, 77, 122, 999999].forEach(function (number) {
		assert(isComposite(number));
	});
});

it('should throw when not passing a number', function () {
	assert.throws(function () {
		isComposite({});
	});

	assert.throws(function () {
		isComposite({});
	});
});
