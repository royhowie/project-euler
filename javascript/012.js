/*
    Problem #12: Highly divisible triangular number
    https://projecteuler.net/problem=12
    
    The sequence of triangle numbers is generated by
    adding the natural numbers. So the 7th triangle
    number would be
        1 + 2 + 3 + 4 + 5 + 6 + 7 = 28.

    The first ten terms would be:
        1, 3, 6, 10, 15, 21, 28, 36, 45, 55

    Let us list the factors of the first seven triangle numbers:

         1: 1
         3: 1,3
         6: 1,2,3,6
        10: 1,2,5,10
        15: 1,3,5,15
        21: 1,3,7,21
        28: 1,2,4,7,14,28

    We can see that 28 is the first triangle number to have over five divisors.

    What is the value of the first triangle number to have over five hundred divisors?

*/

var numberOfFactors = function (n) {
    var count = 0,
        a = 1, b = n,
        half = n >> 1;
    while (a < b && a <= half) {
        if (n % a == 0) {
            count += 2;
        }
        b = n / a;
        a += 1;
    }
    return count;
}
var triangleNumber = function (n) {
    return (n * (n + 1)) >> 1;
}


var n = 1;

while (numberOfFactors(triangleNumber(n)) < 500) {
    n += 1;
}

print(n, triangleNumber(n));

/*

    royhowie:javascript royhowie$ time jsc 012.js
    12375 76576500

    real    0m0.354s
    user    0m0.355s
    sys     0m0.008s

*/