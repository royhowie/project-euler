/*
	Problem #7: 10001st prime
	https://projecteuler.net/problem=7
	
	By listing the first six prime numbers:

		2, 3, 5, 7, 11, 13...

	we can see that the 6th prime is 13.

	What is the 10 001st prime number?
*/

var max = Math.pow(10,5) * 1.1 | 0,
	holder = [];

print("generating all primes under", max);

for (var i = 2; i < max; i++) {
	holder.push(i);
}

for (var p = 2; p < max; p++) {
	if (holder[p] != -1) {
		for (var c = 2 * p; c < max; c += p) {
			holder[c] = -1;
		}
	}
}

var primes = holder.filter(function (n) {
	return n != -1;
})

print("primes generated:", primes.length);
print(primes[10001]);

/*
	OUTPUT:

	royhowie:project-euler royhowie$ time jsc 7.js
	generating all primes under 110000
	primes generated: 10455
	104731

	real	0m0.021s
	user	0m0.016s
	sys	0m0.008s
	
*/