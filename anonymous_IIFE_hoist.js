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
