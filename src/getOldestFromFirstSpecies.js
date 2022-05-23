const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employeeOfId = data.employees.filter((employee) => employee.id === id);
  const idAnimals = employeeOfId[0].responsibleFor;
  const animaisDoEmployee = data.species.find((specie) => idAnimals.includes(specie.id));
  const idadesAnimais = animaisDoEmployee.residents.map((animal) => animal.age);
  const iddadesOrdenadas = idadesAnimais.sort((n1, n2) => n1 - n2);
  const maiorIdade = iddadesOrdenadas[iddadesOrdenadas.length - 1];
  const maiorAnimal = animaisDoEmployee.residents.filter((resident) => resident.age === maiorIdade);
  const result = [maiorAnimal[0].name, maiorAnimal[0].sex, maiorAnimal[0].age];
  return result;
}

// const result = getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
// console.log(result);

// const animals = data.species.map((specie) => specie.name);
// console.log(animals);
module.exports = getOldestFromFirstSpecies;
