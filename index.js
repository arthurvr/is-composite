'use strict';
var isPrime = require('is-prime');
var numberIsInteger = require('number-is-integer');

module.exports = function (number) {
	if (typeof number !== 'number') {
		throw new Error('Expected a number');
	}

	if (!numberIsInteger(number) || number <= 1) {
		return false;
	}

	return !isPrime(number);
};
