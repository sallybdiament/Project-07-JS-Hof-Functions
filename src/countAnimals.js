const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return data.species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  if (animal.specie !== undefined && animal.sex === undefined) {
    const re = data.species.filter((e) => animal.specie === e.name).map((e) => e.residents.length);
    return re[0];
  }
  const objResidentes = data.species.filter((e) => animal.specie === e.name)[0].residents;
  const arrayRetorno = objResidentes.filter((residente) => animal.sex === residente.sex);
  return arrayRetorno.length;
}

// console.log(countAnimals());
// console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
