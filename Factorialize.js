// How to calculate factorialize a number 

function factorialize (num){
  for (var i =num-1; i>=1; i--){
    num *= i
  }

  return num;
}

console.log(factorialize(6)); // 5! = 120
