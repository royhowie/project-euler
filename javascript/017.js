/*
	Problem #17: Number letter counts
	https://projecteuler.net/problem=17
	
	If the numbers 1 to 5 are written out in words:
	
		one, two, three, four, five ...

	then there are

		3 + 3 + 5 + 4 + 4 = 19

	letters used in total.

	If all the numbers from 1 to 1000 (one thousand) inclusive
	were written out in words, how many letters would be used?

	NOTE: Do not count spaces or hyphens. For example, 342
	(three hundred and forty-two) contains 23 letters and 115
	(one hundred and fifteen) contains 20 letters.

	The use of "and" when writing out numbers is in compliance
	with British usage.

*/

var one = [	"one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
			"eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
	two = [ "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

var base = [ 0, 3, 3, 5, 4, 4, 3, 5, 5, 4, 3, 6, 6, 8, 8, 7, 7, 9, 8, 8 ];

var numToString = function (n) {
	var base = "",
		tens = n % 100;

	if (n > 99) {
		base += (one[(n/100 | 0) - 1] + "hundred");
		if (tens != 0) {
			base += "and";
		} else {
			return base;
		}
	}
	if (tens < 20) {
		base += one[tens - 1];
	} else {
		base += two[(tens/10 | 0) - 2];
		base += (n % 10 == 0) ? "" : one[(n % 10) - 1]
	}
	return base;
}

var length = "onethousand".length;	// because 1000 is not supported =(

for (var i = 1; i < 1000; i++) {
	// print(numToString(i) + "~~~", numToString(i).length);
	length += numToString(i).length;
}

print(length);

/*

	royhowie:javascript royhowie$ date && time jsc 017.js
	Wed Nov 26 01:31:15 EST 2014
	21124

	real	0m0.010s
	user	0m0.006s
	sys		0m0.005s

*/