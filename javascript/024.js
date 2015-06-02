// run with io.js (uses ES6)
/*
    Problem #24: Lexicographic permutations
    https://projecteuler.net/problem=24

    A permutation is an ordered arrangement of objects. For example, 3124 is one
    possible permutation of the digits 1, 2, 3 and 4. If all of the permutations
    are listed numerically or alphabetically, we call it lexicographic order.
    The lexicographic permutations of 0, 1 and 2 are:

        012   021   102   120   201   210

    What is the millionth lexicographic permutation of the digits
    0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

"use strict";

function permute(input) {
    var permArr = []
      , usedChars = [];
    return (function main() {
        for (var i = 0; i < input.length; i++) {
            var ch = input.splice(i, 1)[0];
            usedChars.push(ch);
            if (input.length == 0) {
                permArr.push(usedChars.slice());
            }
            main();
            input.splice(i, 0, ch);
            usedChars.pop();
        }
        return permArr;
    })()
}

let arr = Array.from(Array(10), (_, i) => i)
let n = permute(arr).map(arr => parseInt(arr.join("")))[999999]

console.log(`the millionth lexicographical permutation is ${n}`)

/*
    ~/code/repo/project-euler/javascript $ date && time iojs --harmony_arrow_functions --harmony_arrays 024.js
    Tue Jun  2 02:56:49 EDT 2015
    the millionth lexicographical permutation is 2783915460

    real	0m8.154s
    user	0m7.901s
    sys	0m0.270s
*/
