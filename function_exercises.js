PART 1:

function difference(num1,num2){
  return num1 - num2;
}

function product(num1,num2){
  return num1 * num2;
}

function printDay(number){
  if(number === 1){
    return "Monday";
  }else if(number === 2){
    return "Tuesday";
  }else if(number === 3){
    return "Wednesday";
  }else if(number === 4){
    return "Thursday";
  }else if(number === 5){
    return "Friday";
  }else if(number === 6){
    return "Saturday";
  }else if(number === 7){
    return "Sunday";
  }else{
    return undefined;
  }
}

//More efficient way to do printDay

function printDay(number){
  var obj = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",
  };
  return obj[number];
}


function lastElement(array){
  if(array.length === 0){
    return undefined;
  }else{
    return array[array.length-1];
  }
}

function numberCompare(num1,num2){
  if(num1 > num2){
    return "First is greater"
  }else if(num2 > num1){
    return "Second is greater";
  }else{
    return "Numbers are equal";
  }
}

function singleLetterCount(string1,string2){
  var count = 0;
  for(var i = 0; i<string1.length; i++){
    if(string1[i].toLoweCase() === string2.toLowerCase()){
      count++
    }
  }
  return count;
}

PART 2:
function multipleLetterCount(string){
  var obj = {};
  for(var i =0; i<string.length; i++){
    if(string[i] in obj){
      obj[string[i]]++;
    }else{
      obj[string[i]] = 1;
    }
  }
  return obj;
}

function arrayManipulation(array,command,location,value){
  if(command === "remove" && location === "beginning"){
    return array.shift();
  }else if(command === "remove" && location === "end"){
    return array.pop();
  }else if(command === "add" && location === "beginning"){
    return array.unshift(value);
  }else if(command === "add" && location === "end"){
    return array.push(value);
  }
}

//more efficient way to do arrayManipulation

function arrayManipulation(array,command,location,value){
  if(command === "remove"){
    if(location === "end"){
      return array.pop()
    }
    return array.shift();
  }else if(command === "add"){
    if(location === "beginning"){
      array.unshift(value);
      return array;
    }
  }
  array.push(value);
  return array;
}

function isPalindrome(string){
  for(var i =0; i<string.length; i++){
    if(string[i] !== string[string.length-1-i]){
      return false;
    }
  }
  return true;
}

PART 3:
function rockPaperScissor(){
  function determineComputerChoice(number){
    if(number <= .33){
      return "rock";
    }else if(number <= .66){
      return "paper";
    }else{
      return "scissor";
    }
  }

  var userChoice = prompt("Rock, paper or scissor? Pick one.").toLowerCase();
  var possibleAnswers = ["rock", "paper", "scissor"];

  if(!possibleAnswers.includes(userChoice) || !userChoice){
    return "Please enter a valid move";
  }

  var computerChoice = determineComputerChoice(Math.random());
  if(userChoice === "rock" && computerChoice === "paper"){
    return "You lose";
  }else if(userChoice === "paper" && computerChoice === "scissor"){
    return "You lose";
  }else if(userChoice === "scissor" && computerChoice === "rock"){
    return "You lose";
  }
  return "You win";
}
