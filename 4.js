/*
	Problem #4: Largest palindrome product
	https://projecteuler.net/problem=4
	
	A palindromic number reads the same both ways. The
	largest palindrome made from the product of two 2-digit
	numbers is 9009 = 91 × 99.

	Find the largest palindrome made from the product of two 3-digit numbers.
*/
var palindromes = [];

var isPalindrome = function (n) {
	return n.toString() === n.toString().split("").reverse().join("");
}

for (var i = 100; i < 1000; i++) {
	for (var j = 100; j < 1000; j++) {
		var h = i * j;
		if (isPalindrome(h)) palindromes.push(h);
	}
}
palindromes = palindromes.reduce(function (a, b) {
	return a > b ? a : b;
})

print(palindromes);

/*
	solution: 906609
	runtime: 533 ms
	solved at: Fri Sep 19 2014 14:53:12 GMT-0400 (EDT)
*/