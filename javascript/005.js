/*
	Problem #5: Smallest multiple
	https://projecteuler.net/problem=5
	
	2520 is the smallest number that can be divided by
	each of the numbers from 1 to 10 without any remainder.
	What is the smallest positive number that is evenly
	divisible by all of the numbers from 1 to 20?
*/

var mult = 1,
	factors = [];

for (var i = 1; i < 21; i++) {
	if (mult % i !== 0) {
		mult *= i;
		factors.push(i);
	}
}

print(mult/24, factors);

/*
	solution: 232792560
	runtime: less than 0 ms (apparently)
	solved at: Fri Sep 19 2014 15:11:50 GMT-0400 (EDT)
*/