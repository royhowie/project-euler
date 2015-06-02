/*
    Problem #21: Amicable numbers
    https://projecteuler.net/problem=21
    
    Let d(n) be defined as the sum of proper divisors of n
    (numbers less than n which divide evenly into n).

    If d(a) = b and d(b) = a, where a ≠ b, then a and b
    are an amicable pair and each of a and b are called
    amicable numbers.

    For example, the proper divisors of 220 are
    1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110;
    therefore d(220) = 284. The proper divisors of 284 are
    1, 2, 4, 71 and 142; so d(284) = 220.

    Evaluate the sum of all the amicable numbers under 10000.
*/

var factor = function (n) {
    var factors = [1],
        a = 2, b = n - 1,
        half = n >> 1;
    while (a < b && a <= half) {
        if (n % a == 0) {
            if (a != n/a)
                factors.push(n/a);
            factors.push(a);
        }
        b = n / a;
        a += 1;
    }
    return factors.sort(function (a, b) {
        return a - b;
    });
}

var sum = function (arr) {
    return arr.reduce(function (p, c) {
        return p + c;
    })
}

var n = [];

for (var i = 1; i < 10000; i++) {
    var f = factor(i);
    n.push({
        n: i,
        f: f,
        s: sum(f)
    })
}

var total = 0;
for (var i in n) {
    if (n[i].s < 10000 && n[n[i].s - 1].s == n[i].n && n[i].s != n[i].n) {
        total += n[i].n;
    }
}

print(total);

/*

    royhowie:javascript royhowie$ date && time jsc 021.js
    Wed Nov 26 18:16:15 EST 2014
    31626

    real    0m0.039s
    user    0m0.038s
    sys     0m0.010s

*/