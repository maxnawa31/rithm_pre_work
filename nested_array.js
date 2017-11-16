EXERCISES PART 1:
1) function printEvens(array){
  for(var i = 0 ;i < array.length; i++){
    for(var j =0; j > array[i].length; j++){
      if(array[i][j] % 2 === 0){
        console.log(array[i][j]);
      }
    }
  }
}

2) function sumTotal(array){
  var sum = 0;
  for(var i = 0 ;i < array.length; i++){
    for(var j = 0 ;j < array[i][j]; j++){
      sum += array[i][j];
    }
  }
  return sum;
}

3) function countaVowels(array){
  for(var i = 0; i < array.length; i++){
    for(var j = 0; j < array[j].length; j++ )
    }
  }

  var nestedArr = ['Elie', ['Matt', ['Tim']],['Colt',['Whisky',['Janey'], 'Tom']], 'Lorien'];

EXERCISES PART 2:

1) function rotate(array, number){
  var limit = number % array.length;
  for(var i = 0; i < limit; i++){
    array.unshift(array.pop())
  }
  return array;
}

2) function makeXOgrid(rows,columns){
  var newArray =[];
  for(var i = 0; i < rows; i++){
    var arr = [];
    for(var j =0; j < columns; j++){
      if(j % 2 ===0){
        arr.push("X");
      }else{
        arr.push("O");
      }
    }
    newArray.push(arr);
  }
  return newArray;
}
