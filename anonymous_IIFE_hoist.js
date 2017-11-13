(function displayFullName(firstName,lastName){
  return firstName + " " + lastName
})("Max", "Nawa");



function createCalculator(){
  return {
      add:function(num1,num2){
        return num1 + num2;
      },
      subtract:function(num1,num2){
        return num1 - num2
      },
      multiply:function(num1,num2){
        return num1 * num2;
      },
      divide:function(num1,num2){
        return num1 % num2;
      }

  }
}

Hoisting Exercises:
1)"Tim";
2)firstName not defined;
3)undefined;
4)firstName not defined;
5)Hi undefined;
6)Hi + firstName not defined;
7)"Hi!";
8)sayHi is not a function
