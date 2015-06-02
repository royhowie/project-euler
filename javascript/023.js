// run with io.js (uses ES6)
/*
    Problem #23: Non-abundant sums
    https://projecteuler.net/problem=23

    A perfect number is a number for which the sum of its proper divisors is
    exactly equal to the number. For example, the sum of the proper divisors of
    28 would be
        1 + 2 + 4 + 7 + 14 = 28,
    which means that 28 is a perfect number.

    A number n is called deficient if the sum of its proper divisors is less
    than n and it is called abundant if this sum exceeds n.

    As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest
    number that can be written as the sum of two abundant numbers is 24. By
    mathematical analysis, it can be shown that all integers greater than 28123
    can be written as the sum of two abundant numbers. However, this upper limit
    cannot be reduced any further by analysis even though it is known that the
    greatest number that cannot be expressed as the sum of two abundant numbers
    is less than this limit.

    Find the sum of all the positive integers which cannot be written as the sum
    of two abundant numbers.
*/

"use strict";

let max = 28123
let abundant = []
let canBeWrittenAsSumOfAbundants = Array.from(Array(max), item => false)
let listsOfFactors = []

let getDivisors = n => {
    let list = []
    let m = 1 + (n / 2)

    for (let i = 1; i < m; i++) {
        if (n % i == 0) list.push(i)
    }

    return list
}

let sumArray = arr => arr.reduce(((p, c) => p + c), 0)
let isAbundant = n => sumArray(getDivisors(n)) > n

let findTwoSums = function (n) {
    for (var i = 0; i <= n/2; i++) {
        if (abundant[i] && abundant[n - i]) {
            return true
        }
    }
    return false
}


for (var i = 1; i < max; i++) {
    abundant[i] = isAbundant(i)
}

for (var i = 0; i < max; i++) {
    canBeWrittenAsSumOfAbundants[i] = findTwoSums(i)
}

let doublyAbundant = canBeWrittenAsSumOfAbundants.map((d, i) => d ? 0 : i)
let sum = sumArray(doublyAbundant)

console.log(`sum of all Z+ != the sum of two abundant numbers:\t${sum}`)

/*
    ~/code/repo/project-euler/javascript $ date && time iojs --harmony_arrow_functions --harmony_arrays 023.js
    Tue Jun  2 02:42:47 EDT 2015
    sum of all Z+ != the sum of two abundant numbers:	4179871

    real	0m9.013s
    user	0m8.991s
    sys	0m0.023s
*/
