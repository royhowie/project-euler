/*
	Problem #491: Double pandigital number divisible by 11
	https://projecteuler.net/problem=491
	
	We call a positive integer double pandigital if it uses
	all the digits 0 to 9 exactly twice (with no leading zero).
	For example, 40561817703823564929 is one such number.

	How many double pandigital numbers are divisible by 11?

*/

// need to find a way to iterate through all the results (and only check those that are 11 mod 0)

var template = "00112233445566778899",
	min = 10012233445566778899,
	max = 99887766554433221100;

var is11Mod0 = function (n) {
	n = n.toString();
	var total = 0;
	for (var i = 0; i < n.length; i++) {
		total += (i % 2 == 0 ? -1 : 1) * parseInt(n[i]);
	}
	return total % 11 == 0;
}

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var goDeep = function (n, level) {

	print(n, level);
	if (n < 9) {
		return n.toString() + goDeep(n + 1, level).toString();
	} else {
		if (level < 9)
			return n.toString() + goDeep(0, level + 1).toString();
	}
	return "";
}

goDeep(0, 0);

// how can I make all permutations of 0-9 (twice) ?
var tree = function (n, length, max) {
	if (length < max + 1) {
		for (var i = 0; i < 10; i++) {
			print(i.toString() + tree(n + i, length + 1, max).toString())
		}
	}
	return n;
}