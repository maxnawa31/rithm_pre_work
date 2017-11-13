function add(number1,number2){
  return number1+number2;
}

function subtract(number1,number2){
  return number1-number2;
}

function multiply(number1,number2){
  return number1*number2;
}

function divide(number1,number2){
  return number1/number2;
}

function sayHello(string){
  if(string === "Max"){
    return "Hello Boss"
  }else{
    return "Hello " + string;
  }
}

function average(array){
  var sum =0
  for(var i =0; i<array.length; i++){
    sum+=array[i];
  }
  return sum/array.length;
}

function createStudent(string1,string2){
  var obj ={};
  obj.firstName=string1;
  obj.lastName=string2
  return obj;
}

var max = createStudent("Max", "Nawa");
var andrea = createStudent("Andrea","Kuan");
var suzanne = createStudent("Suzanne", "Nawa");

var students = [max,andrea,suzanne];

function findStudentByFirstName(string){
  var upperCaseName = string.toUpperCase();
  for(var i =0; i<students.length; i++){
    if(students[i].firstName.toUpperCase() === upperCaseName){
      return true;
    }
  }
  return false;
}

function extractEveryThird(array){
  var newArray = [];
  for(var i =2; i<array.length; i+=3){
    newArray.push(array[i]);
  }
  return newArray;
}

function countEvenAndOdds(array){
  var obj ={evenCount=0,
            oddCount=0};
  for(var i =0; i<array.length; i++){
    if(array[i]%2 ===0){
      obj.evenCount++;
    }else{
      obj.oddCount++;
    }
  }
  return obj;
}

//"Hello from global";
//"Hello from global";

function onlyCapitalLetters(string){
  var newString = "";
  for(var i =0; i<string.length; i++){
    if(string[i]===string[i].toUpperCase()){
      newString += string[i];
    }
  }
  return newString;
}
