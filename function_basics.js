Exercises:
1) function myName(){
  console.log("Max Nawa");
}

2) var favoriteFoods = ["pizza", "ice cream"];

function randomFood(){
  var randomNumber = Math.floor(Math.random() * favoriteFoods.length)
  console.log(favoriteFoods[randomNumber]);
}

var numbers = [1,2,3,4,5,6,7,8,9,10];
function displayOddNumbers(){
  for(var i =0; i<numbers.length;i++){
    if(numbers[i]%2!==0){
      console.log(numbers[i]);
    }
  }
}

function displayEvenNumbers(){
  for(var i =0; i<numbers.length;i++){
    if(numbers[i]%2 === 0){
      console.log(numbers[i]);
    }
  }
}

function returnFirstOddNumber(){
  for(var i =0;i<numbers.length;i++){
    if(numbers[i]%2===0){
      return numbers[i];
    }
  }
}

function returnFirstEvenNumber(){
  for(var i =0; i<numbers.length; i++){
    if(numbers[i] % 2 ===0){
      return numbers[i];
    }
  }
}

function returnFirstHalf(){
  for(var i =0; i<numbers.length/2; i++){
    console.log(numbers[i]);
  }
}

function returnSecondHalf(){
  for(var i = numbers.length/2; i<numbers.length; i++){
    console.log(numbers[i]);
  }
}
