const findTheOldest = function (people) {
  people.sort((firstPerson, secondPerson) => {
    const firstAge = deadOrAlive(firstPerson) - firstPerson.yearOfBirth;
    const secondAge = deadOrAlive(secondPerson) - secondPerson.yearOfBirth;

    if (firstAge <= secondAge) {
      return 1;
    } else {
      return -1;
    }
  });
  return people[0];
};

function deadOrAlive(person) {
  const currentYear = new Date().getFullYear();

  if (person.yearOfDeath === undefined) {
    return currentYear;
  } else {
    return person.yearOfDeath;
  }
}

// Do not edit below this line
module.exports = findTheOldest;
