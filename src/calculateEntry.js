const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18);
  const senior = entrants.filter((entrant) => entrant.age >= 50);
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const numberOfChildren = child.length;
  const numberOfadults = adult.length;
  const numberOfSeniors = senior.length;
  return ({ adult: numberOfadults, child: numberOfChildren, senior: numberOfSeniors });
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const objTotal = countEntrants(entrants);
  const valorTotal = objTotal.adult * 49.99 + objTotal.senior * 24.99 + objTotal.child * 20.99;
  return valorTotal;
}

module.exports = { calculateEntry, countEntrants };
