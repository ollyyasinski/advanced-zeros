module.exports = 
function getZerosCount(number, base) {	 
  //find primes for base
  var primeFactors = [];
  while (base % 2 === 0) {
    primeFactors.push(2);
    base = base / 2;
  }
    
  var sqrtNum = Math.sqrt(base);
    for (var i = 3; i <= sqrtNum; i++) {
      while (base % i === 0) {
        primeFactors.push(i);
        base = base / i;
      }
  }

  if (base > 2) {
      primeFactors.push(base);
  }
  
  //calculate zeros  
  var count = 0;
  var duplicatePrimes = 1;
  var countsArray = [];
  
  for (var i = 0, length = primeFactors.length; i < length; i ++){
    if(primeFactors[i] === primeFactors[i + 1]){
     	duplicatePrimes += 1;		
    }
    else{
      for (var j = primeFactors[i]; number / j >= 1; j *= primeFactors[i]){
        count += Math.floor(number / j)
      }
      count = Math.floor(count / duplicatePrimes);
      countsArray.push(count);
      duplicatePrimes = 1;
      count = 0;
    }
  }
  countsArray.sort(function(a,b){return a-b});
  return countsArray[0];
}