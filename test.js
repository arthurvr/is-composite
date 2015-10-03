import test from 'ava';
import isComposite from './';

test('should check if a number is composite', t => {
	[1, -1, 0, 2, 3, 997, 7919, 999983, 4.1, 122.001].forEach(number => {
		t.false(isComposite(number));
	});

	[4, 77, 122, 999999].forEach(number => {
		t.true(isComposite(number));
	});

	t.end();
});

test('should throw when not passing a number', t => {
	t.throws(() => {
		isComposite({});
	}, TypeError);

	t.end();
});
