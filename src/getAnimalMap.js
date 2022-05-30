// const data = require('../data/zoo_data');

// function mapInicial() {
//   return data.species.reduce((acc, specie) => {
//     acc[specie.location].push(specie.name);
//     return acc;
//   }, { NE: [], NW: [], SE: [], SW: [] });
// }

// // console.log(mapInicial());

// function mapComNomeDosAnimais() {
//   return data.species.reduce((acc, specie) => {
//     acc[specie.location].push({ [specie.name]: specie.residents.map((resident) => resident.name) });
//     return acc;
//   }, { NE: [], NW: [], SE: [], SW: [] });
// }

// // console.log(mapComNomeDosAnimais());

// function mapComNomeDosAnimaisSort() {
//   return data.species.reduce((acc, specie) => {
//     acc[specie.location].push({ [specie.name]: (specie.residents.map((res) => res.name)).sort() });
//     return acc;
//   }, { NE: [], NW: [], SE: [], SW: [] });
// }

// // console.log(mapComNomeDosAnimaisSort().NE);

// function mapComNomeDosAnimaisSexFemale(options) {
//   return data.species.reduce((acc, specie) => {
//     const residentsPorSex = specie.residents.filter((resident) => resident.sex === options.sex);
//     acc[specie.location].push({ [specie.name]: residentsPorSex.map((female) => female.name) });
//     return acc;
//   }, { NE: [], NW: [], SE: [], SW: [] });
// }

// // console.log(mapComNomeDosAnimaisSexFemale({ sex: 'female' }).NW);

// function mapComNomeDosAnimaisSexFemaleSorted(options) {
//   return data.species.reduce((acc, specie) => {
//     const residentsSex = specie.residents.filter((resident) => resident.sex === options.sex);
//     acc[specie.location].push({ [specie.name]: residentsSex.map((female) => female.name).sort() });
//     return acc;
//   }, { NE: [], NW: [], SE: [], SW: [] });
// }

// // console.log(mapComNomeDosAnimaisSexFemaleSorted({ sex: 'female' }).NW);

// function tresParam(options) {
//   if (options.includeNames === true && options.sorted === true && options.sex === 'female') {
//     return mapComNomeDosAnimaisSexFemaleSorted(options);
//   }
// }

// function includesNameTrueESexFemale(options) {
//   if (options.includeNames === true && options.sorted === true) {
//     return mapComNomeDosAnimaisSort();
//   }
// }

// // function includesNameTrueSortedTrue(options) {
// //   if (options.includeNames === true && options.sorted === true) {
// //     return mapComNomeDosAnimaisSort();
// //   }
// // }

// // function includesNameTrue(options) {
// //   if (options.includeNames === true) {
// //     return mapComNomeDosAnimais();
// //   }
// // }

// // console.log(includesNameTrue());

// function getAnimalMap(options = 'todos') {
//   // if (options.includeNames === true && options.sorted === true && options.sex === 'female') {
//   //   return mapComNomeDosAnimaisSexFemaleSorted(options)
//   // }
//   // if (options.includeNames === true && options.sorted === true) {
//   //   return mapComNomeDosAnimaisSort();
//   // }
//   tresParam(options);
//   includesNameTrueESexFemale(options);
//   if (options.includeNames === true && options.sex === 'female') {
//     return mapComNomeDosAnimaisSexFemale(options);
//   }
//   if (options.includeNames === true) {
//     return mapComNomeDosAnimais();
//   }
//   return mapInicial();
// }

// // console.log(getAnimalMap({ includeNames: true, sex: 'female' }));

// module.exports = getAnimalMap;

const data = require('../data/zoo_data');

function ordenatedElements(element, sorted) {
  if (sorted) {
    return element.sort();
  }
  return element;
}
function mapInicial() {
  return data.species.reduce((acc, specie) => {
    acc[specie.location].push(specie.name);
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}
function mapComNomeDosAnimais(options) {
  return data.species.reduce((acc, specie) => {
    acc[specie.location].push({ [specie.name]: ordenatedElements(specie.residents.map((resident) =>
      resident.name), options.sorted) });
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}
function mapComNomeDosAnimaisSexFemaleSorted(options) {
  return data.species.reduce((acc, specie) => {
    const residentsSex = specie.residents.filter((resident) => resident.sex === options.sex);
    acc[specie.location].push({ [specie.name]: ordenatedElements(residentsSex.map((female) =>
      female.name), options.sorted) });
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}
function getAnimalMap(options = 'todos') {
  if (options.includeNames === true && options.sex) {
    return mapComNomeDosAnimaisSexFemaleSorted(options);
  }
  if (options.includeNames === true) {
    return mapComNomeDosAnimais(options);
  }
  return mapInicial();
}
module.exports = getAnimalMap;
