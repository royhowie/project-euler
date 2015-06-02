/*
    Problem #9: Special Pythagorean triplet
    https://projecteuler.net/problem=9
    
    A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

    a^2 + b^2 = c^2
    For example,
        3^2 + 4^2 = 9 + 16
                  = 25
                  = 5^2

    There exists exactly one Pythagorean triplet for which a + b + c = 1000.
    Find the product abc.
*/

var findTriplets = function (max) {
    var isSquare = function (n) {
        return (Math.sqrt(n) % 1) == 0;
    }
    var triplets = []
    for (var a = 1; a < max; a++) {
        var aa = a * a;
        for (var b = a + 1; b < max; b++) {
            var bb = b * b,
                sum = aa + bb;
            if (isSquare(sum)) {
                triplets.push([a, b, Math.sqrt(sum)]);
            }
        }
    }
    return triplets;
}

var triplets = findTriplets(400);

var winner = triplets.filter(function (set) {
    return (set[0] + set[1] + set[2]) === 1000;
})[0];

print("the winning pair is:", winner);

var product = (function (arr) {
    var p = 1;
    arr.forEach(function (e) {
        p *= e;
    })
    return p;
})(winner);

print("product", product);

/*
    OUTPUT:

    royhowie:project-euler royhowie$ time jsc 9.js
    the winning pair is: 200,375,425
    product 31875000

    real    0m0.013s
    user    0m0.009s
    sys     0m0.006s

*/