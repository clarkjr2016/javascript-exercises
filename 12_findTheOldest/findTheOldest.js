const findTheOldest = function(a) {
  
    let ageArray = [];
    let returnName;
    
    for (let obj of a) {
        if (obj.yearOfDeath) {
        let birthYear = obj.yearOfBirth;
        let deathYear = obj.yearOfDeath;
        let age = deathYear - birthYear;
        obj.age = age;
        ageArray.push(age);
} else if (!obj.yearOfDeath) {
        let birthYear = obj.yearOfBirth;
        let date = new Date();
        let thisYear = date.getFullYear();
        let age = thisYear - birthYear;
        obj.age = age;
        ageArray.push(age);
}

    if (obj.age == Math.max(...ageArray)) {
        returnName = obj;
    }
}
    return returnName;

};

const people = [
    {
      name: "Carly",
      yearOfBirth: 2018
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
