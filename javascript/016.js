/*
	Problem #16: Power digit sum
	https://projecteuler.net/problem=16
	
	2^15 = 32768 and the sum of its digits is

		3 + 2 + 7 + 6 + 8 = 26.

	What is the sum of the digits of the number 2^1000?

*/

var brewDouble = function (arr) {
	var bound = arr.length - 1;

	for (var i = arr.length - 1; i > -1; i--) {
		arr[i] = arr[i] << 1;
		if (arr[i] > 9) {
			if (i == bound) {
				arr.push(1);
			} else {
				arr[i + 1] += 1;
			}
			arr[i] -= 10;
		}
	}

	return arr;
}

var n = [1];

for (var i = 0; i < 1000; i++) {
	n = brewDouble(n);
}

var sum = n.reduce(function (p, c) {
	return p + c;
});

print(sum);

/*

Wed Nov 26 00:54:25 EST 2014

royhowie:javascript royhowie$ time jsc 016.js
1366

real	0m0.013s
user	0m0.008s
sys		0m0.005s

*/