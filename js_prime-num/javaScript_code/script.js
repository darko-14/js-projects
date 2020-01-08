// Find prime numbers
function isPrime(num){

	if(num < 2){
		return false
	}
	for (let i = 2; i < num; i++){
		if (num % i === 0){
			return false
		}
	}
	return true
}
console.log(isPrime(35))

// primes from 0 to 100 in array
let primes = []
for(let j = 0; j < 100; j++){
	if (isPrime(j)){
	primes.push(j)
	}
}
console.log("Prime numbers: " + primes)


