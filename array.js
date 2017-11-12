Array Basics:

1)var favoriteFoods = ["Sushi", "chips","hot dogs"];
2)favoriteFoods[1];
3)favoriteFoods[2]="nachos";
4)var formerFavoriteFood = favoriteFoods.shift();
5)favoriteFoods.push("frech fries");
6)favoriteFoods.unshift("hamburger");
7)Returns undefined
8)var array = [2,3,4,5];
  array.splice(1,1);


Array Methods:
Part 1:
var arr = [];
arr.push("Max");
arr.push("Nawa");
arr.unshift("orange");
arr.shift();
var arr2 = [];
arr2.push(5);
arr2.push("Javascript");
arr2.indexOf(42);
returns false;
var combinedArr = arr.concat(arr2);

Part 2:
var arr = ["Javascript", "Python", "Ruby", "Java"];
1)var newArr = arr.slice(1,3);
2)newArr.concat(["Haskell","Clojure"]);
4) arr[0] + ", " + arr[1] + ", " + arr[2] + ", " + arr[3]
