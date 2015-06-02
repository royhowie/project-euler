/*
	Problem #26: Reciprocal Cycles
	https://projecteuler.net/problem=26

    A unit fraction contains 1 in the numerator. The decimal representation of
    the unit fractions with denominators 2 to 10 are given:

    1/2	= 	0.5
    1/3	= 	0.(3)
    1/4	= 	0.25
    1/5	= 	0.2
    1/6	= 	0.1(6)
    1/7	= 	0.(142857)
    1/8	= 	0.125
    1/9	= 	0.(1)
    1/10= 	0.1
    Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle.
    It can be seen that 1/7 has a 6-digit recurring cycle.

    Find the value of d < 1000 for which 1/d contains the longest recurring
    cycle in its decimal fraction part.
*/

// doesn't work =()

"use strict";

var cF = function (arr, n, t) {
    return t > 0 && n|0 !== 0 ? cF(arr.concat(n|0), 1/(n % 1), t - 1) : arr.concat(n|0);
}

let findMaxRepeatingSubstring = function (str) {
    let move = (str, start, jump, max) => {
        if (start + jump < max) {
            return str.slice(start, start + jump) === str.slice(0, jump)
                && move(str, start + jump, jump, max)
        } else {
            return true;
        }
    }
    let l = str.length
    console.log(str)
    let max = [0, 0]
    for (let i = 0; i < l - 1; i++) {
        for (let j = 1; j < l - i - 1; j++) {
            let cond = move(str, i, j, l)
            // console.log(`move[${i},${j}] is ${cond}`)
            if (move(str, i, j, l) && j - i > max[1] - max[0]
                && str.slice(max[0], max[0] + max[1]).indexOf(str.slice(i, i + j))
            ) {
                max = [i, j]
            }
        }
    }
    console.log(`max substring is ${str.slice(max[0], max[0] + max[1])}`)
    return max
}

var approx = function (number, times) {
	var cF = function (arr, n, t) {
		// n = parseFloat(n.toString().slice(0,-2));
		// print(arr,n,t);
		return t > 0 && n|0 !== 0 ? cF(arr.concat(n|0), 1/(n % 1), t - 1) : arr.concat(n|0);
	}
	var toFraction = function (arr) {
		if (arr[arr.length - 1] == 0) arr.push(0);
		var num = 1, denom = arr.pop();
		while (arr.length > 1) {
			var h = denom;
			denom = (arr.pop() * denom) + num;
			num = h;
		}
		return [arr[0] * denom + num, denom];
	}
	return toFraction(cF([], number, times));
}



for (var i = 2; i < 10; i++) {
    let s = String(1/i).split(".")[1]
    console.log(`${i} is ${findMaxRepeatingSubstring(s)}`)
    // console.log(1/i, "~~~", cF([], 1/i, 5), "~~~", approx(1/i, 5))
}
