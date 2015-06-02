/*
	Problem #25: 1000-digit Fibonacci number
	https://projecteuler.net/problem=25

	The Fibonacci sequence is defined by the recurrence relation:

	Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
	Hence the first 12 terms will be:

	F(1) = 1       F(2) = 1        F(3) = 2        F(4) = 3
	F(5) = 5       F(6) = 8        F(7) = 13       F(8) = 21
	F(9) = 34      F(10) = 55      F(11) = 89      F(12) = 144

	The 12th term, F12, is the first term to contain three digits.

	What is the first term in the Fibonacci sequence to contain 1000 digits?
*/

/*
    the closed formula for the Fibonacci sequence is

        Fib(n) = (1/√5) * (Math.pow(phi, n) - Math.pow(-phi, n))
        where phi = (1 + √5) / 2

    for large n, we can simply use

        Fib(n) = Math.pow(phi, n) / √ 5

    the number of digits in a number n is log base 10 of n

    therefore:

        digits  = log10(Fib(n))
                = log10( (phi ^ n) / √5 )
                = n * log10(phi) - log10(√5)

*/

"use strict"

let sqrt5 = Math.sqrt(5)
let phi = (1 + sqrt5) / 2
let digitsInFibN = n => Math.ceil(n * Math.log10(phi) - Math.log10(sqrt5))

var i = 1
var digits = 1
while (digits < 1000) {
    digits = digitsInFibN(++i)
}

console.log(`the ${i}th fibonacci number has 1 thousand digits`)

/*
    ~/code/repo/project-euler/javascript $ date && time iojs --harmony_arrow_functions --harmony_arrays 025b.js
    Tue Jun  2 03:17:43 EDT 2015
    the 4782th fibonacci number has 1 thousand digits

    real	0m0.096s
    user	0m0.083s
    sys	0m0.013s
*/
