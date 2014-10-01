/*
	Problem #6: Sum square difference
	https://projecteuler.net/problem=6
	
	The sum of the squares of the first ten natural numbers is,

	1^2 + 2^2 + ... + 10^2 = 385
	The square of the sum of the first ten natural numbers is,

	(1 + 2 + ... + 10)^2 = 552 = 3025
	Hence the difference between the sum of the squares of the
	first ten natural numbers and the square of the sum is
	3025 − 385 = 2640.

	Find the difference between the sum of the squares of the
	first one hundred natural numbers and the square of the sum.
*/

var sum1 = (100/6) * (100 + 1) * (2*100 + 1);
	sum2 = Math.pow((100 * (100 + 1)/2),2);

print(sum2 - sum1);

/*
	solution: 25164150
	runtime: 0ms
	solved at: Tue Sep 23 2014 00:36:38 GMT-0400 (EDT)
*/