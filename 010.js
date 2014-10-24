/*
	Problem #10: Summation of primes
	https://projecteuler.net/problem=10
	
	The sum of the primes below 10 is

		2 + 3 + 5 + 7 = 17

	Find the sum of all the primes below two million.
*/

var max = 2000000,
	holder = [];

print("generating all primes under", max);

for (var i = 2; i < max; i++) {
	holder.push(i);
}

for (var p = 2; p < max; p++) {
	if (holder[p - 2] != -1) {
		for (var c = 2 * p; c < max; c += p) {
			holder[c - 2] = -1;
		}
	}
}

var primes = holder.filter(function (n) {
	return n != -1;
})

print("primes generated:", primes.length);

var sum = (function (arr){
	var s = 0;
	arr.forEach(function (n) {
		s += n;
	})
	return s;
})(primes)

print("sum of primes under", max, ":", sum);

/*
	OUTPUT:

	royhowie:project-euler royhowie$ time jsc 10.js
	generating all primes under 2000000
	primes generated: 148933
	sum of primes under 2000000 : 142913828922

	real	0m0.130s
	user	0m0.115s
	sys	0m0.023s
	
*/