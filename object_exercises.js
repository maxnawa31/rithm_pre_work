1) var obj = {
  firstName:"Max",
  lastName:"Nawa",
  occupation:"student"
};

2)obj.firstName;
  obj["firstName"];
  obj.lastName;
  obj["lastName"];
  obj.occupation;
  obj["occupation"];

3)obj.hobby = "golf";
  delete obj.occupation;

4)//bracket notation is used when a variable or expression
  //is passed through as key. Dot notation is used when
  // we know the name of the key.

1)Object Iteration:
for(var key in namesAndHobbies){
  console.log(key + "=>" + namesAndHobbies[key]);
}

2)namesAndHobbies.Max="golf";
3)if("Max" in namesAndHobbies){
  console.log("Max =>" + namesAndHobbies.Max);
}
