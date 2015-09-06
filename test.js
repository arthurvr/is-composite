'use strict';
var test = require('ava');
var isComposite = require('./');

test('should check if a number is composite', function (t) {
	[1, -1, 0, 2, 3, 997, 7919, 999983, 4.1, 122.001].forEach(function (number) {
		t.false(isComposite(number));
	});

	[4, 77, 122, 999999].forEach(function (number) {
		t.true(isComposite(number));
	});

	t.end();
});

test('should throw when not passing a number', function (t) {
	t.throws(function () {
		isComposite({});
	}, TypeError);

	t.end();
});
