const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const novoObjeto = data.species.filter((specie) => specie.name === animal);
  // console.log(novoObjeto);
  const nomeAnimais = novoObjeto[0].residents;
  return nomeAnimais.every((nomeAnimal) => nomeAnimal.age >= age);
}

console.log(getAnimalsOlderThan('otters', 7));
// console.log(getAnimalsOlderThan('lions'));
console.log(getAnimalsOlderThan('penguins', 10));
module.exports = getAnimalsOlderThan;
