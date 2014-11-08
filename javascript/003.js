/*
	Problem #3: Largest prime factor
	https://projecteuler.net/problem=3
	
	The prime factors of 13195 are 5, 7, 13 and 29.
	What is the largest prime factor of the number
	600851475143 ?
*/

"use strict";

/*
	if the number isn't greater than 64 bits,
	n = n >> 1 works (and is slightly faster)
	!(n & 1) works regardless; no bit overflow
*/
var findPrimes = function (n) {
	var factors = [1];
	while (!(n & 1)) {
		factors.push(2);
		n = n / 2;
		print("n", n, "factors", factors);
	}
	for (var i = 3; i < Math.sqrt(n); i++) {
		while (n % i == 0) {
			factors.push(i);
			n = n/i;
			print("i", i, "n", n, "factors", factors);
		}
	}
	factors.push(n);
	return factors; 
}
print(findPrimes(600851475143));

/*
	stdout:

		i 71 n 8462696833 factors 1,71
		i 839 n 10086647 factors 1,71,839
		i 1471 n 6857 factors 1,71,839,1471
		1,71,839,1471,6857

	solution: 6857
	solved at: Fri Sep 19 2014 14:43:16 GMT-0400 (EDT)
*/