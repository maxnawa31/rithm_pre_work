1)
function displayCities(instructorData) {
  for (var i = 0; i < instructorData.additionalData.moreDetails.citiesLivedIn.length; i++) {
    conosole.log(instructorData.citiesLivedIn[i])
  }
}

2)
function displayHometownData(instructorData) {
  for (var key in instructorData.additionalData.hometown) {
    console.log(instructorData.additionalData.hometown[key]);
  }
}
3)
function addDetail(key, value) {
  var moreDetailsObject = instructorData.additionalData.moreDetails;
  moreDetailsObject[key] = value;
  return moreDetailsObject;
}

4)
function removeDetail(key) {
  var details = instructorData.additionalData.moreDetails;
  delete details[key]
  return details;
}

NESTED OBJECTS EXERCISES PART 2:
var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
        this.snacks.push(snack);
        return this;
    }
  }
}

1) var prime = nestedData.innerData.numberData.primeNumbers;
for(var i = 0; i<prime.length; i++){
  console.log(prime[i]);
}

2) var fib = nestedData.innerData.numberData.fibonnaci;
  for(var i = 0; i < fib.length; i++){
    if(fib[i] % 2 === 0){
    console.log(fib[i]);
    }
  }
3)var orderArray = nestedData.innerData.order;
  console.log(orderArray[1]);
4)nestedData.innerData.addSnack("chocolate");
5)"this" refers to the innerData object;

var nestedObject = {
  speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
          hello: "Hola"
      },
      french: {
          hello: "Bonjour"
      }
    }
  }
}

1) function addSpeaker(firstName){
    var nameArray = nestedObject.speakers;
    nameArray.push({name:firstName});
}

2) function addLanguage(languageName,sayHello){
    var languageObject = nestedObject.data.languages;
    languageObject[languageName]={hello:sayHello}
};

3) function addCountry(country,cap,pop){
  var countryObj = nestedObject.continents.europe.countries;
  countryObj[country]= {capital:cap,
                        population:pop
  };
}
