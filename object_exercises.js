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


Object Exercises:
var programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

1)programming.languages.push("Go");
2)programming.difficulty = 7;
3)delete programming.jokes;
4)programming.isFun = true;
5) for(var i =0; i<programming.languages.length;i++){
  console.log(programming.languages[i]);
}
6)for(var key in programming){
  console.log(key);
}
7)for(var key in programming){
  console.log(programming[key]);
}
