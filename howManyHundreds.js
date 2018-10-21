
// Returns how many hundreds fit into the number passed into function
function howManyHundreds(num){

  var hundo = Math.floor(num / 100);

  return hundo;
}

//test
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);