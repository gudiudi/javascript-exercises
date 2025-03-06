const findTheOldest = function(people) {
  const thisYear = new Date().getFullYear();
  
  return people
    .map((x) => ((!x.yearOfDeath) ? {...x, yearOfDeath: thisYear} : x))
    .sort((a, b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth))[0]
};

// Do not edit below this line
module.exports = findTheOldest;
