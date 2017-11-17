//EXERCISES:
//1) A closure is the concept of variables defined within functions are not available to outside
  //functions. However, variables defined outside of functions are available to inner functions.

//2)Closures are useful because they give us the power to create private variables, or in other words
  //variables that cannot be accessed directly. Closures also gives us the ability to create modules, or portions of
  //code that can be reused very easily.

//3) A module is a reusable block of code whose existence does not accidently impact other code.

//4) The arguments keyword is an array like object that contains all of the arguments inputed my the user
  //when a function is invoked.

//5) We call it an array like object because it looks like an array, it has a length property
  //like normal arrays, however, it is not actually an array.

function createCounter(){
  var count = 0;
  return function(){
    return ++count;
  }
}
