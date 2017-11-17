PRACTICE:
1) function each(array, callback){
  for(var i = 0; i < array.length; i++){
    callback(array[i]);
  }
}

EXERCISES:
1) function map(array, callback){
  var newArray = [];
  for(var i = 0; i < array.length; i++){
    newArray.push(callback(array[i]));
  }
  return newArray;
}

2) function reject(array, callback){
  var newArray = [];
  for(var i =0; i < array.length; i++){
    if(callback(array[i])){
      newArray.push(array[i]);
    }
  }
  return newArray;
};
