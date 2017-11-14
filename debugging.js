1)//the throw keyword is used to throw a user-defined exception.
2)//finally keyword provides statements that are run after
// the try statement completes.Code inside finally statements
// is run regardless if errors are being thrown.
3)//TypeError occurs when you make incorrect use of certain types in JS.
  // ReferenceError is when the user tries to access variables that do
  //not exist in that scope.
4)//go to google developer tools, then go to sources, go to snippets
  // then click create new snippet.
5) //An exception is an error that is caught in your prgram. It was
//an exception to what the program expected.
6) try{
  if(typeof number !== "number")
}catch(e){
  console.log("not a number");
}

PART 1:
1)person;
  //will throw an ReferenceError because the person variables
  // is not defined; fix it by setting it to a value;

2) var data = {};
  data.displayInfo();
  //will throw a TypeError because data.displayInfo is not a function.
  //fix it setting the value of data.displayInfo to a function.

3) var data = {};
    data.displayInfo.foo = "bar";
  // will throw a TypeError because there is no property
  //called displayInfo, therefore cannot set property of "foo"
  //on displayInfo.

4) function data(){
  var thing = "foo";
}
data();
thing;
// will throw a ReferenceError because the variable thing is
//not defined because it doesn't have access to variables
//not in its scope.


PART 2:
1) for(var i=0; i > 5; i++){
    console.log(i);
}
should be: for(var i = 0; i < 5; i++){
  console.log(i)
}
// original function results in an infinte loop because of i>5;

2) function addIfEven(num){
    if(num % 2 = 0){
        return num + 5;
    }
    return num;
}

should be: function addIfEven(num){
  if(num % 2 === 0){
    return num +5;
  }
  return num;
}
//original function is using single equal sign which
//is used for assigning values to variables.

3)function loopToFive(){
    for(var i=0, i < 5, i++){
        console.log(i);
    }
}

should be : function loopToFive(){
  for(var i = 0; i < 5; i++){
    console.log(i)
  }
}
//original function is using commas instead of semi-colons.

4)function displayEvenNumbers(){
    var numbers = [1,2,3,4,5,6,7,8];
    var evenNumbers = [];
    for(var i=0; i<numbers.length-1; i++;){
        if(numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}

should be: function displayEvenNumbers(){
  var numbers = [1,2,3,4,5,6,7,8];
  var evenNumbers = [];
  for(var i = 0; i<numbers.length; i++){
    if(numbers[i] % 2 === 0){
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}
//each part of for loop should be seperated by semi-colon
//for loop should iterate up to <numbers.length.
//there shoul be no semi-colon after i++/
//should be numbers[i] inside if statement;
//should use triple equal sign inside of if staement;
//there should not be a semi-colon after closing paranthesis for if statement
//should be pushing numbers[i] instead of just i;
//return evenNumbers should be outside of for-loop.
