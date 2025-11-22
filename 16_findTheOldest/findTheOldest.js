const findTheOldest = function (people) {
  return people.reduce((currentEldest, person) => {
    let year = new Date().getFullYear();

    console.log(currentEldest);
    console.log(person);

    if (!("yearOfDeath" in currentEldest)) {
      currentEldest.yearOfDeath = year;
    }

    if (!("yearOfDeath" in person)) {
      person.yearOfDeath = year;
    }

    let currentEldestAge =
      currentEldest.yearOfDeath - currentEldest.yearOfBirth;
    let personAge = person.yearOfDeath - person.yearOfBirth;

    if (personAge > currentEldestAge) {
      return person;
    } else return currentEldest;
  }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
