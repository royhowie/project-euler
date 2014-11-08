# project euler 10
# generate the sum of all primes below 2 million

max = 2000000
numbers = []
sum = 0

for i in range(2, max):
	numbers.append(i)
for p in range(2, max):
	if numbers[p - 2] != -1:
		c = 2 * p
		sum += numbers[p - 2]
		while c < max:
			numbers[c - 2] = -1
			c += p

print(sum)