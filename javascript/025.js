/*
	Problem #25: 1000-digit Fibonacci number
	https://projecteuler.net/problem=25
	
	The Fibonacci sequence is defined by the recurrence relation:

	Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
	Hence the first 12 terms will be:

	F(1) = 1
	F(2) = 1
	F(3) = 2
	F(4) = 3
	F(5) = 5
	F(6) = 8
	F(7) = 13
	F(8) = 21
	F(9) = 34
	F(10) = 55
	F(11) = 89
	F(12) = 144
	The 12th term, F12, is the first term to contain three digits.

	What is the first term in the Fibonacci sequence to contain 1000 digits?
*/

var sqrt5 = Math.sqrt(5),
	Phi = (1 + sqrt5)/2,
	phi = (1 - sqrt5)/2;

var fib = function (n) {
	return Math.round((Math.pow(Phi, n) - Math.pow(phi, n))/sqrt5);
}

// var n = 0;
// while (fib(n).toString().length < 1000) {
// 	print(n, fib(n));
// 	n += 1;
// }

var add = function (arr1, arr2) {
	var arr;
	if (arr1.length < arr2.length) {
		arr = arr2;
		for (var i = 0; i < arr1.length; i++) {
			arr[i] += arr1[i];
			if (arr[i] > 9) {
				if (i == arr.length - 1) {
					arr.push(1);
				} else {
					arr[i + 1] += 1;
				}
				arr[i] %= 10;
			}
		}
	} else {
		arr = arr1;
		for (var i = 0; i < arr2.length; i++) {
			arr[i] += arr2[i];
			if (arr[i] > 9) {
				if (i == arr.length - 1) {
					arr.push(1);
				} else {
					arr[i + 1] += 1;
				}
				arr[i] -= 10;
			}
		}
	}
	return arr;	//.reverse().join("");
}

var add2 = function (arr1, arr2) {
	var a = arr1.length > arr2.length ? arr1 : arr2,
		b = arr1.length > arr2.length ? arr2 : arr1;

	for (var i = 0; i < b.length; i++) {
		a[i] += b[i];
		if (a[i] > 9) {
			a[i + 1] = (a[i + 1] || 0) + 1;
			a[i] %= 10;
		}
	}
	return a;
}

var g = function (num) {
	var a = [0], b = [1];

	for (var i = 0; i < num; i++) {
		if (i % 2 == 0) {
			a = add2(b, a);
		} else {
			b = add2(a, b);
		}
	}
	return [a,"\n", b];
}


var f = function (num) {
	var a = [1], b = [1],
		n = 2, toggle = true;

	print("a\tb\tholder\ttoggle\tn");

	while (n <= num) {
		if (toggle) {
			var holder = add2(a, b);
			print(a, "\t", b, "\t", holder, "\t", toggle, "\t", n + 1);
			b = holder;
		} else {
			var holder = add2(a, b);
			// var holder = b.length > a.length ? add(b, a) : add(a, b);
			print(a, "\t", b, "\t", holder, "\t", toggle, "\t", n + 1);
			a = holder;
		}
		n += 1;
		toggle = !toggle;
	}
	return (!toggle ? a : b).reverse().join("");
}

// while (a.length < 1000 && b.length < 1000) {

// }







