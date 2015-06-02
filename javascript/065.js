/*
	Problem #65: Convergents of e
	https://projecteuler.net/problem=65

    ~~~ lots of junk about continued fractions ~~

    What is most surprising is that the important mathematical constant e is
    that its continued fraction can be represented by

        [2; 1,2,1, 1,4,1, 1,6,1 , ... , 1,2k,1, ...]

    The first ten terms in the sequence of convergents for e are:

    2, 3, 8/3, 11/4, 19/7, 87/32, 106/39, 193/71, 1264/465, 1457/536, ...

    The sum of digits in the numerator of the 10th convergent is 1+4+5+7=17.

    Find the sum of digits in the numerator of the 100th convergent of the
    continued fraction for e.

*/

"use strict";

var bigInt = require("big-integer")     // going to cheat

let max = 101
let e = Math.exp(1)

let sum = arr => arr.reduce((p, c) => +p + +c)

var numerator = bigInt(2)
var denominator = bigInt(1)

/*
    was previously calculating the continued fraction for each
    but you can abuse a pattern in the continued fractions
    => it uses the same math as calculating the 2 * k numbers
    in the continued fraction
    see the `toFraction` function below; it changes continued
    fractions to actual fractions and the math used to solve
    was based on it
*/

for (let i = 2; i < max; i++) {
    let holder = bigInt(denominator.toString())
    let _ = (i % 3 === 0) ? 2 * i / 3 : 1
    denominator = bigInt(numerator.toString())
    numerator = denominator.times(_).plus(holder)
}

let total = sum(numerator.toString().split(""))
console.log(`the sum of the digits of the numerator of the 100th convergent is ${total}`)

/*
    // change a continued fraction to a single fraction: [num, denom]

    let toFraction = arr => {
        if (arr[arr.length - 1] == 0) arr.push(0);
        var num = 1, denom = arr.pop();
        while (arr.length > 1) {
            var h = denom;
            denom = (arr.pop() * denom) + num;
            num = h;
        }
        return [arr[0] * denom + num, denom];
    }

*/
