// node.js
/*
	Problem #21: Amicable numbers
	https://projecteuler.net/problem=21
	
	Using names.txt (right click and 'Save Link/Target As...'),
	a 46K text file containing over five-thousand first names,
	begin by sorting it into alphabetical order.

	Then working out the alphabetical value for each name,
	multiply this value by its alphabetical position in the
	list to obtain a name score.

	For example, when the list is sorted into alphabetical order,
	COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list.
	So, COLIN would obtain a score of 938 × 53 = 49714.

	What is the total of all the name scores in the file?
*/

"use strict";

var getScore = function (name) {
	return name.split("").reduce(function (p, c) {
		return (typeof p == "string" ? p.charCodeAt(0) - 64 : p) + c.charCodeAt(0) - 64;
	})
}

require("fs").readFile("../text/p022_names.txt", "utf8", function (err, data) {
	if (err) throw err;

	var names = data.split(",").sort(function (a, b) {
		if (a < b) return -1;
		if (a > b) return 1;
		return 0;
	})

	var score = 0;
	names.forEach(function (name, i) {
		score += (i + 1) * (getScore(name.slice(1,-1)));
	})

	console.log(score);
})

/*

	royhowie:javascript royhowie$ date && time node 022.js
	Wed Nov 26 18:33:27 EST 2014
	871198282

	real	0m0.053s
	user	0m0.041s
	sys		0m0.012s
*/