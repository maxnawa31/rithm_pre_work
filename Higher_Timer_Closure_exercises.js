function countdown(number) {
  var intervalId = setInterval(function() {
    number--;
    if (number === 0) {
      console.log("Done");
      clearTimeout(intervalId);
    } else {
      console.log(number);


    }
  }, 1000);
}


function randomGame() {
  var count = 0;
  var intervalId = setInterval(function() {
    count++;
    var random = Math.random();
    if (random > 0.75) {
      console.log(count);
      clearTimeout(intervalId);
    }

  }, 1000)
}

function isEven(number) {
  return number % 2 === 0;
}

function isOdd(number) {
  return number % 2 !== 0;
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  } else {
    for (var i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
  }
  return true;
}


function numberFact(number, callback) {
  return callback(number);
};


function find(array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
}


function findIndex(array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return i;
    }
  }
}

function specialMultiply(a, b) {
  if(arguments.length === 1){
    return function(b){
      return a * b;
    }
  }
  return a * b;
}
