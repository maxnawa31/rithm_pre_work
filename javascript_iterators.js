function printFirstAndLast(array){
  array.forEach(function(value){
    console.log(value[0] + value[value.length-1]);
  });

}

function addKeyAndValue(array,key,value){
  array.forEach(function(element){
    element[key]=value;
  });
  return array;
};

function valTimesIndex(array){
  return array.map(function(element,index){
    return element * index;
  })
}

function extractKey(array,key){
  return array.map(function(element){
    return element[key];
  })
}

function filterLetters(array,letter){
  var newArray = array.filter(function(element){
    return element.toLowerCase() === letter.toLowerCase();
  })
  return newArray.length;
}

function filterKey(array,key){
  var newArray = array.filter(function(element){
    if(element[key]){
      return element;
    }
  });
  return newArray;
}

function extractKey(array,key){
  return array.reduce(function(acc,next){
     acc.push(next[key]);
     return acc;
  },[]);
};

function filterLetters(array,letter){
  return array.reduce(function(acc,next){
    if(next.toLowerCase() === letter.toLowerCase()){
      acc++;

    }
    return acc;
  },0)
}

function addKeyAndValue(array,key,value){
  return array.reduce(function(acc,next,index){
    acc[index][key]=value;
    return acc;
  },array);

}

var users = [
{
  username: "larry",
  email: "larry@foo.com",
  yearsExperience: 22.1,
  favoriteLanguages: ["Perl", "Java", "C++"],
  favoriteEditor: "Vim",
  hobbies: ["Fishing", "Sailing", "Hiking"],
  hometown: {
    city: "San Francisco",
    state: "CA"
  }
},
{
  username: "jane",
  email: "jane@test.com",
  yearsExperience: 33.9,
  favoriteLanguages: ["Haskell", "Clojure", "PHP"],
  favoriteEditor: "Emacs",
  hobbies: ["Swimming", "Biking", "Hiking"],
  hometown: {
    city: "New York",
    state: "NY"
  }
},
{
  username: "sam",
  email: "sam@test.com",
  yearsExperience: 8.2,
  favoriteLanguages: ["JavaScript","Ruby", "Python", "Go"],
  favoriteEditor: "Atom",
  hobbies: ["Golf", "Cooking", "Archery"],
  hometown: {
    city: "Fargo",
    state: "SD"
  }
},
{
  username: "anne",
  email: "anne@test.com",
  yearsExperience: 4,
  favoriteLanguages: ["C#", "C++", "F#"],
  favoriteEditor: "Visual Studio Code",
  hobbies: ["Tennis", "Biking", "Archery"],
  hometown: {
    city: "Albany",
    state: "NY"
  }
},
{
  username: "david",
  email: "david@test.com",
  yearsExperience: 12.5,
  favoriteLanguages: ["JavaScript", "C#", "Swift"],
  favoriteEditor: "Sublime Text",
  hobbies: ["Volunteering", "Biking", "Coding"],
  hometown: {
    city: "Los Angeles",
    state: "CA"
  }
}
]

function printEmails(array){
  array.forEach(function(element){
    console.log(element.email);
  });
};

function printHobbies(array){
  array.forEach(function(element){
    for(var i =0; i<element.hobbies.length; i++){
      console.log(element.hobbies[i]);
    }
  });
}

function findHometownByState(state,array){
  array.forEach(function(element){
    if(element.hometown.state === state){
      return element;
    }
  })
};

function allLanguages(array){
  var languagesArray = [];
  array.forEach(function(element){
    element.favoriteLanguages.forEach(function(language){
      if(!languagesArray.includes(language)){
        languagesArray.push(language);
      }
    })
  })
  return languagesArray;
};

function hasFavoriteEditor(array,editor){
  return array.some(function(element){
    return element.favoriteEditor === editor;
  })
}

function vowelCount(string){
  var newObj = {};
  var vowels = ["a","e","i","o","u"];
  var array = string.split("");
  array.forEach(function(element){
    if(vowels.includes(element.toLowerCase())){
      if(newObj.hasOwnProperty(element.toLowerCase())){
        newObj[element.toLowerCase()]++;
      }else{
        newObj[element.toLowerCase()] = 1;
      }
    }
  })
  return newObj;
}

function removeVowels(string){
  var newArray = string.split("");
  var vowels = ["a","e","i","o","u"];
  return newArray.filter(function(element){
    if(!vowels.includes(element.toLowerCase())){
      return element;
    }
  })
}

JAVASCRIPT ITERATORS:
function listNames(array){
  array.forEach(function(element){
    console.log(element.name);
  })
};

function listSongDetails(array){
  array.forEach(function(element){
    console.log(element.name + ", by " + element.artist + "(" + element.duration + ")");
  })
};

function summerJamCount(array){
  var count = 0;
  array.forEach(function(element){
    if(element.month === 6 || element.month === 7 || element.month === 8){
      count++;
    }
  })
  return count;
};

function getDurations(array){
  return array.map(function(element){
    return element.duration;
  })
};

function getDurationInSeconds(array){
  return array.map(function(element){
    return parseInt(element.duration) * 60;
  })
};

function getMainArtists(array){
  return array.map(function(element){
    return element.artist;
  })
}

function getBigHits(array){
  array.filter(function(element){
    return element.weeksAtNumberOne >= 10
  })
};

function getShortSongs(array){
  return array.filter(function(element){
    return parseInt(element.duration) < 3;
  })

};

function getSongsByArtists(array,artistName){
  return array.filter(function(element){
    if(artistName === element.artist){
      return element.name;
    }
    });
};

function summerJamCount(array){
  return array.reduce(function(acc,next){
    if(element.month === 6 || element.month === 7 || element.month === 8){
     acc++;
     return acc;
   };
  },0);
};

function getTotalDurationInSeconds(array){
  return array.reduce(function(acc,next){
    acc += parseInt(next.duration) * 60;
  },0)
  return acc;
}

function getSongCountByArtist(array){
  return array.reduce(function(acc,next){
    if(acc.hasOwnProperty(next.artist)){
      acc[next.artist]++;
    }else{
      acc[next.artist] = 1;
    }
    return acc;
  },{});

  function averageWeeksAtNumberOne(array){
    return array.reduce(function(acc,next){
       acc += next.weeksAtNumberOne;
       return acc;
    },0)

}
