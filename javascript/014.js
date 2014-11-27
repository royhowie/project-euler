/*
	Problem #14: Longest Collatz sequence
	https://projecteuler.net/problem=14
	
	The following iterative sequence is defined for the set of positive integers:

		n → n/2 (n is even)
		n → 3n + 1 (n is odd)

	Using the rule above and starting with 13, we generate the following sequence:

		13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
	
	It can be seen that this sequence (starting at 13 and finishing at 1)
	contains 10 terms. Although it has not been proved yet (Collatz Problem),
	it is thought that all starting numbers finish at 1.

	Which starting number, under one million, produces the longest chain?

	NOTE: Once the chain starts the terms are allowed to go above one million.

*/

var sparse = [1];//{ count: 1, next: null }];

var climb = function (n) {
	if (n == 1 || sparse[n - 1] != undefined) {
		return;
	} else {
		var next = !(n & 1) ? n >> 1 : 3 * n + 1;
		if (sparse[next - 1]) {
			sparse[n - 1] = sparse[next - 1] + 1;
			/*{
				count : sparse[next - 1].count + 1,
				next: next
			}*/
			return;
		} else {
			climb(next);
			sparse[n - 1] = sparse[next - 1];
			/*sparse[n - 1] = {
				count: sparse[next - 1].count + 1,
				next: next
			}*/
		}
	}
}

for (var i = 1; i < 100000; i++) {
	climb(i);	// stack overflow! =(
}

var max = sparse.reduce(function (prev, curr) {
	return prev < curr ? curr : prev;
})
print(max);