/*
	Problem #19: Counting Sundays
	https://projecteuler.net/problem=19
	
	You are given the following information, but you
	may prefer to do some research for yourself.

	- 1 Jan 1900 was a Monday.
	-	Thirty days has September,
		April, June and November.
		All the rest have thirty-one,
		Saving February alone,
		Which has twenty-eight, rain or shine.
		And on leap years, twenty-nine.
	- A leap year occurs on any year evenly divisible by 4,
		but not on a century unless it is divisible by 400.
	
	How many Sundays fell on the first of the month during
	the twentieth century (1 Jan 1901 to 31 Dec 2000)?

*/

var count = 0;

for (var y = 1901; y < 2001; y++) {
	for (var m = 0; m < 12; m++) {
		if (new Date(y, m, 1).getDay() == 0) {
			count += 1;
		}
	}
}

print(count);

/*

	royhowie:javascript royhowie$ date && time jsc 019.js
	Wed Nov 26 01:47:59 EST 2014
	171

	real	0m0.011s
	user	0m0.006s
	sys		0m0.004s

*/