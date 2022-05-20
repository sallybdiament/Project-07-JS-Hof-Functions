const data = require('../data/zoo_data');

const result = [];
function getSpeciesByIds(...ids) {
  if (ids === '') {
    return result;
  }
  return data.species.filter((specie) => ids.includes(specie.id));
}
console.log(result);
console.log(getSpeciesByIds());
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
const actual = getSpeciesByIds(
  '0938aa23-f153-4937-9f88-4858b24d6bce',
  'e8481c1d-42ea-4610-8e11-1752cfc05a46',
);
console.log(actual);

module.exports = getSpeciesByIds;
